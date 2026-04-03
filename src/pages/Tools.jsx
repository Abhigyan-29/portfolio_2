import {
  Code2,
  Notebook,
  Terminal,
  Sparkles,
  Brain,
  BrainCircuit,
  BrainCog,
  Database,
  ArrowUpFromLine,
  FolderGit
} from "lucide-react";
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

const tools = [
  { name: "VSCode", category: "IDE", icon: Code2 },
  { name: "ChatGPT", category: "Productivity", icon: Sparkles },
  { name: "Notion", category: "Productivity", icon: Notebook },
  { name: "IntellijIdea", category: "IDE", icon: Terminal },
  { name: "AntiGravity", category: "IDE", icon: Brain },
  { name: "Cursor", category: "IDE", icon: BrainCircuit },
  { name: "Claude", category: "IDE", icon: BrainCog },
  { name: "MongoDB", category: "Database", icon: Database },
  { name: "Postman", category: "API Testing Tool", icon: ArrowUpFromLine },
  { name: "Github", category: "Version Control Platform", icon: FolderGit },
]

const Tools = () => {
  return (
    <div className="min-h-screen flex justify-center w-full">
  <div className="w-full max-w-6xl px-10 md:px-24 py-20 relative">

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl font-semibold mb-4">Shovels</h1>
        <p className="text-gray-400 text-lg">
          Tools I frequently use to make life easier
        </p>
      </motion.div>

      {/* Grid */}
      <div className="flex justify-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >

          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}

        </motion.div>
      </div>
</div>
    </div>
  )
}

const ToolCard = ({ tool }) => {
  const Icon = tool.icon

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className="
        w-full max-w-[300px]
        glass-card
        rounded-xl
        px-6 py-5
        flex items-center gap-4
        cursor-default
      "
    >
      <div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg shadow-inner">
        <Icon size={22} className="text-purple-400" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
        <p className="text-sm text-gray-400">{tool.category}</p>
      </div>
    </motion.div>
  )
}


export default Tools
