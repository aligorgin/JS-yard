import Head from 'next/head';
import Layout, { siteTitle } from '../component/layout';

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className="text-[1.2rem] leading-[1.5]">
				<p>hey guys im ali wolfi im trying to be a better web developer and build web apps</p>
				<p>This is a test webstite that {"i'm"} learning from next js doc</p>
			</section>
		</Layout>
	);
}
