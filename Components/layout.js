import Head from "next/head";
import Link from "next/link";
import styles from "../styles/components/layout.module.css";
import AddProjectModal from "./addProjectModal";

const Layout = ({ children, title = "Portfolio" }) => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Head>
            <title>{title}</title>
          </Head>
          <h1>
            <Link className={styles.mainTitle} href={"/"}>
              Port<span className={styles.titleAccent}>folio</span>
            </Link>
          </h1>
          <p>
            <Link className={styles.contactsLink} href={"/Contacts/contacts"}>
              Contacts
            </Link>
          </p>
        </nav>
        <AddProjectModal />
      </div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
