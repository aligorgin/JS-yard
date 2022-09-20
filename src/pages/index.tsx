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
			<section className="text-[1.2rem] leading-[1.5] py-4">
				<h2 className="text-[1.7rem] leading-[1.5] mb-2">blog</h2>
				<ul>
					{allPostsData.map(({ date, id, title }: { date: string; id: string; title: string }) => (
						<li className='mb-4' key={id}>
							<div className='font-bold text-xl'>{title}</div>
							<div className='text-lg font-semibold'>{id}</div>
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
