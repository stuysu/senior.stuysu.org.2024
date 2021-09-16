import Head from "next/head";

import about from "../styles/About.module.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Junior Caucus</title>
      </Head>

      <h1 className="text-center title">About</h1>
    </>
  );
}
