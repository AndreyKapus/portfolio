import styles from "../styles/projects.module.scss";

const dir = "https://portfolio-api-a758.onrender.com/";

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <div>
      <ul className={styles.projectsList}>
        {projects &&
          projects.map(({ _id, img, name, techs, descr, team, avatarUrl }) => (
            <li key={_id} className={styles.listItem}>
              <img src={`${dir}${avatarUrl}`} width="300" />
              <p>{_id}</p>
              <h2>{name}</h2>
              <p>{descr}</p>
              <p>{techs}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Projects;
