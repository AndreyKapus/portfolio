import { useState } from "react";
import styles from "../styles/components/logIn.module.css";

const LoginForm = () => {
  const [emali, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = () => {
    e.preventDefalt();

    const event = {
      emali,
      password,
    };
  };

  return (
    <div>
      <form className={styles.logInForm} onSubmit={handleSubmit}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className={styles.formInput}
          onChange={handleChange}
        />
        <label htmlFor="password" className={styles.formLabel}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={styles.formInput}
          onChange={handleChange}
        />
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
