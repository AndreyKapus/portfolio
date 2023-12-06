import { useState } from "react";
import styles from "../styles/layout.module.scss";
import AddProjectModal from "./addProjectModal";

const AddProjectBtn = () => {
  const [active, setActive] = useState(false);
  console.log(active);

  const toggleIsActive = () => {
    !active ? setActive(true) : setActive(false);
  };

  return (
    <>
      <button className={styles.addBtn} type="button" onClick={toggleIsActive}>
        Add project
      </button>
      <AddProjectModal />
    </>
  );
};

export default AddProjectBtn;
