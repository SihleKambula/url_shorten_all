import style from "../styles/ShortenUrl.module.scss";
import { useState } from "react";

function ShortenUrl() {
  // Changing copy button background
  const [copy, setCopy] = useState(style.copy);
  return (
    <div className={style.container}>
      <div className={style.long_url}>
        <p>https://longsideoflife.io </p>
      </div>
      <div className={style.shorten_url}>
        <p>https://lil_link/k4lgk</p>
        <button className={copy}>Copy</button>
      </div>
    </div>
  );
}

export default ShortenUrl;
