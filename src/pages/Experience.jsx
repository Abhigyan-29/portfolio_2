import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const Experience = () => {
  return (
    <div className="px-10 md:px-24 py-20 max-w-5xl relative">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-semibold mb-12"
      >
        Experience
      </motion.h1>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >

        {/* DukanGram Internship */}
        <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
          <h2 className="text-2xl font-semibold text-white mb-1">
            Frontend Developer Intern <span className="text-purple-400">— DukanGram</span>
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Sep 2025 – Nov 2025 | HTML, CSS, JavaScript
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
            <li>
              Developed responsive web pages using HTML, CSS, and JavaScript.
            </li>
            <li>
              Assisted in building and improving UI components to enhance user experience.
            </li>
          </ul>
        </motion.div>

        {/* Blithe Internship */}
        <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50 group-hover:bg-cyan-400 transition-colors duration-300"></div>
          <h2 className="text-2xl font-semibold text-white mb-1">
            Frontend Developer Intern <span className="text-purple-400">— Blithe</span>
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Dec 2025 – Jan 2026 | React.js Development
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
            <li>
              Developed responsive web interfaces using React.js, HTML, CSS, and JavaScript.
            </li>
            <li>
              Integrated frontend components with backend APIs to display real-time data.
            </li>
          </ul>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Experience;