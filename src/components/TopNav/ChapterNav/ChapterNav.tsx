import { IChapterInfo } from "@/lib/types";
import NavigateBtn from "@/components/TopNav/NavigateBtn/NavigateBtn";
import styles from "./ChapterNav.module.scss";

export default function ChapterNav({
	chapter,
	toExercise,
	chaptersCount,
}: {
	chapter: IChapterInfo;
	toExercise: boolean;
	chaptersCount: number;
}) {
	return (
		<div className={styles["chapter-nav"]}>
			<NavigateBtn
				show={chapter.id > 1}
				to={`/chapter/${chapter.id - 1}${toExercise ? "/1" : ""}`}
				dir="left"
				type="chapter"
			/>
			<h1 className={styles["chapter-nav__name"]}>
				{`${chapter.name} - ${chapter.id}`}
			</h1>
			<NavigateBtn
				show={chapter.id < chaptersCount}
				to={`/chapter/${chapter.id + 1}${toExercise ? "/1" : ""}`}
				dir="right"
				type="chapter"
			/>
		</div>
	);
}
