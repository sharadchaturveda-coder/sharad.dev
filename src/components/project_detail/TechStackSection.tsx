import React from 'react';

type TechStackSectionProps = {
  techStack: string[] | null | undefined;
};

const TechStackSection: React.FC<TechStackSectionProps> = ({ techStack }) => {
  if (!techStack || techStack.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b pb-2">Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
