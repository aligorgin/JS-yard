import Head from 'next/head';
import Layout, { siteTitle } from '../component/layout';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData
		}
	};
}

export default function Home({ allPostsData }: any) {
	console.log(allPostsData[0].date);

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="text-[1.2rem] leading-[1.5]">
				<p>hey guys im ali wolfi im trying to be a better web developer and build web apps</p>
				<p>This is a test webstite that {"i'm"} learning from next js doc</p>
			</section>
			<section className="py-4 text-[1.2rem] leading-[1.5] ">
				<h2 className="mb-2 text-[1.7rem] leading-[1.5]">blog</h2>
				<ul>
					{allPostsData.map(({ date, id, title }: { date: string; id: string; title: string }) => (
						<li className="mb-4" key={id}>
							<div className="text-xl font-bold">{title}</div>
							<div className="text-lg font-semibold">{id}</div>
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
