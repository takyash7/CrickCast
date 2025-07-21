import React from "react";

const projects = [
  {
    title: "Online Ticket Booking Website",
    tech: "HTML, CSS, JS, PHP, MySQL, AWS",
    desc: "Book tickets online for trains & buses. Deployed on AWS with email verification.",
  },
  {
    title: "IPL Score & Win Predictor",
    tech: "Python, Scikit-Learn, Pandas",
    desc: "Machine learning project to predict IPL match outcomes and innings scores using trained models.",
  },
  {
    title: "Marksheet System",
    tech: "Python, MySQL",
    desc: "Desktop application to manage student marks, generate reports, and store data in MySQL.",
  },
  {
    title: "Smart Study Lamp (IoT)",
    tech: "Arduino, Sensors",
    desc: "Automatic smart lamp with gesture-based on/off and adaptive brightness for study time.",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-cyan-500/20 rounded-xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-2 italic">{project.tech}</p>
            <p className="text-gray-300">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
