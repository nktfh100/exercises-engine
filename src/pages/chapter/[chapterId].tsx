import { GetStaticPaths, GetStaticProps } from "next";

import ChapterNav from "@/components/TopNav/ChapterNav/ChapterNav";
import { IChapterInfo, IExercise } from "@/lib/types";
import LinksList from "@/components/LinksList/LinksList";
import { NextSeo } from "next-seo";
import { getChapterData, getChaptersInfo } from "@/lib/apiUtils";

export default function Page({
	chapter,
	exercises,
	chaptersCount,
}: {
	chapter: IChapterInfo;
	exercises: { id: number; name: string }[];
	chaptersCount: number;
}) {
	return (
		<>
			<NextSeo title={`Chapter ${chapter.id}`} />

			<ChapterNav
				chapter={chapter}
				toExercise={false}
				chaptersCount={chaptersCount}
			/>

			<LinksList
				items={exercises.map((item) => {
					return {
						to: `/chapter/${chapter.id}/${item.id + 1}`,
						title: item.name,
					};
				})}
			/>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const chapters = await getChaptersInfo();

	const paths = chapters.map((chapter) => ({
		params: { chapterId: chapter.id.toString() },
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { chapterId: chapterIdStr } = params as { chapterId: string };

	const chapters = await getChaptersInfo();

	const chapterId = parseInt(chapterIdStr);
	const chapter = chapters[chapterId - 1];

	const chapterData = await getChapterData(chapterId);

	const exercises = chapterData.exercises.map((exercise: IExercise, i) => {
		return {
			id: i,
			name: exercise.name,
		};
	});

	return {
		props: {
			chapter,
			exercises,
			chaptersCount: chapters.length,
		},
	};
};
