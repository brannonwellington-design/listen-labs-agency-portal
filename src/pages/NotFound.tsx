import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-primary">
      <div className="text-center">
        <p className="text-[12px] text-content-secondary mb-8">
          <span>Listen Labs /</span>{" "}
          <span className="text-content-primary">404</span>
        </p>
        <h1 className="text-[80px] leading-none text-content-primary mb-6">404</h1>
        <p className="text-[18px] text-content-secondary mb-8">Page not found.</p>
        <Link to="/" className="text-[14px] text-content-brand underline underline-offset-4">
          Return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
