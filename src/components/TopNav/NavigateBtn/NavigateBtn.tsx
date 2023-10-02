import Link from "next/link";
import { setShowAnswers } from "@/lib/store";
import styles from "./NavigateBtn.module.scss";

export default function NavigateBtn({
	show,
	to,
	dir,
	type,
}: {
	show: boolean;
	to: string;
	dir: "left" | "right";
	type: "chapter" | "exercise";
}) {
	if (!show) {
		return <div className={styles["navigate-btn"]} />;
	}

	return (
		<Link
			href={to}
			className={styles["navigate-btn"]}
			onClick={() => {
				setShowAnswers(false);
			}}
			aria-label={`${dir == "right" ? "next" : "previous"} ${type}`}
		>
			{dir == "right" ? "==>" : "<=="}
		</Link>
	);
}
