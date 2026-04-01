import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Sidebar from "./layout/Sidebar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Tools from "./pages/Tools"
import Experience from "./pages/Experience"
import Current from"./pages/Current"

function App() {
  const location = useLocation()

  return (
    <div className="relative flex min-h-screen bg-transparent text-[#ededed] overflow-x-hidden selection:bg-purple-500/30 selection:text-white">

      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 pl-72">

        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1 pb-20"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/current" element={<Current />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        <Footer />

      </div>

    </div>
  )
}

export default App
