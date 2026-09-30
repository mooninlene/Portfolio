import { profile } from '@/lib/portfolio-data'

const highlights = [
  { value: '5+', label: 'Academic projects' },
  { value: '5th semester', label: 'Computer Science' },
  { value: 'AI · UX', label: 'Core focus' },
]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            About
          </h2>
          <p className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Learning, building, and designing with curiosity.
          </p>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            {profile.summary}
          </p>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {highlights.map((item) => (
              <div key={item.label}>
                <dt className="font-serif text-3xl text-foreground md:text-4xl">
                  {item.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
