import Link from "next/link";
import Head from "next/head";
import Layout from "../Components/layout";
import ProjectsList from "./ProjectsList/ProjectsList";
import axios from "axios";

export async function getStaticProps() {
  const res = await axios.get(
    "https://portfolio-api-a758.onrender.com/api/projects"
  );
  const projects = res.data;

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
