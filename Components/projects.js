import styles from "../styles/components/projects.module.css";
import DeleteBtn from "./deleteBtn";
import DetailsBtn from "./detailsBtn";
import EdivAvatar from "./editAvatar";

const dir = "https://portfolio-api-a758.onrender.com/";

const Projects = ({ projects }) => {
  return (
    <div className={styles.projectsContainer}>
      <ul className={styles.projectsList}>
        {projects &&
          projects.map(({ _id, img, name, techs, descr, team, avatarUrl }) => (
            <li key={_id} className={styles.listItem}>
              <EdivAvatar projectId={_id} />
              <div className={styles.imgWrapper}>
                <img src={`${dir}${avatarUrl}`} className={styles.projectImg} />
              </div>
              <div className={styles.descriptionWrapper}>
                <h2 className={styles.projectTitle}>{name}</h2>
                <p className={styles.techs}>
                  <span className={styles.techTitle}>Technologies:</span>
                  {techs}
                </p>
                <div className={styles.descriptionContainer}>
                  {descr.length > 200 ? (
                    <p className={styles.continue}>{descr}</p>
                  ) : (
                    <p className={styles.description}>{descr}</p>
                  )}
                </div>
                <div>{team ? <p>Team project</p> : <p>Individual</p>}</div>
              </div>
              <DetailsBtn projectId={_id} />
              <DeleteBtn projectId={_id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Projects;
