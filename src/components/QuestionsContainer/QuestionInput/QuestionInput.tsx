import React, { useEffect, useMemo, useState } from "react";
import { isInputCorrect, remove3dots } from "@/lib/textUtils";

import styles from "./QuestionInput.module.scss";
import { useSettingsStore } from "@/lib/store";

export default function QuestionInput({
	questionIndex,
	inputIndex,
	answer,
	marginLeft,
	chapterId,
	exerciseId,
}: {
	questionIndex: number;
	inputIndex: number;
	answer: string;
	marginLeft: string;
	chapterId: number;
	exerciseId: number;
}) {
	const key = `${chapterId}-${exerciseId}-${questionIndex}-${inputIndex}`;

	const showAnswers = useSettingsStore((state) => state.showAnswers);
	const checkAnswers = useSettingsStore((state) => state.checkAnswers);
	const strictMode = useSettingsStore((state) => state.strictMode);

	const [value, setValue] = useState("");
	useEffect(() => {
		if (typeof window !== "undefined") {
			setValue(localStorage.getItem(key) || "");
		}
	}, [key, setValue]);

	const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setValue(ev.target.value);
		localStorage.setItem(key, ev.target.value);
	};

	const answers = useMemo(() => {
		if (!answer) return [];

		return answer.split("|");
	}, [answer]);

	const longestAnswer = useMemo(() => {
		return answers.reduce((longest, current) => {
			return current.length > longest.length ? current : longest;
		}, "");
	}, [answers]);

	const isCorrect = isInputCorrect(value, answer, strictMode);

	return (
		<span
			className={`${styles["input"]} ${
				checkAnswers && value != "" && answer
					? isCorrect
						? styles["input--correct"]
						: styles["input--incorrect"]
					: ""
			}`}
			style={{ marginBottom: answers.length * 1.5 + "rem", marginLeft }}
		>
			<span>
				<div className={styles["input__answer-spacer"]}>
					_{longestAnswer}_
				</div>
				<input
					className={styles["input__input"]}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="none"
					spellCheck="false"
					size={1}
					type="text"
					value={value}
					onChange={handleChange}
				/>
			</span>

			<span
				className={`${styles["input__answers"]} ${
					showAnswers && styles["input__answers--show"]
				}`}
			>
				{answers.map((item, i) => (
					<p key={i}>{remove3dots(item)}</p>
				))}
			</span>
		</span>
	);
}
