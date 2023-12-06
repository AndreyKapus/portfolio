import styles from "../styles/components/addProject.module.css";

const AddProject = () => {
  return (
    <div className={styles.addContainer}>
      <form className={styles.addForm}>
        <label for="title">Title</label>
        <input type="text" id="title" />
        <label for="techs">Technologies</label>
        <input type="text" id="techs" />
        <label for="descr">description</label>
        <input type="text" id="descr" />
        <label for="checkbox">Team project</label>
        <input type="checkbox" id="checkbox" />
        <button type="submit">Add project</button>
      </form>
    </div>
  );
};

export default AddProject;
