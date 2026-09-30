import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/portfolio-data'

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Education
          </h2>
          <p className="mt-4 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Education.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.school}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <GraduationCap className="h-8 w-8 text-primary" />
              <h3 className="mt-6 font-serif text-2xl tracking-tight">{item.school}</h3>
              <p className="mt-2 text-muted-foreground">{item.detail}</p>
              <div className="mt-6 flex items-center gap-3 text-sm">
                <span className="text-muted-foreground">{item.period}</span>
                {item.meta && (
                  <>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span className="font-medium text-primary">{item.meta}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
