import { ReactNode } from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  children,
  inverse = false,
  headingLevel = 2,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  inverse?: boolean;
  headingLevel?: 1 | 2;
}) {
  const Heading = headingLevel === 1 ? 'h1' : 'h2';

  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-ember to-sage" />
      <p className="condensed-feel mb-5 text-xs tracking-[0.45em] text-ember">
        {eyebrow}
      </p>
      <Heading className={`text-4xl font-black leading-[0.95] tracking-[-0.055em] md:text-6xl ${inverse ? 'text-sand' : 'text-ink'}`}>
        {title}
      </Heading>
      {children && (
        <div className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed ${inverse ? 'text-sand/82' : 'text-slate/82'}`}>
          {children}
        </div>
      )}
    </div>
  );
}
