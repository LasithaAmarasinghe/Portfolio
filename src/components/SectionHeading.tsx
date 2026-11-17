import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="text-center mb-12 sm:mb-16 animate-fade-in">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pb-1 text-primary">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
