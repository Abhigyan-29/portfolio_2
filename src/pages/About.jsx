import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const About = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="px-10 md:px-24 py-20 max-w-5xl relative"
    >

      {/* Name */}
      <motion.h1 variants={itemVariants} className="text-6xl font-semibold mb-6">Abhigyan</motion.h1>

      {/* Tagline */}
      <motion.p variants={itemVariants} className="text-gray-400 tracking-wide uppercase text-sm mb-8">
        FULL-STACK DEV • AI ENGINEER  • STARTUPS • MUSIC • SPORTS • GAMES
      </motion.p>

      {/* Tech Pills */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-14">
        {["Java","React", "Node.js", "Next.js"].map((tech, i) => (
          <motion.span
            whileHover={{ scale: 1.05 }}
            key={i}
            className="px-4 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 backdrop-blur-md cursor-default shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* Sections */}

      <Section title="Who I Am">
       Hi, I’m Abhigyan, a Bengaluru-based Computer Science engineer with a solid foundation in Data Structures and Algorithms and full-stack development. I’m passionate about building efficient, scalable applications and constantly learning modern technologies to stay ahead in the tech landscape.
      </Section>

      <Section title="What I Do">
        Currently building practical, user-focused products with real-world impact. I focus on developing applications that people actually use daily — prioritizing usability, performance, and scalability. I’m actively working on unique projects and stealth startup-style platforms while continuously sharpening my engineering skills.
      </Section>

      <Section title="My Journey">
        A 2025 Computer Science graduate with experience collaborating with multiple startups, primarily contributing to frontend development and product planning. I’ve helped shape and ship MVPs to production, including AI-powered tools with active users. I enjoy rapid iteration, structured thinking, and continuously improving product experie
      </Section>

      <Section title="Vision">
       Artificial Intelligence is transforming the world and automating the mundane, enabling humans to focus on higher-impact work. I’m committed to staying ahead of this shift by actively exploring and building with AI-driven technologies.
      </Section>

      <Section title="Beyond Code">
        Love sports and games , follow fitness, play volleyball,and explore new places.
      </Section>

      {/* Buttons */}
      <motion.div variants={itemVariants} className="flex gap-4 mt-12">
        <a
          href="/contact"
          className="bg-white text-black px-6 py-2 rounded-lg hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          Get in Touch
        </a>

        <a
          href="mailto:your@email.com"
          className="border border-white/20 px-6 py-2 rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all backdrop-blur-sm"
        >
          E-Mail
        </a>
      </motion.div>

    </motion.div>
  )
}

const Section = ({ title, children }) => {
  return (
    <motion.div variants={itemVariants} className="mb-6 glass-card p-8 rounded-2xl">
      <h2 className="text-xl font-semibold mb-3 text-white">{title}</h2>
      <p className="text-gray-400 leading-relaxed text-[16px]">
        {children}
      </p>
    </motion.div>
  )
}

export default About
