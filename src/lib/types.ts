export interface IChapter {
	id: number;
	name: string;
	exercises: IExercise[];
}

export interface IExercise {
	id: number;
	info: string;
	name: string;
	questions: IQuestion[];
}

export interface IQuestion {
	a: string[];
	q: string;
}

export interface IChapterInfo {
	id: number;
	name: string;
	file: string;
}
