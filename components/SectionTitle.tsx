type SectionTitleProps = {
  number: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ number, title, subtitle }: SectionTitleProps) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </div>
  );
}
