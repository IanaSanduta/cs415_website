/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // This will disable the image optimization
  },
};

export default nextConfig;
