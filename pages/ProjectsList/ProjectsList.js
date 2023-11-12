import Layout from "../../Components/layout";
import projects from "../../Components/Projects/projects.json";
import BackeryMain from "../../Components/images/bakeryMain";

const ProjectsList = () => {
  const { title, techs, descr, img } = projects;

  return (
    <div>
      <ul>
        <li>
          <p></p>
          <h2>{title}</h2>
          <p>{techs}</p>
          <p>{descr}</p>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsList;
