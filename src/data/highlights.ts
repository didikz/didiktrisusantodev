export type Highlight = {
	id: 'omcom' | 'flip' | 'dot';
	title: string;
	href: string;
	/** Short home first-viewport line */
	home: string;
	/** Longer list-block / Experience-adjacent body */
	body: string;
	cta: string;
};

export const highlights: Highlight[] = [
	{
		id: 'omcom',
		title: 'Omcom',
		href: '/experience/#omcom',
		home: 'Solo product engineer, rebuilt merchant web app in about two months, 200+ stores.',
		body: '2025–2026. Solo product engineer for a Singapore social-commerce platform. Rebuilt the merchant web app and launched it in about two months, for 200+ stores.',
		cta: 'See the role',
	},
	{
		id: 'flip',
		title: 'Flip',
		href: '/experience/#flip',
		home: 'on-time disbursement confirmations from under 60% to over 95%, latency under 1 second.',
		body: '2022–2024. Raised on-time disbursement confirmations (95th percentile under 5 seconds) from under 60% to over 95%, and cut that latency from over 5 seconds to under 1 second, across 200k+ requests a day.',
		cta: 'See the role',
	},
	{
		id: 'dot',
		title: 'DOT Indonesia',
		href: '/experience/#dot',
		home: 'VP of Engineering, five AVPs, team past 30.',
		body: '2018–2020. VP of Engineering in Malang. Led five AVPs and grew the engineering team past 30 people.',
		cta: 'See the role',
	},
];
