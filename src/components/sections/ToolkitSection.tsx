import React from 'react';

interface TechStackItem {
  name: string;
  icon?: React.ReactNode; // Placeholder for actual icons
}

interface ToolkitProps {
  techStack: TechStackItem[];
}

const Toolkit: React.FC<ToolkitProps> = ({ techStack }) => {
  // Placeholder SVG icon
  const PlaceholderIcon = () => (
    <svg
      className="w-12 h-12 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 20l4-16m4 4l-4 4m0 0l-4 4m4-4H6"
      ></path>
    </svg>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          My Toolkit
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {tech.icon || <PlaceholderIcon />}
              <span className="mt-4 text-lg font-semibold text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
