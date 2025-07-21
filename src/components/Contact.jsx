import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-8 py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">Contact</h2>
      <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-lg space-y-4">
        <p>📞 <span className="font-semibold">Phone:</span> 9024584891</p>
        <p>📧 <span className="font-semibold">Email:</span> Yashtak711@gmail.com</p>
        <p>🔗 <span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/yash-tak7" target="_blank" className="text-cyan-300 underline">linkedin.com/in/yash-tak7</a></p>
        <p>💻 <span className="font-semibold">GitHub:</span> <a href="https://github.com/takyash7" target="_blank" className="text-cyan-300 underline">github.com/takyash7</a></p>
      </div>
    </section>
  );
};

export default Contact;