import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import {
  Home,
  Folder,
  User,
  Wrench,
LaptopMinimal,
  Twitter,
  Linkedin,
  Github,
  Heart
} from "lucide-react"

import DynamicRole from "../components/DynamicRole"
import profilePic from "../assets/profile.jpg"


const Sidebar = () => {

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: Folder },
    { name: "About", path: "/about", icon: User },
    { name: "Tools", path: "/tools", icon: Wrench },
    { name: "Experience", path: "/experience", icon: LaptopMinimal },
    { name: "Current", path: "/current", icon: Heart },
  ]

  return (
    <div
      className="
        w-72
        h-screen
        fixed
        flex flex-col
        glass-panel
        p-6
        z-40
      "
    >

      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-12">

        <motion.img
          whileHover={{ scale: 1.1, rotate: 5 }}
          src={profilePic}
          alt="Abhigyan Prakash"
          className="
            w-12 h-12 rounded-full object-cover
            border border-purple-500/30
            shadow-[0_0_15px_rgba(147,51,234,0.3)]
          "
        />

        <div>
          <h2 className="font-semibold text-white">Abhigyan Prakash</h2>
          <DynamicRole />
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            text={item.name}
            Icon={item.icon}
          />
        ))}
      </nav>

      {/* Connect Section */}
      <div className="mt-16 text-sm text-gray-400">
        <p className="mb-3 text-gray-300 font-medium">Connect</p>

        <SocialItem
          icon={Twitter}
          text="X (Twitter)"
          url="https://twitter.com/sudo_nix"
        />

        <SocialItem
          icon={Linkedin}
          text="LinkedIn"
          url="https://linkedin.com/in/abhigyanprakash"
        />

        <SocialItem
          icon={Github}
          text="Github"
          url="https://github.com/Abhigyan-29"
        />
      </div>

      

    </div>
  )
}

const NavItem = ({ to, text, Icon }) => {
  return (
    <NavLink to={to} className="relative block group mb-1">
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent border-l-2 border-purple-500 rounded-r-lg"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}

          <div
            className={`
              relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
              ${
                isActive
                  ? "text-white font-medium"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }
            `}
          >
            <Icon size={18} className={`${isActive ? "text-purple-400" : "group-hover:text-purple-400 transition-colors duration-300"}`} />
            {text}
          </div>
        </>
      )}
    </NavLink>
  )
}

const SocialItem = ({ icon: Icon, text, url }) => {
  return (
    <motion.a
      whileHover={{ x: 5, color: "#fff" }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-3 mb-3
        text-gray-400
        transition-colors duration-200
        group
      "
    >
      <Icon size={16} className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
      <span>{text}</span>
    </motion.a>
  )
}

export default Sidebar
