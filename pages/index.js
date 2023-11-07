import Link from "next/link";
import Head from "next/head";
import ProjectsList from "./ProjectsList/ProjectsList";
import Layout from "../Components/layout";

const Index = () => {
  return (
    <Layout>
      <ProjectsList />
    </Layout>
  );
};

export default Index;
