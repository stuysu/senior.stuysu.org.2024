import Head from "next/head";
import getImg from "../lib/prefix";
import home from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Junior Caucus</title>
      </Head>

      <section className={home.cardcontainer}>
        <img className={home.cardstuyimg} src={getImg("/stuy.jpg")} />
        <img className={home.cardlogo} src={getImg("/JuniorCaucusWhite.png")} />
      </section>
    </>
  );
}
