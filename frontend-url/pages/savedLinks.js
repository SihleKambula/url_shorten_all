import React from "react";
import Layout from "../components/Layout";
import ShortenUrl from "../components/ShortenUrl";
import style from "../styles/SavedLinks.module.scss";

function SavedLinks() {
  return (
    <Layout>
      <div className={style.container}>
        <h1>Your saved links</h1>

        <ShortenUrl
          longUrl="https://longsideoflife.io"
          shortUrl="https://lil_link/k4lgk"
        />
      </div>
    </Layout>
  );
}

export default SavedLinks;
