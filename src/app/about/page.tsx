import React from 'react';
import IntroSection from '@/components/sections/about/IntroSection';
import ExperienceSection from '@/components/sections/about/ExperienceSection';
import SkillsSection from '@/components/sections/about/SkillsSection';

const AboutPage: React.FC = () => {
  return (
    <main>
      <IntroSection />
      <ExperienceSection />
      <SkillsSection />
    </main>
  );
};

export default AboutPage;
