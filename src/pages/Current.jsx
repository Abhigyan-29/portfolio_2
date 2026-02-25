const learning = [
  {
    title: "DSA",
    link: "https://www.youtube.com/watch?v=m3fg2PRY1u4&list=PLqM7alHXFySGwOTADxwHrgH8m_XpgrB-k",
    status: "learning",
  },
  {
    title:"Javascript",
    link: "https://www.youtube.com/watch?v=wH6uf20dpAo&list=PLbtI3_MArDOnNvk8CCCSR01CQ8B8iNh-A&index=3",
    status: "learning",
  },
]

const getYoutubeThumbnail = (url) => {
  const videoId = url.split("v=")[1]?.split("&")[0]
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

const Current = () => {
  return (
    <div className="ml-72 px-24 py-20">

      {/* Heading */}
      <h1 className="text-5xl font-semibold mb-3">Currently Learning</h1>
      <p className="text-gray-400 mb-12">
        Staying sharp. Building daily.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {learning.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#141414]
              border border-[#262626]
              rounded-2xl
              overflow-hidden
              hover:-translate-y-2
              hover:border-gray-500
              transition-all duration-300
            "
          >

            {/* Thumbnail */}
            <img
              src={getYoutubeThumbnail(item.link)}
              alt={item.title}
              className="w-full h-60 object-cover"
            />

            {/* Content */}
            <div className="p-6">

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full">
                  learning
                </span>
              </div>

              <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>

              <p className="text-xs text-gray-500 mt-4">
                Channel: {item.channel}
              </p>

              <div className="mt-5">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black text-sm px-4 py-1 rounded hover:opacity-80 transition"
                >
                  Watch
                </a>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Current