/* eslint-disable @next/next/no-img-element */
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

      <section className={home.contentcontainer1}>
        <div className={home.content}>
          <h1 className="text-center title">Junior Caucus</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed suscipit orci, at auctor massa. Sed cursus diam at tortor dignissim, ac blandit velit luctus. Suspendisse gravida enim nec enim sollicitudin sollicitudin. Proin vitae maximus risus, quis eleifend massa. Sed a nulla in nisl efficitur varius vel non sapien. Ut faucibus nunc ac quam cursus ultricies. Cras ornare quam et mauris pellentesque ultrices.</p>
        </div>
      </section>

      <section className={home.contentcontainer2}>
        <div className={home.content}>
          <h1 className="text-center title">Junior Caucus</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed suscipit orci, at auctor massa. Sed cursus diam at tortor dignissim, ac blandit velit luctus. Suspendisse gravida enim nec enim sollicitudin sollicitudin. Proin vitae maximus risus, quis eleifend massa. Sed a nulla in nisl efficitur varius vel non sapien. Ut faucibus nunc ac quam cursus ultricies. Cras ornare quam et mauris pellentesque ultrices.</p>
        </div>
      </section>

      <section className={home.contentcontainer3}>
        <div className={home.content}>
          <h1 className="text-center title">Junior Caucus</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed suscipit orci, at auctor massa. Sed cursus diam at tortor dignissim, ac blandit velit luctus. Suspendisse gravida enim nec enim sollicitudin sollicitudin. Proin vitae maximus risus, quis eleifend massa. Sed a nulla in nisl efficitur varius vel non sapien. Ut faucibus nunc ac quam cursus ultricies. Cras ornare quam et mauris pellentesque ultrices.</p>
        </div>
      </section>
    </>
  );
}
