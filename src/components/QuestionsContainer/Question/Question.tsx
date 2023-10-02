import { remove3dots, removeIndexText } from "@/lib/textUtils";

import { IQuestion } from "@/lib/types";
import QuestionInput from "../QuestionInput/QuestionInput";
import styles from "./Question.module.scss";

export default function Question({
	data,
	questionIndex,
	chapterId,
	exerciseId,
}: {
	data: IQuestion;
	questionIndex: number;
	chapterId: number;
	exerciseId: number;
}) {
	// Replaces every # with input
	const text_ = [];
	const questionSplit = removeIndexText(remove3dots(data.q)).split("#");
	let inputIndex = 0;
	let key_ = 0;
	for (let i = 0; i < questionSplit.length; i++) {
		text_.push(<span key={key_}>{questionSplit[i]}</span>);
		if (i != questionSplit.length - 1) {
			key_++;
			text_.push(
				<QuestionInput
					key={`${chapterId}-${exerciseId}-${questionIndex}-${inputIndex}`}
					questionIndex={questionIndex}
					inputIndex={inputIndex}
					answer={data.a[inputIndex]}
					marginLeft={
						questionSplit[i].endsWith(" ") ? "0.4rem" : "0.1rem"
					}
					chapterId={chapterId}
					exerciseId={exerciseId}
				/>
			);
			inputIndex++;
		}
		key_++;
	}
	if (inputIndex == 0) {
		text_.push(
			<QuestionInput
				key={`${chapterId}-${exerciseId}-${questionIndex}-0`}
				questionIndex={questionIndex}
				inputIndex={0}
				answer={data.a[0]}
				marginLeft="0.6rem"
				chapterId={chapterId}
				exerciseId={exerciseId}
			/>
		);
	}
	return <li className={styles["question"]}>{text_}</li>;
}
