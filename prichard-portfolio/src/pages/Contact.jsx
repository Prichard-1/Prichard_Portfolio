import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_iev2ltd',     // Replace with your actual EmailJS service ID
      'template_cp18s1g',    // Replace with your actual EmailJS template ID
      form.current,
      'YndUHL_pJ5_0fSPCm'      // Replace with your EmailJS public key
    ).then(
      () => alert('✅ Message sent successfully!'),
      (error) => alert('❌ Failed to send message: ' + error.text)
    );

    e.target.reset();
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white px-6 py-12 flex flex-col items-center"
      style={{ backgroundImage: "url('/assets/wallpaper.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl mb-8 text-purple-300">
          Whether you’re looking to collaborate, hire, or just say hello—I'd love to hear from you.
        </p>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-700 p-6 rounded-lg shadow-md space-y-4 text-left"
        >
          <div>
            <label className="block mb-1 text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Let's build something amazing..."
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Buttons */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold text-blue-300 mb-4">🔗 Connect with Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/27810225181"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded shadow transition"
            >
              WhatsApp
            </a>
            <a
              href="https://github.com/Prichard-1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded shadow transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/pricharddube"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded shadow transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Resume Button */}
        <div className="mt-8 text-center">
          <a
            href="/Prichard-Dube-Resume.pdf"
            download
            className="inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded shadow transition"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
