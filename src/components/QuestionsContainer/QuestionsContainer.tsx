import { IExercise } from "@/lib/types";
import Question from "./Question/Question";
import styles from "./QuestionsContainer.module.scss";

export default function QuestionsContainer({
	exercise,
	chapterId,
	exerciseId,
}: {
	exercise: IExercise;
	chapterId: number;
	exerciseId: number;
}) {
	return (
		<ol className={styles["container"]}>
			{exercise.questions.map((question, i) => (
				<Question
					key={`q-${i}`}
					data={question}
					questionIndex={i}
					chapterId={chapterId}
					exerciseId={exerciseId}
				/>
			))}
		</ol>
	);
}
