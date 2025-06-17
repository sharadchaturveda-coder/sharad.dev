import HeroSection from '@/components/sections/home/HeroSection';
import ToolkitSection from '@/components/sections/ToolkitSection';
import ProjectGallerySection from '@/components/sections/home/ProjectGallerySection';
import AboutSnippetSection from '../components/sections/home/AboutSnippetSection';
import ContactCTASection from '@/components/sections/home/ContactCTASection';

const techStack = [
  "Next.js", "React", "TypeScript", "Tailwind CSS",
  "Node.js", "Python", "Django", "Sanity CMS",
  "Vercel", "Git", "PostgreSQL"
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="py-16">
        <ToolkitSection techStack={techStack} />
      </section>
      <section className="py-16">
        <ProjectGallerySection />
      </section>
      <section className="py-16">
        <AboutSnippetSection />
      </section>
      <ContactCTASection />
    </>
  );
}
