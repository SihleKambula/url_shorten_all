import style from "../styles/ShortenUrl.module.scss";
import { useState } from "react";

function ShortenUrl({ longUrl, shortUrl }) {
  // Changing copy button background
  const [copy, setCopy] = useState(style.copy);
  const [copyTitle, setCopyTitle] = useState("Copy");

  //handle copy link functionality
  function copyLink() {
    setCopy(style.copied);
    setCopyTitle("Copied");
  }

  return (
    <div className={style.container}>
      <div className={style.long_url}>
        <p>{longUrl}</p>
      </div>
      <div className={style.shorten_url}>
        <p>{shortUrl}</p>
        <button className={copy} onClick={copyLink}>
          {copyTitle}
        </button>
      </div>
    </div>
  );
}

export default ShortenUrl;
