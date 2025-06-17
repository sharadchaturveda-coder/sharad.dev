import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hello! I&#39;m a passionate and dedicated software engineer with a knack for creating
          efficient, scalable, and user-friendly applications. My journey in tech has been
          driven by a constant curiosity and a desire to solve complex problems with elegant
          solutions. I thrive in collaborative environments and am always eager to learn
          new technologies and methodologies.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
