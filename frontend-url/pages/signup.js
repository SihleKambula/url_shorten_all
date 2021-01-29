import React from "react";
import Layout from "../components/Layout";
import style from "../styles/login.module.scss";
import { useState } from "react";
import Link from "next/link";

function Signup() {
  //State
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //Functions
  function handleSubmit(e) {
    e.preventDefault();
    email ? setEmailError(null) : setEmailError(true);
    password ? setPasswordError(null) : setPasswordError(true);
  }

  return (
    <Layout>
      <div>
        <form className={style.form} onSubmit={handleSubmit}>
          {/* name */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="john doe_2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className={style.email_error}>Email error</p>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="******"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className={style.password_error}>Password error</p>
          )}

          <button>Login</button>

          <span>
            Have an account? <Link href="/login">Login</Link>
          </span>
        </form>
      </div>
    </Layout>
  );
}

export default Signup;
