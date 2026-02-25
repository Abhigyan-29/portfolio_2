const Experience = () => {
  return (
    <div className="ml-72 p-24 max-w-4xl">
      <h1 className="text-4xl font-semibold mb-10">Experience</h1>

      <div className="space-y-10">

        {/* DukanGram Internship */}
        <div>
          <h2 className="text-xl font-semibold">
            Frontend Developer Intern — DukanGram
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Sep 2025 – Nov 2025 | HTML, CSS, JavaScript
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              Developed responsive web pages using HTML, CSS, and JavaScript.
            </li>
            <li>
              Assisted in building and improving UI components to enhance user experience.
            </li>
          </ul>
        </div>

        {/* Blithe Internship */}
        <div>
          <h2 className="text-xl font-semibold">
            Frontend Developer Intern — Blithe
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Dec 2025 – Jan 2026 | React.js Development
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              Developed responsive web interfaces using React.js, HTML, CSS, and JavaScript.
            </li>
            <li>
              Integrated frontend components with backend APIs to display real-time data.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Experience;