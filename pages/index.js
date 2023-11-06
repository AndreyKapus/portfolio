import Link from "next/link";
import Head from "next/head";
import ProjectsList from "./ProjectsList/ProjectsList";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1>
        <Link href={"/"}>Portfolio</Link>
      </h1>
      <div>
        <Link href={"/Contacts/contacts"}>Contacts</Link>
      </div>
      <p>
        <ProjectsList />
      </p>
    </div>
  );
};

export default Index;
