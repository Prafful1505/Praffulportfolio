import { useState } from 'react';
import { profile } from '../data/site';
import Section from './Section';

const lines = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: profile.email },
  { label: 'Phone', value: profile.phone, href: profile.phoneHref, copy: profile.phone },
  { label: 'WhatsApp', value: 'wa.me/917879059862', href: profile.whatsapp },
  { label: 'LinkedIn', value: 'prafful-agrawal', href: profile.linkedin },
  { label: 'GitHub', value: 'Prafful1505', href: profile.github },
];

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (value: string) => {
    navigator.clipboard?.writeText(value).then(
      () => {
        setCopied(value);
        window.setTimeout(() => setCopied(null), 2000);
      },
      () => undefined
    );
  };

  return (
    <Section id="contact" index="04" title="Say hello">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="prose-measure space-y-5">
          <p>
            Two ways this usually starts. You have a build in mind, an agent, a pipeline, a dashboard that
            has to be right, and you want someone to take it on. Or you are hiring for AI and data work and
            want to talk about a role.
          </p>
          <p>
            Either is welcome. Tell me what the problem is and what good would look like, and I will tell
            you honestly whether I am the right person for it.
          </p>
          <p>
            I am in {profile.location} and work remotely without much trouble. Most of my week already runs
            across time zones.
          </p>
        </div>

        <dl className="divide-y divide-rule border-y border-rule">
          {lines.map((line) => (
            <div key={line.label} className="reveal flex items-center gap-4 py-3.5">
              <dt className="label w-24 shrink-0">{line.label}</dt>
              <dd className="flex min-w-0 flex-1 items-center justify-between gap-3">
                <a
                  href={line.href}
                  target={line.href.startsWith('http') ? '_blank' : undefined}
                  rel={line.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="a truncate text-[0.9375rem]"
                >
                  {line.value}
                </a>
                {line.copy && (
                  <button
                    onClick={() => copy(line.copy!)}
                    className="shrink-0 font-mono text-2xs text-muted transition-colors hover:text-ink"
                  >
                    {copied === line.copy ? 'copied' : 'copy'}
                  </button>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
};

export default Contact;
