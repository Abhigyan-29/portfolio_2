import { useEffect, useState } from "react"

const Footer = () => {
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
         
        })
      )

      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
          
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="
      fixed bottom-0 left-72 right-0
      bg-[#111111]
      border-t border-neutral-800
      px-10 py-4
      text-sm text-gray-400
      flex items-center justify-between
      backdrop-blur-md
    ">

      {/* Left */}
      <div className="hover:text-white transition duration-300">
        Made by <span className="font-medium text-white">Abhigyan</span> © 2026
      </div>

      {/* Right */}
      <div className="flex gap-6 text-gray-300">
        <span>{date}</span>
        <span className="font-mono">{time}</span>
      </div>

    </div>
  )
}

export default Footer
