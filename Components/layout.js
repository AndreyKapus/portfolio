import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "Portfolio" }) => {
  return (
    <>
      <nav>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>
          <Link href={"/"}>Portfolio</Link>
        </h1>
        <div>
          <Link href={"/Contacts/contacts"}>Contacts</Link>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
