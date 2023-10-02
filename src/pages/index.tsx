import LinksList from "@/components/LinksList/LinksList";
import { getChaptersInfo } from "@/lib/apiUtils";
import { IChapterInfo } from "@/lib/types";
import { NextSeo } from "next-seo";

export default function Page({ chapters }: { chapters: IChapterInfo[] }) {
	return (
		<>
			<NextSeo title="Chapters" />

			<LinksList
				items={chapters.map((item) => {
					return {
						to: `/chapter/${item.id}`,
						title: `${item.name} - ${item.id}`,
					};
				})}
			/>
		</>
	);
}

export async function getStaticProps() {
	const chapters = await getChaptersInfo();
	return {
		props: {
			chapters,
		},
	};
}
