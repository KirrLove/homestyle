
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered = true, className = "" }: SectionTitleProps) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <div className="flex items-center justify-center mb-3 space-x-3">
        <span className="h-1 w-12 bg-accent rounded"></span>
        <h2 className={`font-heading text-3xl font-bold ${className.includes('text-white') ? 'text-white' : 'text-primary'}`}>{title}</h2>
        <span className="h-1 w-12 bg-accent rounded"></span>
      </div>
      {subtitle && <p className={`mt-2 max-w-2xl mx-auto ${className.includes('text-white') ? 'text-white/90' : 'text-muted-foreground'}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
