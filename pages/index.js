import Link from "next/link";
import Head from "next/head";
import Layout from "../Components/layout";
import ProjectsList from "./ProjectsList/ProjectsList";

const Index = () => {
  return (
    <Layout>
      <ProjectsList />
    </Layout>
  );
};

export default Index;
