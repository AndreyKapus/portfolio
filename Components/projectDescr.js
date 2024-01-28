import { useState } from "react";
import styles from "../styles/components/projects.module.css";

const ProjectDescr = ({ descr }) => {
  let shortDescr;

  const sliceDescr = () => {
    if (descr.length > 110) {
      const slicedDescr = descr.slice(110);
      shortDescr = slicedDescr;
    }
    return;
  };

  sliceDescr();

  return (
    <div className={styles.descriptionContainer}>
      {descr.length > 110 ? (
        <p className={styles.continue}>{shortDescr}</p>
      ) : (
        <p className={styles.description}>{descr}</p>
      )}
    </div>
  );
};

export default ProjectDescr;
