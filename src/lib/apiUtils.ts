import { IChapter, IChapterInfo } from "./types";

async function fetchJson(url: string) {
	const res = await fetch(`${process.env.API_URL}${url}`);

	if (!res.ok) {
		throw new Error(res.statusText);
	}

	return await res.json();
}

export async function getChaptersInfo(): Promise<IChapterInfo[]> {
	const chapters = await fetchJson("/chapters.json");
	return chapters;
}

export async function getChapterData(
	chapterId: string | number
): Promise<IChapter> {
	const chapter = await fetchJson(`/chapter_${chapterId}.json`);
	return chapter;
}
