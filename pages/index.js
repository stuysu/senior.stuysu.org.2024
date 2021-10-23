/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import getImg from "../lib/prefix";
import home from "../styles/Home.module.scss";
import Block from "../components/Block";

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

      <Block color={'#2F4551'}>
        <h1 className="text-center title">Junior Caucus</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          suscipit orci, at auctor massa. Sed cursus diam at tortor dignissim,
          ac blandit velit luctus. Suspendisse gravida enim nec enim
          sollicitudin sollicitudin. Proin vitae maximus risus, quis eleifend
          massa. Sed a nulla in nisl efficitur varius vel non sapien. Ut
          faucibus nunc ac quam cursus ultricies. Cras ornare quam et mauris
          pellentesque ultrices.
        </p>
      </Block>

      <Block color={'#5B483D'}>
        <h1 className="text-center title">Junior Caucus</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          suscipit orci, at auctor massa. Sed cursus diam at tortor dignissim,
          ac blandit velit luctus. Suspendisse gravida enim nec enim
          sollicitudin sollicitudin. Proin vitae maximus risus, quis eleifend
          massa. Sed a nulla in nisl efficitur varius vel non sapien. Ut
          faucibus nunc ac quam cursus ultricies. Cras ornare quam et mauris
          pellentesque ultrices.
        </p>
      </Block>

      <Block color={'#272828'}>
        <h1 className="text-center title">Junior Caucus</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          suscipit orci, at auctor massa. Sed cursus diam at tortor dignissim,
          ac blandit velit luctus. Suspendisse gravida enim nec enim
          sollicitudin sollicitudin. Proin vitae maximus risus, quis eleifend
          massa. Sed a nulla in nisl efficitur varius vel non sapien. Ut
          faucibus nunc ac quam cursus ultricies. Cras ornare quam et mauris
          pellentesque ultrices.
        </p>
      </Block>
    </>
  );
}
