import "@/styles/globals.scss";

import { DefaultSeo } from "next-seo";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "nextjs-google-analytics";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";

import Layout from "@/components/Layout/Layout";
import { loadSettings } from "@/lib/store";

import type { AppProps } from "next/app";
const roboto = Roboto({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Load settings from localStorage only on client side
		if (typeof window !== "undefined") {
			loadSettings();
		}
	}, []);

	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${roboto.style.fontFamily}, sans-serif;
				}
			`}</style>

			<DefaultSeo
				openGraph={{
					type: "website",
					locale: "en_IE",
					url: "https://exercitia-latina.surge.sh",
					siteName: "Exercises Engine",
				}}
				titleTemplate={"%s | Exercises Engine"}
				defaultTitle={"Exercises Engine"}
				description={"Exercises Engine"}
			/>

			<GoogleAnalytics
				trackPageViews
				gaMeasurementId={"G-XL21TY2KKX"}
				strategy={"lazyOnload"}
			/>

			<NextNProgress color="black" stopDelayMs={100} />

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
