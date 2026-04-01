import { motion } from "framer-motion"

const learning = [
  {
    title: "Java + DSA Bootcamp",
    description: "Complete course for Java programming, Core DSA, and technical interviews.",
    channel: "Kunal Kushwaha",
    link: "https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&si=C-8UwJPqrAa8PmGk",
    status: "learning",
  },
  {
    title: "Complete Backend One Shot",
    description: "Learn Node.js, Express, and MongoDB from scratch in a comprehensive deep dive.",
    channel: "Piyush Garg",
    link: "https://www.youtube.com/watch?v=0IciwnJ6PJI",
    status: "learning",
  },
  {
    title: "Computer Networking Course",
    description: "OSI Model Deep Dive with Real Life Examples.",
    channel: "Kunal Kushwaha",
    link: "https://www.youtube.com/watch?v=IPvYjXCsTg8",
    status: "learning",
  },
  {
    title: "Javascript",
    description: "Advanced JavaScript concepts and interview preparations.",
    channel: "Chai aur Code",
    link: "https://www.youtube.com/watch?v=wH6uf20dpAo&list=PLbtI3_MArDOnNvk8CCCSR01CQ8B8iNh-A&index=3",
    status: "learning",
  },
  {
    title: "Operating Systems (OS)",
    description: "Complete course on Operating Systems for interviews & exams.",
    channel: "Love Babbar",
    link: "https://www.youtube.com/watch?v=_TpOHMCODXo&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
    status: "learning",
  },
  {
    title: "System Design for Beginners",
    description: "Learn the fundamentals of System Design and scalable architecture.",
    channel: "Arpit Bhayani",
    link: "https://arpitbhayani.me/system-design-for-beginners/",
    status: "learning",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
]

const getYoutubeThumbnail = (url) => {
  if (url.includes("v=")) {
    const videoId = url.split("v=")[1]?.split("&")[0]
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }
  return "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const Current = () => {
  return (
    <div className="px-10 md:px-24 py-20 relative max-w-7xl mx-auto">

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-semibold mb-3">Currently Learning</h1>
        <p className="text-gray-400 mb-12">
          Staying sharp. Building daily.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10"
      >

        {learning.map((item, index) => (
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -10 }}
            key={index}
            className="
              glass-card
              rounded-2xl
              overflow-hidden
              group
            "
          >

            {/* Thumbnail */}
            <div className="overflow-hidden bg-black/50">
              <img
                src={item.thumbnail || getYoutubeThumbnail(item.link)}
                alt={item.title}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <span className="bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                  learning
                </span>
              </div>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed min-h-[40px]">
                {item.description}
              </p>

              <p className="text-xs text-gray-500 mt-4 font-medium uppercase tracking-wider">
                {item.channel}
              </p>

              <div className="mt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white/20 text-white text-sm px-5 py-2 rounded-lg hover:bg-white/10 hover:scale-105 active:scale-95 transition-all backdrop-blur-sm"
                >
                  Watch Course
                </a>
              </div>

            </div>
          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}

export default Current