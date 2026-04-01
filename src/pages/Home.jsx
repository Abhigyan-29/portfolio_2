import { useEffect, useState } from "react"
import { FileHeartIcon } from "lucide-react"
import DynamicResumeText from "../components/DynamicResumeText"
import { motion } from "framer-motion";
const Home = () => {
  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true)

 

  return (
    
    
    <div className="p-40 max-w-full relative">
<motion.h1 
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  className="
  absolute top-10 right-16
  text-xs md:text-sm
  tracking-widest uppercase
  text-gray-500/50
  font-medium
  transition-all duration-300
  hover:text-white
">
  Developers love dark mode — so I built for the culture.
</motion.h1>
<motion.h1 
  animate={{ y: [0, 10, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  className="
  absolute bottom-30 left-80
  text-xs md:text-sm
  tracking-widest uppercase
  text-gray-500/50
  font-medium
  transition-all duration-300
  hover:text-white
">
  part logic, part madness, fully vibe coded
</motion.h1>


      {/* Heading */}
    <motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="text-[56px] font-semibold tracking-tight"
>
  Hey, I'm{" "}
  
  <span className="relative inline-block">

    {/* Neon Glow Layer */}
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute inset-0 blur-lg bg-purple-600/30"
    />

    {/* Animated Gradient Text */}
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "200% 50%" }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      className="relative z-10 bg-gradient-to-r 
                 from-purple-400 via-cyan-400 to-purple-400
                 bg-[length:200%_200%]
                 bg-clip-text text-transparent"
    >
      Abhigyan !
    </motion.span>

  </span>
</motion.h1>


      <h2 className="text-[36px] font-bold text-gray-400 mb-10">
        Full-Stack Developer
      </h2>
      

      {/* Resume Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="
          glass-card
          rounded-xl px-6 py-4 mb-10
          flex items-center justify-between
        "
      >
        <div className="flex items-center gap-4 text-[16px] font-semibold text-gray-300">
          <FileHeartIcon size={20} className="text-purple-400" />
          <DynamicResumeText />

        </div>

        <a
          href="https://drive.google.com/file/d/1sqsem-Om-6heMx17xw7GnUGf1xDUVm4P/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="
            bg-white text-black font-bold
            text-sm px-5 py-1 rounded
            hover:opacity-90 hover:scale-105 active:scale-95
            transition-all duration-200
            shadow-[0_0_15px_rgba(255,255,255,0.3)]
          "
        >
          My Resume
        </a>
      </motion.div>

      {/* About Text */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.4,
            }
          }
        }}
        className="max-w-3xl space-y-6"
      >

  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-[17px] leading-8 text-gray-300 tracking-wide transition-all duration-300 hover:text-white hover:-translate-y-1">
    I turn ambiguous ideas into 
    <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      {" "}live, production-ready products{" "}
    </span>
    — quickly. Full-stack developer with a strong focus on AI-driven solutions.
  </motion.p>

  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-[16px] leading-7 text-gray-500 italic tracking-wide">
    Flexible across time zones and comfortable collaborating with global teams.
  </motion.p>

  <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-[17px] leading-8 text-gray-300 tracking-wide transition-all duration-300 hover:text-white hover:-translate-y-1">
    I thrive on execution. From concept to deployment, I iterate rapidly, refine continuously,
    and build with momentum — transforming raw ideas into impactful, real-world solutions.
  </motion.p>

</motion.div>


   

    </div>
  )
}

export default Home
