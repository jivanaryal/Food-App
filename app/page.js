import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "./component/main-header/images/image-slideshow";
export default function Home() {
  return (
    <>
      <header className="flex flex-wrap justify-center  lg:ml-12 md:ml-10  ml-10 gap-10">
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Nextlevel food for the Nextlevel foodies.</h1>
            <p>Taste and share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/comminity">Join our Community</Link>
            <Link href="/meals">Explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
