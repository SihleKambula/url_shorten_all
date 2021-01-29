import Link from "next/link";
import style from "../styles/Navbar.module.scss";

const LoggedOutLinks = () => {
  return (
    <>
      <li className={style.login_link}>
        <Link href="/login">Login</Link>
      </li>
    </>
  );
};

const LoggedInLinks = () => {
  return (
    <>
      <li>
        <Link href="savedLinks">Saved urls</Link>
      </li>
      <li>
        <Link>Log out</Link>
      </li>
    </>
  );
};

function Navbar() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <span>Lil Link</span>
      </div>
      <ul className={style.nav_links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <LoggedOutLinks />
        {/* <LoggedInLinks /> */}
      </ul>
    </nav>
  );
}

export default Navbar;
