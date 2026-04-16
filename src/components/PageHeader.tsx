interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

const PageHeader = ({ label, title, description }: PageHeaderProps) => {
  return (
    <section className="bg-surface-primary pt-32 pb-20">
      <div className="container max-w-5xl">
        <p className="text-[12px] text-content-secondary mb-8">{label}</p>
        <h1 className="text-[48px] md:text-[64px] leading-[1.05] text-content-primary mb-8 max-w-3xl">
          {title}
        </h1>
        <p className="text-[18px] text-content-secondary leading-[1.5] max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
