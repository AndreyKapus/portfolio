import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <nav>
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
