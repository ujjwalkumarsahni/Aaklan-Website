import userModel from '../models/userModel.js';
import otpModel from '../models/otpModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Send OTP for Registration
export const sendOtp = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        success: false,
        message: 'Phone number is required'
      });
    }

    // Check if user already exists with this phone
    const existingUser = await userModel.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this phone number'
      });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Set expiration time (5 minutes from now)
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // Save OTP to database
    await otpModel.create({
      phone,
      otp,
      expiresAt
    });

    // In production, you would send OTP via SMS service here
    console.log(`OTP for ${phone}: ${otp}`);

    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
    });

  } catch (error) {
    console.error('Send OTP error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Verify OTP
export const verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Phone and OTP are required'
      });
    }

    // Find OTP record
    const otpRecord = await otpModel.findOne({
      phone,
      otp,
      expiresAt: { $gt: new Date() },
      verified: false
    });

    if (!otpRecord) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired OTP'
      });
    }

    // Check attempts
    if (otpRecord.attempts >= 3) {
      return res.status(400).json({
        success: false,
        message: 'Maximum OTP attempts exceeded'
      });
    }

    // Mark OTP as verified
    otpRecord.verified = true;
    await otpRecord.save();

    res.status(200).json({
      success: true,
      message: 'OTP verified successfully'
    });

  } catch (error) {
    console.error('Verify OTP error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Register User
export const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      grade,
      course,
      classType,
      referenceCode
    } = req.body;

    // Check if OTP is verified
    const verifiedOtp = await otpModel.findOne({
      phone,
      verified: true,
      expiresAt: { $gt: new Date() }
    });

    if (!verifiedOtp) {
      return res.status(400).json({
        success: false,
        message: 'Please verify your phone number first'
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({
      $or: [{ email }, { phone }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email or phone'
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
      phone,
      phoneVerified: true,
      grade,
      course,
      classType,
      referenceCode: referenceCode || null
    });

    // Generate token
    const token = generateToken(user._id);

    // Remove OTP record after successful registration
    await otpModel.deleteOne({ _id: verifiedOtp._id });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          grade: user.grade,
          course: user.course,
          classType: user.classType,
          role: user.role
        },
        token
      }
    });

  } catch (error) {
    console.error('Register error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email or phone'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Find user
    const user = await userModel.findOne({ email }).select('+password');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated'
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          grade: user.grade,
          course: user.course,
          classType: user.classType,
          role: user.role
        },
        token
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId)
      .populate('course', 'name code')
      .select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: { user }
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Update User Profile
export const updateUserProfile = async (req, res) => {
  try {
    const { name, grade, classType } = req.body;
    
    const user = await userModel.findByIdAndUpdate(
      req.userId,
      { name, grade, classType },
      { new: true, runValidators: true }
    ).select('-password');

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: { user }
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Get All Users (Admin only)
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find()
      .populate('course', 'name code')
      .select('-password');

    res.status(200).json({
      success: true,
      data: { users }
    });

  } catch (error) {
    console.error('Get all users error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};