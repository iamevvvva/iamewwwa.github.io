/** @type {import('next').NextConfig} */
const nextConfig = {
  // Полностью статический экспорт: после сборки папка out/ — готовый сайт без Node.
  // Отдаётся только статика, идеально для CDN (Vercel/Netlify и т.д.).
  output: 'export',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
