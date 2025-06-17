import React from 'react';

interface ToolkitProps {
  techStack: string[];
}

const ToolkitSection: React.FC<ToolkitProps> = ({ techStack }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My Toolkit
        </h2>
        {techStack.length > 0 ? (
          <ul className="flex flex-wrap gap-2 justify-center">
            {techStack.map((techName) => (
              <li
                key={techName}
                className="px-3 py-1 text-sm rounded-full border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-200 cursor-default"
              >
                {techName}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">Tech stack coming soon!</p>
        )}
      </div>
    </section>
  );
};

export default ToolkitSection;
