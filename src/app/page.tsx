import Hero from '@/components/Hero';
import Toolkit from '@/components/Toolkit';

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
      <Hero />
      <Toolkit techStack={techStack} />
    </main>
  );
}
