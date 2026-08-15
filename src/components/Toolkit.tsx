import { toolkit } from '../data/site';
import Section from './Section';

const Toolkit = () => (
  <Section id="toolkit" index="03" title="What I work with">
    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {toolkit.map((group) => (
        <div key={group.label} className="reveal grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6">
          <p className="label pt-1">{group.label}</p>
          <p className="text-[0.9375rem] leading-relaxed text-ink/80">
            {group.items.map((item, index) => (
              <span key={item}>
                <span className="transition-colors duration-200 hover:text-accent">{item}</span>
                {index < group.items.length - 1 && <span className="text-muted">, </span>}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

export default Toolkit;
