import Link from "next/link";
import Head from "next/head";
import Layout from "../Components/layout";
import ProjectsList from "./ProjectsList/ProjectsList";

export async function getStaticProps() {
  const res = await fetch(
    "https://portfolio-api-a758.onrender.com/api/projects"
  );
  const projects = await res.json();

  return {
    props: { projects },
  };
}

const Index = ({ projects }) => {
  return (
    <Layout>
      <ProjectsList projects={projects} />
    </Layout>
  );
};

export default Index;
