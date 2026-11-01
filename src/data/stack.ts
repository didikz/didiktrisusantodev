export type StackItem = {
	label: string;
	slug: string;
	mono?: boolean;
};

export const stackItems: StackItem[] = [
	{ label: 'PHP', slug: 'php' },
	{ label: 'Go', slug: 'go' },
	{ label: 'TypeScript', slug: 'typescript' },
	{ label: 'JavaScript', slug: 'javascript', mono: true },
	{ label: 'Laravel', slug: 'laravel' },
	{ label: 'MySQL', slug: 'mysql' },
	{ label: 'Redis', slug: 'redis' },
	{ label: 'Docker', slug: 'docker' },
	{ label: 'AWS', slug: 'amazonwebservices', mono: true },
	{ label: 'GCP', slug: 'googlecloud' },
	{ label: 'Datadog', slug: 'datadog' },
];
