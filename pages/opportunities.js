import Head from "next/head";

import opportunities from "../styles/Opportunities.module.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Opportunities() {
  return (
    <>
      <Head>
        <title>Opportunities | Junior Caucus</title>
      </Head>

      <h1 className="text-center title">Opportunities</h1>
    </>
  );
}
