import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://didiktrisusanto.dev',
	integrations: [
		sitemap({
			filter: (page) => !page.includes('/work') && !page.includes('/404'),
		}),
	],
});
