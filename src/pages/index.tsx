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
	console.log(allPostsData);

	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div>{allPostsData[1].title}</div>
			<section className="text-[1.2rem] leading-[1.5]">
				<p>hey guys im ali wolfi im trying to be a better web developer and build web apps</p>
				<p>This is a test webstite that {"i'm"} learning from next js doc</p>
			</section>
			<section className="text-[1.2rem] leading-[1.5] p-4">
				<h2 className="text-[1.7rem] leading-[1.5]">blog</h2>
				<ul>
					{/* {allPostsData.map(({ id, date, title }: { id: string; date: string; title: string }) => { */}
					{allPostsData.map((data) => {
						<li key={data.id}>
							{data.title}
							<br />
							{data.id}
							<br />
							{data.date}
						</li>;
					})}
				</ul>
			</section>
		</Layout>
	);
}
