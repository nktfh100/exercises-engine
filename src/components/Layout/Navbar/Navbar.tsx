import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
	return (
		<nav className={styles["navbar"]}>
			<Link className={styles["navbar__link"]} href="/" prefetch={false}>
				Capitula
			</Link>
		</nav>
	);
}
