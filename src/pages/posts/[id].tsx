import { getAllPostIds, getPostData } from '../../../lib/posts';
import Layout from '../../component/layout';
import Head from 'next/head';
import Date from '../../component/date';

export async function getStaticProps({ params }: any) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData
		}
	};
}

export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
}

export default function Post({ postData }: any) {

	return (
		<Layout>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className="mb-4 text-3xl"> {postData.title}</h1>
				<div className="mb-4 text-lg text-slate-500 ">
					<Date dateString={postData.date} />
				</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
	);
}
