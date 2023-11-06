import Link from "next/link";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <p>
        <Link href={"/"}>Projects</Link>
      </p>
      <p>
        <Link href={"/users"}>Add project</Link>
      </p>
    </div>
  );
};

export default Index;
