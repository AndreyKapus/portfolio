import { useState } from "react";
import styles from "../styles/components/projects.module.css";
import DetailsBtn from "./detailsBtn";
import EdivAvatar from "./editAvatar";

const dir = "https://portfolio-api-a758.onrender.com/";

const Projects = ({ projects }) => {
  const [avatarId, setAvatarId] = useState("");

  return (
    <div className={styles.projectsContainer}>
      <ul className={styles.projectsList}>
        {projects &&
          projects.map(({ _id, img, name, techs, descr, team, avatarUrl }) => (
            <li key={_id} className={styles.listItem}>
              <EdivAvatar projectId={_id} />
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
