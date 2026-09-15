// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mexcha.com',
  integrations: [icon(), sitemap()],
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ['./src/styles'],
          additionalData: (source, filePath) => {
            const skip = ['variables', 'mixins', 'global.scss'].some((name) =>
              filePath.includes(name),
            );
            if (skip) return source;
            return `@use "variables" as *; @use "mixins" as *;\n${source}`;
          },
        },
      },
    },
  },
});
