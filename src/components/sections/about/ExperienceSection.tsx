import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Professional Experience</h3>
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-medium text-gray-900 dark:text-white">Senior Software Engineer</h4>
            <p className="text-md text-blue-600 dark:text-blue-400">Tech Solutions Inc. | 2020 - Present</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Placeholder text for responsibilities and achievements at Tech Solutions Inc.
              Led development of key features, mentored junior developers, and contributed to architectural decisions.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium text-gray-900 dark:text-white">Software Engineer</h4>
            <p className="text-md text-blue-600 dark:text-blue-400">Innovatech Ltd. | 2018 - 2020</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Placeholder text for responsibilities and achievements at Innovatech Ltd.
              Developed and maintained web applications, collaborated with cross-functional teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
