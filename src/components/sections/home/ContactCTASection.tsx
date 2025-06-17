import React from 'react';
import Link from 'next/link';

const ContactCTASection = () => {
  return (
    <section
      aria-label="Homepage contact call to action"
      className="bg-gray-100 px-4 py-24 text-center text-gray-800"
    >
      <div className="mx-auto max-w-xl">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Let’s build something worth remembering.
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-base md:text-lg">
          Whether it’s freelance work, collaboration, or a full-time role—I’m
          open to conversations that value craft, clarity, and code.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-900"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default ContactCTASection;
