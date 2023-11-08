import Layout from "../../Components/layout";
import projects from "../../Components/Projects/projects.json";

const ProjectsList = () => {
  return (
    <div>
      <ul>
        <li>
          <p></p>
          <h2>{projects.title}</h2>
          <p>{projects.techs}</p>
          <p>{projects.descr}</p>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsList;
