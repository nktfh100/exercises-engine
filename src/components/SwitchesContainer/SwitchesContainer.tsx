import {
	toggleCheckAnswers,
	toggleShowAnswers,
	toggleStrictMode,
	useSettingsStore,
} from "@/lib/store";

import Switch from "@/components/SwitchesContainer/Switch/Switch";
import styles from "./SwithesContainer.module.scss";

export default function SwitchesContainer() {
	const { checkAnswers, showAnswers, strictMode } = useSettingsStore();

	return (
		<div className={styles["container"]}>
			<Switch
				isOn={checkAnswers}
				title={"Check Answers"}
				onClick={toggleCheckAnswers}
			/>
			<Switch
				isOn={showAnswers}
				title={"Show Answers"}
				onClick={toggleShowAnswers}
			/>
			<Switch
				isOn={strictMode}
				title={"Strict Mode"}
				onClick={toggleStrictMode}
			/>
		</div>
	);
}
