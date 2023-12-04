/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add other configuration options as needed
};

if (process.env.NODE_ENV === "production") {
  nextConfig.images = {
    unoptimized: true,
  };

  nextConfig.generateStaticParams = async () => {
    // Your custom generateStaticParams logic
    return [
      // Custom paths if needed
      { route: "/" },
    ];
  };
}

module.exports = nextConfig;
