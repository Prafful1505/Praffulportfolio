import { certifications, roles } from '../data/site';
import Section from './Section';

const Experience = () => (
  <Section id="experience" index="02" title="Where I've worked">
    <div className="space-y-12">
      {roles.map((role) => (
        <article key={role.title} className="reveal grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-8">
          <p className="label pt-1.5">{role.period}</p>

          <div>
            <h3 className="font-display text-xl leading-snug">{role.title}</h3>
            <p className="mt-0.5 text-sm text-muted">
              {role.org}
              {role.note && <span className="text-muted/80"> ({role.note})</span>}
            </p>

            <ul className="mt-4 space-y-2.5">
              {role.points.map((point) => (
                <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink/80">
                  <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                  <span className="max-w-measure">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      <div className="reveal grid gap-3 border-t border-rule pt-8 sm:grid-cols-[8rem_1fr] sm:gap-8">
        <p className="label pt-1">Certified</p>
        <ul className="space-y-2">
          {certifications.map((cert) => (
            <li key={cert.name} className="text-[0.9375rem] text-ink/80">
              {cert.name}
              <span className="text-muted">
                {' '}
                ({cert.issuer}, {cert.year})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default Experience;
