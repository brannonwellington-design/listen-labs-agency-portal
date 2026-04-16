const FooterSection = () => {
  return (
    <footer
      className="border-t bg-surface-primary py-12"
      style={{ borderColor: "var(--surface-tertiary)" }}
    >
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[12px] text-content-secondary">
          <span>Listen Labs /</span>{" "}
          <span className="text-content-primary">Agency Portal</span>
        </p>
        <p className="text-[12px] text-content-secondary">
          © {new Date().getFullYear()} Listen Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
