const RSS_URL = 'https://blog.didiktrisusanto.dev/rss.xml';
const RSS_TIMEOUT_MS = 10_000;
const LIMIT = 3;
const DESC_MAX = 160;

type Post = {
	title: string;
	link: string;
	pubDate: string;
	description: string;
};

function decodeXml(text: string): string {
	return text
		.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&apos;/g, "'")
		.replace(/&#39;/g, "'")
		.replace(/&amp;/g, '&');
}

function stripHtml(text: string): string {
	return text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function truncate(text: string, max: number): string {
	if (text.length <= max) return text;
	return `${text.slice(0, max - 1).trimEnd()}…`;
}

function httpsLink(raw: string): string | null {
	try {
		const url = new URL(raw);
		return url.protocol === 'https:' ? url.toString() : null;
	} catch {
		return null;
	}
}

function tagValue(item: string, tag: string): string {
	const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
	const match = item.match(re);
	return match ? decodeXml(match[1].trim()) : '';
}

function parsePosts(xml: string): Post[] {
	const items = xml.match(/<item>([\s\S]*?)<\/item>/gi) ?? [];
	const posts: Post[] = [];

	for (const item of items.slice(0, LIMIT)) {
		const title = stripHtml(tagValue(item, 'title'));
		const link = httpsLink(tagValue(item, 'link').replace(/<[^>]+>/g, '').trim());
		const pubDate = tagValue(item, 'pubDate');
		const rawDescription = tagValue(item, 'description') || tagValue(item, 'content:encoded');
		const description = truncate(stripHtml(rawDescription), DESC_MAX);

		if (!title || !link) continue;
		posts.push({ title, link, pubDate, description });
	}

	return posts;
}

function json(data: unknown, status = 200): Response {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'no-store',
		},
	});
}

export async function onRequestGet() {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), RSS_TIMEOUT_MS);

	try {
		const res = await fetch(RSS_URL, {
			headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
			signal: controller.signal,
		});

		if (!res.ok) {
			return json({ error: `RSS fetch failed (${res.status})` }, 500);
		}

		const xml = await res.text();
		const posts = parsePosts(xml);
		return json({ posts });
	} catch (err) {
		const message = err instanceof Error ? err.message : 'Unknown error';
		return json({ error: message }, 500);
	} finally {
		clearTimeout(timeout);
	}
}
