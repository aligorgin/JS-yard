import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function FirstPost() {

	const firaCode = () => {

	}

	return (
		<>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<Image src={'/images/profile.jpg'} width={144} height={144} alt={'test pic'} />
			<h2>
				<Link href={'/'}>Back to home</Link>
			</h2>
		</>
	)
}