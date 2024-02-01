import styles from "../styles/components/projects.module.css";
import DeleteBtn from "./deleteBtn";
import DetailsBtn from "./detailsBtn";
import EdivAvatar from "./editAvatar";
import ProjectDescr from "./projectDescr";
import { GiTeamIdea } from "react-icons/gi";

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
                <ProjectDescr descr={descr} />
                <div>
                  {team ? (
                    <div className={styles.typeWrapper}>
                      <p>Team project</p>
                      <GiTeamIdea />
                    </div>
                  ) : (
                    <p>Individ</p>
                  )}
                </div>
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
