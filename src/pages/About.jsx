const About = () => {
  return (
    <div className="ml-72 px-24 py-20 max-w-4xl">

      {/* Name */}
      <h1 className="text-6xl font-semibold mb-6">Abhigyan</h1>

      {/* Tagline */}
      <p className="text-gray-400 tracking-wide uppercase text-sm mb-8">
        FULL-STACK DEV • AI ENGINEER  • STARTUPS • MUSIC • SPORTS • GAMES
      </p>

      {/* Tech Pills */}
      <div className="flex flex-wrap gap-3 mb-14">
        {["Java","React", "Node.js", "Next.js"].map((tech, i) => (
          <span
            key={i}
            className="px-4 py-1 text-sm rounded-full bg-[#1a1a1a] border border-[#262626] text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

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
      <div className="flex gap-4 mt-12">
        <a
          href="/contact"
          className="bg-white text-black px-6 py-2 rounded-lg hover:opacity-80 transition"
        >
          Get in Touch
        </a>

        <a
          href="mailto:your@email.com"
          className="border border-[#262626] px-6 py-2 rounded-lg hover:bg-[#1a1a1a] transition"
        >
          E-Mail
        </a>
      </div>

    </div>
  )
}

const Section = ({ title, children }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-400 leading-relaxed text-[16px]">
        {children}
      </p>
    </div>
  )
}

export default About
