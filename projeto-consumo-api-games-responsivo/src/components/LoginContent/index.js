import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "@/components/LoginContent/LoginContent.module.css";

const LoginContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className={styles.loginContent}>
      {/* LOGO */}
      <div className={styles.logo}>
        <img
          src="/images/thegames_logo.png"
          className={styles.logoImg}
          alt="The Games"
        />
      </div>
      {/* LOGIN CARD */}
      <div className={styles.loginCard}>
        {/* LOGIN CARD HEADER */}
        <div className={styles.loginCardHeader}>
          <h3>Faça seu login:</h3>
        </div>
        {/* LOGIN CARD BODY */}
        <div className={styles.loginCardBody}>
          <form onSubmit={onSubmit} className="formPrimary">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className={`${styles.input} ${"inputPrimary"}`}
            />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className={`${styles.input} ${"inputPrimary"}`}
            />
            <input
              type="submit"
              value="Entrar"
              className={`${styles.input} ${"btnPrimary"}`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
