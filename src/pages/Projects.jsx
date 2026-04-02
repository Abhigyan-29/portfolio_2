import pinterestImg from "../assets/pinterest.jpg"
import contentImg from "../assets/content.jpg"
import PortfolioImg from"../assets/portfolio.jpg"
import preptImg from "../assets/prept.jpg"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const projects = [
  {
    title: "Pix",
    description:
      "full-stack web app featuring dynamic image feeds, search, infinite scrolling",
    image: pinterestImg,
    tags: ["AI", "Prompts", "Productivity"],
    visit: "https://pinx-ejri.onrender.com/",
    github: "https://github.com/Abhigyan-29/pin",
    status: "active",
  },
  {
    title: "portfolio Website",
    description:
      "Crafted from scratch with Next.js, TailwindCSS and modern UI principles.",
    image: PortfolioImg,
    tags: ["Personal"],
    visit: "#",
    github: null,
    status: "active",
  },
  {
    title: "Ai Content Generator",
    description:
      "AI-powered productivity platform with 20+ tools for writing, SEO and automation.",
    image: contentImg,
    tags: ["AI", "Tools"],
    visit: "https://ai-content-generator-vpw2.vercel.app/",
    github: "https://github.com/Abhigyan-29/ai-content-generator",
    status: "active",
  },
  {
    title: "Prept",
    description:
      "An AI-powered Interview Platform to help you practice and perfect your interview skills.",
    image: preptImg,
    tags: ["AI", "Interview Prep"],
    visit: "https://prept-7rbu.onrender.com/",
    github: "https://github.com/Abhigyan-29/prept",
    status: "active",
  },
]

const Projects = () => {
  return (
    <div className="px-10 md:px-24 py-20 relative">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-semibold mb-3">Projects</h1>
        <p className="text-gray-400 mb-12">
          Playground – Small MVP to Production Apps
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 xl:grid-cols-2 gap-10"
      >

        {projects.map((project, index) => (
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            key={index}
            className="
              glass-card
              rounded-2xl
              overflow-hidden
              group
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                {project.status === "active" && (
                  <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                    active
                  </span>
                )}
              </div>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex gap-3">
                {project.visit && (
                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black text-sm px-4 py-1 rounded hover:opacity-80 transition"
                  >
                    Visit
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 text-sm px-4 py-1 rounded hover:bg-white/10 transition backdrop-blur-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}

export default Projects
