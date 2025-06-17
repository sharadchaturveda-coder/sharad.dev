import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Architecting High-Performance Web Experiences.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Full-stack developer specializing in Next.js, React, and scalable back-ends. I build clean, documented, and performant digital products.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work →
          </a>
          <Link
            href="/contact"
            className="border border-blue-600 hover:bg-blue-600 text-blue-400 hover:text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
