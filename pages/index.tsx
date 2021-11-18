import type { NextPage } from 'next'
import Head from 'next/head'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from '../components/header/header'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Sours Homepage</title>
                <meta name="description" content="Visit the Sours in Ingolstadt"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header>
                <Header/>
            </header>

            <main>

            </main>

            <footer>

            </footer>
        </>
    )
}

export default Home
