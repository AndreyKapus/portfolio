import styles from "../styles/components/projects.module.css";

const dir = "https://portfolio-api-a758.onrender.com/";

const Projects = ({ projects }) => {
  return (
    <div className={styles.projectsContainer}>
      <ul className={styles.projectsList}>
        {projects &&
          projects.map(({ _id, img, name, techs, descr, team, avatarUrl }) => (
            <li key={_id} className={styles.listItem}>
              <img src={`${dir}${avatarUrl}`} className={styles.projectImg} />
              <div className={styles.descriptionWrapper}>
                <h2>{name}</h2>
                <p>{descr}</p>
                <p>{techs}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Projects;
