
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <div className="flex items-center justify-center mb-3 space-x-3">
        <span className="h-1 w-12 bg-accent rounded"></span>
        <h2 className="font-heading text-3xl font-bold text-primary">{title}</h2>
        <span className="h-1 w-12 bg-accent rounded"></span>
      </div>
      {subtitle && <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
