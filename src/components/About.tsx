import { Compass, Layers, LineChart, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';

const pillars = [
  {
    Icon: Compass,
    title: 'Scope with the end in mind',
    body: 'Start from the decision the business needs to make, then work backwards to the data and the model.',
  },
  {
    Icon: Layers,
    title: 'Build it repeatable',
    body: 'Pipelines, agents and dashboards designed as patterns the team can reuse — not one-off scripts.',
  },
  {
    Icon: LineChart,
    title: 'Measure what shipped',
    body: 'Accuracy, latency, adoption. If a change cannot be measured, it is not finished yet.',
  },
  {
    Icon: Users,
    title: 'Ship alongside people',
    body: 'Sitting with clients and stakeholders through delivery is the fastest way to find what the spec missed.',
  },
];

const About = () => (
  <section id="about" className="section pt-8 sm:pt-12">
    <div className="shell">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow="About me"
          title={
            <>
              From analysis to <span className="text-gradient">delivery ownership</span>
            </>
          }
          description="I started out cleaning datasets and building dashboards. Today I lead implementation at Target Dial — designing AI agents and automation, then making sure they actually land with the customer. The through-line is the same: understand the problem properly, then build something people keep using."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map(({ Icon, title, body }, index) => (
            <div
              key={title}
              className="reveal glass glass-hover p-5"
              style={{ ['--reveal-delay' as string]: `${index * 90}ms` }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-brand-400/25 bg-brand-400/10 text-brand-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
