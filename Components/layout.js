import Head from "next/head";
import Link from "next/link";
import styles from "../styles/layout.module.scss";

const Layout = ({ children, title = "Portfolio" }) => {
  return (
    <>
      <nav className={styles.navigation}>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>
          <Link className={styles.mainTitle} href={"/"}>
            Portfolio
          </Link>
        </h1>
        <p>
          <Link className={styles.contactsLink} href={"/Contacts/contacts"}>
            Contacts
          </Link>
        </p>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
