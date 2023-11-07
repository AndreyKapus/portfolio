import Link from "next/link";
import Head from "next/head";
import ProjectsList from "./ProjectsList/ProjectsList";
import Layout from "../Components/layout";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>

      <ProjectsList />
    </Layout>
  );
};

export default Index;
