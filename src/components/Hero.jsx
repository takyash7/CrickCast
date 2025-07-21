import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-black"
    >
      {/* Glowing background circle */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[150px] opacity-30 animate-pulse"></div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-400 mb-4 drop-shadow-lg">
        Hi, I'm Yash Tak
      </h1>

      {/* Animated bouncing roles */}
      <div className="text-xl sm:text-2xl text-white mb-6 animate-bounce">
        B.Tech CSE Student | Web Developer | Cloud Enthusiast
      </div>

      <p className="text-gray-400 mb-6 max-w-xl leading-relaxed">
        📍 Jaipur, India &nbsp;&nbsp;|&nbsp;&nbsp; 📧 Yashtak711@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; 📞 9024584891
      </p>

      <div className="flex space-x-4">
        <a
          href="#projects"
          className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-cyan-600 transform hover:scale-105 transition duration-300"
        >
          🔥 View Projects
        </a>
        <a
          href="/resume.pdf"
          download
          className="bg-transparent border border-cyan-400 text-cyan-300 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transform hover:scale-105 transition duration-300"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
