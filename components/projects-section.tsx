import { Sparkles } from 'lucide-react'
import { projects } from '@/lib/portfolio-data'

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Selected Projects
          </h2>
          <p className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Academic &amp; portfolio work (AOL Projects).
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.index}
              className="group grid gap-6 rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/40 md:grid-cols-[auto_1fr] md:gap-10 md:p-10"
            >
              <div className="font-serif text-4xl text-primary/40 transition-colors group-hover:text-primary md:text-5xl">
                {project.index}
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {project.category}
                </p>
                <h3 className="mt-2 font-serif text-2xl tracking-tight md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                  {project.description}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
                  <span className="font-medium text-foreground">Contribution — </span>
                  {project.contribution}
                </p>

                {project.features && (
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {project.note && (
                  <p className="mt-5 inline-flex items-start gap-2 rounded-xl bg-accent/50 px-4 py-3 text-sm text-accent-foreground">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {project.note}
                  </p>
                )}

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
