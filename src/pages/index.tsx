import Head from 'next/head';
import Layout, { siteTitle } from '../component/layout';
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';
import Date from '../component/date';

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
							<Link href={`/posts/${id}`}>
								<div className="text-xl font-bold text-blue-400">{title}</div>
							</Link>
							<br />
							<small className="text-lg text-slate-400">
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
