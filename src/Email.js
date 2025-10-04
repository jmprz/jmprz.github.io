import React, { useRef, useState } from 'react';
import { RiMailSendFill } from '@remixicon/react';

const ContactForm = () => {
  const form = useRef();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const userName = formData.get('name').trim();
    const userEmail = formData.get('email').trim();
    const message = formData.get('message').trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName || !userEmail || !message) {
      setError('⚠️ Please fill in all fields.');
      setLoading(false);
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setError('⚠️ Please enter a valid email address.');
      setLoading(false);
      return;
    }

    setError('');
    setSuccess('');

    try {
      const res = await fetch("https://formspree.io/f/xrbylbjr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSuccess('✅ Your message has been sent!');
        form.current.reset();
      } else {
        setError('❌ Something went wrong. Try again later.');
      }
    } catch (err) {
      console.error(err);
      setError('❌ Failed to send. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center px-4">
      <form 
        ref={form} 
        onSubmit={sendEmail} 
        className="p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[27rem] sm:w-[27rem] md:w-[37rem] mb-10"
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-950 dark:text-white">
          Let’s Work Together 🤝
        </h2>

        {/* Alerts */}
        {error && <p className="text-red-500 bg-red-100 dark:bg-red-900/40 p-3 rounded-md mb-4">{error}</p>}
        {success && <p className="text-green-600 bg-green-100 dark:bg-green-900/40 p-3 rounded-md mb-4">{success}</p>}

        {/* Input Fields */}
        <div className="mb-6 relative">
          <input
            type="text"
            name="name"
            required
            className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent py-3 px-1 text-gray-900 dark:text-white placeholder-transparent focus:border-cyan-500 focus:outline-none"
            placeholder="Your Name"
          />
          <label className="absolute left-1 -top-3.5 text-gray-600 dark:text-gray-400 text-sm 
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
            peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm transition-all">
            Name
          </label>
        </div>

        <div className="mb-6 relative">
          <input
            type="email"
            name="email"
            required
            className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent py-3 px-1 text-gray-900 dark:text-white placeholder-transparent focus:border-cyan-500 focus:outline-none"
            placeholder="Your Email"
          />
          <label className="absolute left-1 -top-3.5 text-gray-600 dark:text-gray-400 text-sm 
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
            peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm transition-all">
            Email
          </label>
        </div>

        <div className="mb-6 relative">
          <textarea
            name="message"
            rows="5"
            required
            className="peer w-full border-b-2 border-gray-300 dark:border-gray-600 bg-transparent py-3 px-1 text-gray-900 dark:text-white placeholder-transparent focus:border-cyan-500 focus:outline-none resize-none"
            placeholder="Your Message"
          />
          <label className="absolute left-1 -top-3.5 text-gray-600 dark:text-gray-400 text-sm 
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
            peer-focus:-top-3.5 peer-focus:text-cyan-500 peer-focus:text-sm transition-all">
            Message
          </label>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className="flex items-center justify-center w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all disabled:opacity-50 text-lg"
        >
          {loading ? "Sending..." : (
            <>
              <RiMailSendFill className="mr-2 h-6 w-6" /> Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
