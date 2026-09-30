import { Mail, Phone } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-primary px-6 py-24 text-primary-foreground md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
          Contact
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-balance md:text-6xl">
          Let&apos;s collaborate and build something meaningful.
        </h2>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[\s-]/g, '')}`}
            className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-primary-foreground/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-6">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm"
              >
                <span className="text-primary-foreground/60">{social.label}</span>{' '}
                <span className="underline-offset-4 group-hover:underline">
                  {social.handle}
                </span>
              </a>
            ))}
          </div>
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </section>
  )
}
