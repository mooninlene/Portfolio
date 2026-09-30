import { experiences } from '@/lib/portfolio-data'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-secondary/50 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Experience &amp; Organizations
          </h2>
          <p className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Work experience &amp; organizational leadership.
          </p>
        </div>

        <div className="border-t border-border">
          {experiences.map((exp) => (
            <div
              key={`${exp.role}-${exp.period}`}
              className="grid gap-3 border-b border-border py-8 md:grid-cols-[180px_1fr] md:gap-10"
            >
              <p className="text-sm font-medium text-muted-foreground">{exp.period}</p>
              <div>
                <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{exp.org}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
