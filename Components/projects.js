import styles from "../styles/projects.module.scss";

const Projects = ({ projects }) => {
  return (
    <div>
      <ul className={styles.projectsList}>
        {projects &&
          projects.map(({ _id, img, name, techs, descr, team, avatarUrl }) => (
            <li key={_id} className={styles.listItem}>
              <img src={avatarUrl} width="300" />
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
