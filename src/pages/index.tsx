import type {NextPage} from 'next'
import Head from 'next/head'
import Pars from "../pars";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>pars</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Pars/>
        </div>
    )
}

export default Home
