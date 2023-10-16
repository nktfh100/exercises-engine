import { IChapter, IChapterInfo } from "./types";
import fs from "fs/promises";

async function fetchJson(filePath: string) {
	const fileContent = await fs.readFile(filePath, "utf-8");
	return JSON.parse(fileContent);
}

export async function getChaptersInfo(): Promise<IChapterInfo[]> {
	const chapters = await fetchJson("./data/chapters.json");
	return chapters;
}

export async function getChapterData(
	chapterId: string | number
): Promise<IChapter> {
	const chapter = await fetchJson(`./data/chapter_${chapterId}.json`);
	return chapter;
}
