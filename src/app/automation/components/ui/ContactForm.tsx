
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 block w-full px-3 py-2 bg-ph-dark-gray border-b border-ph-border focus:outline-none focus:border-ph-accent text-white"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 block w-full px-3 py-2 bg-ph-dark-gray border-b border-ph-border focus:outline-none focus:border-ph-accent text-white"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-ph-dark-gray border-b border-ph-border focus:outline-none focus:border-ph-accent text-white"
          placeholder="Your message..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-ph-accent text-white font-bold rounded-full hover:bg-blue-600 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
