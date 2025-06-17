import React, { use } from 'react';
import { getSkills, Skill } from '../../../lib/getSkills'; // Adjusted path

const SkillsSection: React.FC = () => {
  // Fetch skills using React.use - this makes it a Server Component
  // that can suspend while data is being fetched.
  const skills: Skill[] = use(getSkills());

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-slate-800 dark:text-slate-100">
          Tools of the Trade
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {skill.icon && (
                <span className="text-3xl mb-2" role="img" aria-label={`${skill.name} icon`}>
                  {/* For actual icons, you'd use an <Image> component or SVG */}
                  {/* Using a simple emoji or placeholder based on icon string for now */}
                  {skill.icon.startsWith('/') ? '🛠️' : skill.icon}
                </span>
              )}
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
