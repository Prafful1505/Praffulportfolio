import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
}) => (
  <div
    className={`reveal mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
  >
    <span className="eyebrow">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
      {eyebrow}
    </span>
    <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-slate-400 text-balance sm:text-lg">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
