import Layout from "../components/Layout";
import style from "../styles/Home.module.scss";
import Link from "next/link";
import UrlShortener from "../components/UrlShortener";
import ShortenUrl from "../components/ShortenUrl";
function Home() {
  return (
    <Layout pageTitle="Home">
      <div>
        <div className={style.container}>
          <div className={style.copy_right}>
            <h1>More then just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className={style.btn}>
              <Link href="#start">Get Started</Link>
            </div>
          </div>
          <div className={style.img}>
            <img
              src="/images/illustration-working.svg"
              alt="illustration-working"
            />
          </div>
        </div>

        <section className={style.main} id="start">
          <UrlShortener />
          <ShortenUrl
            longUrl="https://longsideoflife.io"
            shortUrl="https://lil_link/k4lgk"
          />
        </section>
      </div>
    </Layout>
  );
}

export default Home;
