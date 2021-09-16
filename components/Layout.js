import Head from 'next/head';
import getImg from '../lib/prefix';

import Footer from './Footer';
import Navbar from './Navbar';

import layout from '../styles/Layout.module.scss';

export default function Layout({ children }) {
    return <div className={layout.container}>

        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Stuyvesant High School Junior Caucus" />
            <link rel="shortcut icon" href={getImg("/JuniorCaucusWhite.png")} />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {/* each page can add their own title */}
        </Head>
        
        <div className={layout.content}>
            <Navbar />
            {children}
            <Footer />
        </div>

    </div>;
}