import { ArrowDown, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44"
    >
      {/* soft decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-6 flex items-center gap-2 text-sm font-medium tracking-widest text-primary uppercase">
          <span className="h-px w-8 bg-primary" />
          Portfolio 2026
        </p>

        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-muted-foreground text-pretty md:text-2xl">
          Computer Science student crafting at the intersection of{' '}
          <span className="text-foreground">software engineering</span>,{' '}
          <span className="text-foreground">artificial intelligence</span>, and{' '}
          <span className="text-foreground">human-centered design</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span>BINUS University · 5th semester</span>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Get in touch
          </a>
        </div>

        <a
          href="#about"
          className="mt-20 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Scroll to explore
        </a>
      </div>
    </section>
  )
}
