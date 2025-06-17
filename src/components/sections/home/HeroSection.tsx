import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-3xl py-24 text-center">
      <h1 className="text-4xl font-bold sm:text-5xl">
        Architecting High-Performance Web Experiences.
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Full-stack developer specializing in Next.js, React, and scalable back-ends.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/#projects"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          View My Work
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
