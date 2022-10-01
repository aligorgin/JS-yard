import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const name = 'aliwolfi';
export const siteTitle = 'blog sample from next doc';

interface Props {
	children?: any;
	home?: boolean;
}

export default function Layout({ children, home }: Props) {
	return (
		<div className="max-w-xl w-full mx-auto mt-12">
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta name="description" content="Learn how to build a personal webstite using next.js" />
					<meta
						property="og:image"
						content={`https://og-image.vercel.app/${encodeURI(
							siteTitle
						)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
					/>
					<meta name="og:title" content={siteTitle} />
				</Head>
				<header className="flex flex-col items-center">
					{home ? (
						<>
							<Image
								priority
								src={'/images/profile.jpg'}
								className="rounded-full"
								height={148}
								width={148}
								alt={name}
							/>
							<h1 className="font-[2.5rem] leading-[1.2] font-extrabold tracking-[-0.05rem] my-4 mx-0">
								{name}
							</h1>
						</>
					) : (
						<>
							<Link href={'/'}>
								<a>
									<Image
										priority
										src={'/images/profile.jpg'}
										className="rounded-full"
										height={108}
										width={108}
										alt={name}
									/>
								</a>
							</Link>
							<h2 className="text-[1.5rem] leading-[1.4] my-4 mx-0">
								<Link href={'/'}>
									<a className='text-inherit'>{name}</a>
								</Link>
							</h2>
						</>
					)}
				</header>
				<main>{children}</main>
				{!home && (
					<div className='mt-12 mx-0 mb-0'>
						<Link href={'/'}>
							&#60;- Back to home
						</Link>
					</div>
				)}
			</div>
	);
}
