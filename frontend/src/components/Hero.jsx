import { motion } from "framer-motion";
import { some } from "../assets/assets.js";

const Hero = () => {
    return (
        <div className="relative w-full overflow-hidden bg-white">

            {/* 🔥 Dot Cluster Top Left */}
            <div className="dot-cluster absolute top-[-50px] left-[-50px]"></div>

            {/* 🔥 Dot Cluster Top Right */}
            <div className="dot-cluster dot-sm absolute top-[-65px] right-[-55px]"></div>

            {/* 🔥 Dot Cluster Bottom Center */}
            <div className="dot-cluster absolute bottom-[-50px] left-[-50px]"></div>

            <div className="dot-cluster absolute bottom-[-50px] right-[-50px]"></div>

            <div className="absolute top-[-68px] right-[-120px] w-[300px] h-[200px] bg-[#FF6900] opacity-70 rounded-full pointer-events-none"></div>
            <div className="absolute top-[-68px] left-[-120px] w-[300px] h-[200px] bg-[#FF6900] opacity-70 rounded-full pointer-events-none"></div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 w-full pointer-events-none">
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full h-[250px]"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#ffb266"
                        fillOpacity="1"
                        d="M0,256L30,250.7C60,245,120,235,180,224C240,213,300,203,360,208C420,213,480,235,540,229.3C600,224,660,192,720,160C780,128,840,96,900,85.3C960,75,1020,85,1080,96C1140,107,1200,117,1260,133.3C1320,149,1380,171,1410,181.3L1440,192L1440,320L0,320Z"
                    ></path>
                </svg>
            </div>



            {/* Main Content */}
            <div className="relative px-4 sm:px-8 md:px-16 lg:px-20 py-14 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Text */}
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:text-left max-w-lg md:max-w-3xl z-10"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                        A DeepTech-Driven EdTech Ecosystem <br />
                        for{" "}
                        <span className="text-orange-500 relative inline-block">
                            Viksit Bharat
                            <span
                                className="absolute left-0 -bottom-1 h-1 w-full bg-orange-500 rounded-full"
                                style={{ transform: "rotate(-3deg)", transformOrigin: "left bottom" }}
                            ></span>
                        </span>
                    </h1>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center md:justify-start mt-6">
                        <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg font-semibold">Get Started</motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 border border-orange-500 text-orange-500 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">Read More</motion.button>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative z-10">
                    <img src={some.circleBanner} alt="Hero Visual" className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[460px] drop-shadow-xl mx-auto" />
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;

