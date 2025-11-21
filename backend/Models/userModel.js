import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  phoneVerified: {
    type: Boolean,
    default: false
  },
  grade: {
    type: String,
    required: true,
    enum: ['9', '10', '11', '12']
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  classType: {
    type: String,
    required: true,
    enum: ['online', 'offline', 'hybrid']
  },
  referenceCode: {
    type: String,
    default: null
  },
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const userModel = mongoose.model('User', userSchema);

export default userModel;