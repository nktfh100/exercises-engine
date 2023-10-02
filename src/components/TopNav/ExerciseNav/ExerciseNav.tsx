import { IExercise } from "@/lib/types";
import NavigateBtn from "@/components/TopNav/NavigateBtn/NavigateBtn";
import styles from "./ExerciseNav.module.scss";

export default function ExerciseNav({
	exercise,
	exerciseId,
	chapterId,
	exercisesCount,
}: {
	exercise: IExercise;
	exerciseId: number;
	chapterId: number;
	exercisesCount: number;
}) {
	return (
		<div className={styles["exercise-nav"]}>
			<NavigateBtn
				show={exerciseId > 1}
				to={`/chapter/${chapterId}/${exerciseId - 1}`}
				dir="left"
				type="exercise"
			/>
			<h2 className={styles["exercise-nav__name"]}>{exercise.name}</h2>
			<NavigateBtn
				show={exerciseId < exercisesCount}
				to={`/chapter/${chapterId}/${exerciseId + 1}`}
				dir="right"
				type="exercise"
			/>
		</div>
	);
}
