import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Work collection kept empty on purpose — list/detail routes are disabled.
// Re-add markdown under src/content/work/ and a pages/work route to revive.
const work = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/work' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	}),
});

export const collections = { work };
