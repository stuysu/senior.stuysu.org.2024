import Head from 'next/head'
// import Image from 'next/image'
import opportunities from '../styles/Opportunities.module.scss'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Newsletters() {
    console.log(process.env.NEXT_PUBLIC_BASE_PATH)
    return (
    <div className="container">
      <Head>
        <title>Newsletters | Junior Caucus</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Stuyvesant High School Junior Caucus" />
        <link rel="shortcut icon" href="./static/JuniorCaucusWhite.png" />
      </Head>

      {/* <div className={home.content}> */}
        <Navbar />

        <h1 className={"text-center" + " " + opportunities.title}>Opportunities</h1>

        <Footer />
      {/* </div> */}
    </div>
    )
}