import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !feedback) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Simulate email functionality or integrate with a backend/email API
    console.log("Feedback submitted:", { email, feedback });

    setMessage("Thank you for your feedback!");
    setEmail("");
    setFeedback("");
  };

  return (
    <footer
      id="contact"
      className="px-6 py-4 glass-effect fixed bottom-0 left-0 w-full flex flex-col md:flex-row justify-between items-center"
    >
      <p className="text-sm">© 2025 Shubham Pund</p>
      <div className="flex space-x-4 mb-4 md:mb-0">
        <a
          href="https://github.com/shubhampund9325"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
        <a
          href="https://linkedin.com/in/shubhampund"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400"
        >
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a
          href="mailto:shubham@example.com"
          className="hover:text-cyan-400"
        >
          <i className="fas fa-envelope text-xl"></i>
        </a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-auto flex flex-col md:flex-row items-center"
      >
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-md border bg-transparent border-gray-300 focus:outline-none focus:ring focus:ring-cyan-500 mb-2 md:mb-0 md:mr-2"
        />
        <textarea
          placeholder="Your feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="px-4 py-2 rounded-md  bg-transparent border border-gray-300 focus:outline-none focus:ring focus:ring-cyan-500 mb-2 md:mb-0 md:mr-2"
          rows="1"
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-400"
        >
          Submit
        </button>
      </form>
      {message && (
        <p className="text-xs text-cyan-400 mt-2 md:mt-0">{message}</p>
      )}
    </footer>
  );
};

export default Footer;