/** @type {import('next').NextConfig} */
const nextConfig = {};

nextConfig.rewrites = async () => {
  return [
    {
      source: '/api/ocr',
      destination: 'http://localhost:8502/predict/',
    },
  ];
};

module.exports = nextConfig;
