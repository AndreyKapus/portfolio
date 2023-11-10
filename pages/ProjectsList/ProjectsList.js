import Layout from "../../Components/layout";
import projects from "../../Components/Projects/projects.json";

const ProjectsList = () => {
  const { title, techs, descr, img } = projects;

  return (
    <div>
      <ul>
        <li>
          <p>{img}</p>
          <h2>{title}</h2>
          <p>{techs}</p>
          <p>{descr}</p>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsList;
