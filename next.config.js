/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add other configuration options as needed
};

if (process.env.NODE_ENV === "production") {
  nextConfig.images = {
    unoptimized: true,
  };
  nextConfig.exportPathMap = async (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) => {
    // Your custom exportPathMap logic
    return {
      // Custom paths if needed
      "/": { page: "/" },
    };
  };
}

module.exports = nextConfig;
