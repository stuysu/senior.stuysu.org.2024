import Head from "next/head";

import newsletters from "../styles/Newsletters.module.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Newsletters() {
  return (
    <>
      <Head>
        <title>Newsletters | Junior Caucus</title>
      </Head>

      <h1 className="text-center title">Newsletters</h1>
    </>
  );
}
