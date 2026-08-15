import React from 'react';

interface Props {
  id: string;
  index: string;
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}

const Section = ({ id, index, title, aside, children }: Props) => (
  <section id={id} className="page border-t border-rule py-16 sm:py-20">
    <div className="mb-10 flex items-baseline justify-between gap-6">
      <h2 className="flex items-baseline gap-4">
        <span className="label">{index}</span>
        <span className="font-display text-2xl font-normal tracking-[-0.01em] sm:text-3xl">{title}</span>
      </h2>
      {aside && <div className="label text-right">{aside}</div>}
    </div>
    {children}
  </section>
);

export default Section;
