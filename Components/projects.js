import styles from "../styles/components/projects.module.css";
import DetailsBtn from "./detailsBtn";

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
                <h2 className={styles.projectTitle}>{name}</h2>
                <p className={styles.techs}>
                  <span className={styles.techTitle}>Technologies:</span>
                  {techs}
                </p>
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>{descr}</p>
                </div>
              </div>
              <DetailsBtn projectId={_id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Projects;
