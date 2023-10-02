import Footer from "@/components/Layout/Footer/Footer";
import Navbar from "@/components/Layout/Navbar/Navbar";
import styles from "./Layout.module.scss";

export default function Layout({ children }: { children?: React.ReactNode }) {
	return (
		<div className={styles["layout"]}>
			<Navbar />
			<main className={styles["layout__main"]}>{children}</main>
			<Footer />
		</div>
	);
}
