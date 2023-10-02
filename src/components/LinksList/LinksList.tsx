import Link from "next/link";
import styles from "./LinksList.module.scss";

export default function LinksList({
	items,
}: {
	items: { to: string; title: string }[];
}) {
	return (
		<ol className={styles["links"]}>
			{items.map((item, i) => (
				<li key={i} className={styles["links__item"]}>
					<Link href={item.to} prefetch={false}>
						{item.title}
					</Link>
				</li>
			))}
		</ol>
	);
}
