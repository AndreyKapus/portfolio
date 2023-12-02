import Layout from "../../Components/layout";
import Projects from "../../Components/projects";

const ProjectsList = ({ projects }) => {
  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
};

export default ProjectsList;
