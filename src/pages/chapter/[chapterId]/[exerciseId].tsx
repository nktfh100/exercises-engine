import { GetStaticPaths, GetStaticProps } from "next";
import { IChapter, IChapterInfo, IExercise } from "@/lib/types";

import ChapterNav from "@/components/TopNav/ChapterNav/ChapterNav";
import ExerciseNav from "@/components/TopNav/ExerciseNav/ExerciseNav";
import QuestionsContainer from "@/components/QuestionsContainer/QuestionsContainer";
import SwitchesContainer from "@/components/SwitchesContainer/SwitchesContainer";
import { getChapterData, getChaptersInfo } from "@/lib/apiUtils";

export default function Page({
	chapterId,
	exerciseId,
	chapter,
	exercise,
	exercisesCount,
	chaptersCount,
}: {
	chapterId: number;
	exerciseId: number;
	chapter: IChapterInfo;
	exercise: IExercise;
	exercisesCount: number;
	chaptersCount: number;
}) {
	return (
		<>
			<ChapterNav
				chapter={chapter}
				toExercise={true}
				chaptersCount={chaptersCount}
			/>

			<ExerciseNav
				exercise={exercise}
				exercisesCount={exercisesCount}
				exerciseId={exerciseId}
				chapterId={chapterId}
			/>

			<SwitchesContainer />

			<QuestionsContainer
				exercise={exercise}
				chapterId={chapterId}
				exerciseId={exerciseId}
			/>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const chapters = await getChaptersInfo();

	const allChaptersData = await Promise.all(
		chapters.map(async (chapter) => {
			const chapterData = await getChapterData(chapter.id);

			return {
				id: chapter.id,
				exercises: chapterData.exercises.length,
			};
		})
	);

	const paths = allChaptersData.flatMap((chapter) =>
		Array.from({ length: chapter.exercises }, (_, i) => ({
			params: {
				chapterId: chapter.id.toString(),
				exerciseId: (i + 1).toString(),
			},
		}))
	);

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { chapterId: chapterIdStr, exerciseId: exerciseIdStr } = params as {
		chapterId: string;
		exerciseId: string;
	};

	const chapters = await getChaptersInfo();

	const chapterId = parseInt(chapterIdStr);
	const exerciseId = parseInt(exerciseIdStr);

	const chapter = chapters[chapterId - 1];

	const chapterData = await getChapterData(chapterId);

	const exercise = chapterData.exercises[exerciseId - 1];

	return {
		props: {
			chapterId,
			exerciseId,
			chapter,
			exercise,
			exercisesCount: chapterData.exercises.length,
			chaptersCount: chapters.length,
		},
	};
};
