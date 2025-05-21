
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <div className="flex items-center justify-center mb-3">
        <span className="h-1 w-10 bg-accent rounded mr-2"></span>
        <h2 className="section-title m-0">{title}</h2>
        <span className="h-1 w-10 bg-accent rounded ml-2"></span>
      </div>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
