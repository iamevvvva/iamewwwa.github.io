import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
export default defineConfig({
  plugins: [
    svgr({ include: '**/*.svg' }),
    react(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: 'robots.txt',
    //       dest: '', // Копируем в корень директории dist
    //     },
    //     {
    //       src: 'sitemap.xml', // Путь к файлу sitemap.xml
    //       dest: '', // Копируем в корень dist
    //     },
    //   ],
    // }),
    ViteImageOptimizer({
      png: {
        quality: 80, // Уменьшаем размер на 40-50%, не теряя качества
        compressionLevel: 8, // 1-9, где 9 — лучшее сжатие
        adaptiveFiltering: true,
      },

      jpeg: {
        quality: 75, // Почти незаметное ухудшение, но размер меньше на 50-70%
        progressive: true, // Быстрая загрузка на медленных соединениях
      },

      jpg: {
        quality: 75,
        progressive: true,
      },

      tiff: {
        quality: 75,
      },

      gif: {
        colors: 128, // Уменьшаем количество цветов для меньшего веса
      },

      webp: {
        quality: 75, // WebP лучше JPEG, но все равно важно настраивать
        lossless: false, // Чуть теряем в качестве, но экономим размер
      },

      avif: {
        quality: 50, // AVIF при этом дает очень хорошее качество
        lossless: false,
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@shared', replacement: '/src/shared/' },
    ],
  },
  css: {
    postcss: './postcss.config.js',
  },
});
