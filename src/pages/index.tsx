import { NextSeo } from "next-seo";

import styles from "@/styles/Home.module.scss";

export default function Page() {
	return (
		<>
			<NextSeo title="Home" />
			<h1 className={styles["title"]}>Exercises Engine</h1>
		</>
	);
}
