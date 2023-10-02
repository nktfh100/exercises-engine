import styles from "./Switch.module.scss";

export default function Switch({
	isOn,
	title,
	onClick,
}: {
	isOn: boolean;
	title: string;
	onClick: () => void;
}) {
	return (
		<div className={styles["switch"]}>
			<span onClick={onClick} className={styles["switch__title"]}>
				{title}
			</span>
			<button
				className={styles["switch__btn"]}
				role="switch"
				aria-checked={isOn}
				onClick={onClick}
			>
				<span className={styles["u-visuallyhidden"]}>
					{title}
					{isOn ? " on" : " off"}
				</span>
			</button>
		</div>
	);
}
