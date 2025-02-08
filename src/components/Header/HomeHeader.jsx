
import introVideo from "../../../public/assets/introMTTF.mp4";
import Link from "next/link";
import { motion } from "motion/react"


function HomeHeader() {

  return (
    <div className="relative min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-center text-white px-4 sm:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} 
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
          }}
        >
          <motion.h1
            variants={{
              hidden: { x: -100, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
            }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Welcome to <span className="text-blue-400">MTTF</span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80, delay: 0.1 } }
            }}
            className="text-base sm:text-lg md:text-xl mb-8"
          >
            International association for Science, Technology, Engineering, and Mathematics professors.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2, type: "spring", stiffness: 80 } }
            }}
          >
            <motion.a
              href="/whoWeAre/about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-sm sm:text-lg rounded-full font-bold hover:bg-blue-700 transition"
            >
              Learn More
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-white text-sm sm:text-lg rounded-full hover:bg-white hover:text-black transition"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>


      </div>
    </div>
  );
}

export default HomeHeader;
