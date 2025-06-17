import HeroSection from '@/components/sections/HeroSection';
import ToolkitSection from '@/components/sections/ToolkitSection';
import FeaturedProjectsSection from '@/components/sections/FeaturedProjectsSection';

const techStack = [
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'Python' },
  { name: 'Django' },
  { name: 'Tailwind CSS' },
  { name: 'Sanity.io' },
  { name: 'Vercel' },
  { name: 'Git' },
];

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ToolkitSection techStack={techStack} />
      <FeaturedProjectsSection />
    </main>
  );
}
