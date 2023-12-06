import styles from "../styles/components/addProject.module.css";

const AddProject = () => {
  return (
    <div className={styles.addContainer}>
      <form className={styles.addForm}>
        <label>Title</label>
        <input type="text" />
        <label>Technologies</label>
        <input type="text" />
        <label>description</label>
        <input type="text" />
        <label>Team project</label>
        <input type="checkbox" />
        <button type="submit">Add project</button>
      </form>
    </div>
  );
};

export default AddProject;
