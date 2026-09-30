import { skillGroups } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 bg-secondary/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Skills &amp; Tools
          </h2>
          <p className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Technical skills that power every project.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <h3 className="font-serif text-xl tracking-tight">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
