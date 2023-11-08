import Link from "next/link";
import styles from "../styles/error.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Error 404. Page not found</h1>
      <p className={styles.text}>
        Please,{" "}
        <Link className={styles.link} href={"/"}>
          go back to main page
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
