import { NextSeo } from "next-seo";
import Link from "next/link";

import styles from "@/styles/Home.module.scss";

export default function Page() {
	return (
		<>
			<NextSeo title="Home" />
			<h1 className={styles["title"]}>Exercitia Latina</h1>
			<p className={styles["welcome"]}>Welcome!</p>
			<p>
				Please report errors
				<Link href="https://github.com/nktfh100/exercitia-latina/issues">
					{" "}
					Here
				</Link>
			</p>
		</>
	);
}
