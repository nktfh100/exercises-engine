import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Layout from "@/components/Layout/Layout";
import NextNProgress from "nextjs-progressbar";
import { Roboto } from "next/font/google";
import { loadSettings } from "@/lib/store";
import { useEffect } from "react";

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
					siteName: "Exercitia Latina",
				}}
				titleTemplate={"%s | Exercitia Latina"}
				defaultTitle={"Exercitia Latina"}
				description={"LLPSI latin exercises chapters 1-35"}
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
