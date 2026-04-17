const VideoSection = () => {
  return (
    <section className="py-24 bg-surface-highlight">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[12px] text-content-secondary mb-6">Product Overview</p>
          <h2 className="text-[40px] md:text-[48px] leading-[1.05] text-content-primary mb-6">
            See Listen in action.
          </h2>
          <p className="text-[18px] text-content-secondary leading-[1.5]">
            Before you pitch it, watch it. The fastest way to understand what Listen actually does.
          </p>
        </div>

        <div className="max-w-[960px] mx-auto">
          <div
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: "56.25%", borderRadius: "8px" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/d_dH5nM0sBE?start=1"
              title="Listen Product Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-[12px] text-content-secondary text-center mt-4">
            Share this link with clients who want a quick overview before a meeting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
