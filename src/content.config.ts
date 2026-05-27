import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const works = defineCollection({
	loader: glob({ base: './src/content/works', pattern: '**/*.json' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		year: z.number(),
		description: z.string().optional(),
		cover: image(),
		gallery: z.array(image()),
	}),
});

export const collections = {
	works,
};
