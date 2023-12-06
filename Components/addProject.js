import styles from "../styles/components/addProject.module.css";

const AddProject = () => {
  return (
    <div className={styles.addContainer}>
      <form className={styles.addForm}>
        <label for="title" className={styles.formLabel}>
          Title
        </label>
        <input type="text" id="title" className={styles.input} />
        <label for="techs" className={styles.formLabel}>
          Technologies
        </label>
        <input type="text" id="techs" className={styles.input} />
        <label for="descr" className={styles.formLabel}>
          description
        </label>
        <textarea
          name="textarea"
          rows="10"
          cols="5"
          id="descr"
          className={styles.textarea}
        />
        <label for="checkbox" className={styles.formLabel}>
          Team project
        </label>
        <input type="checkbox" id="checkbox" />
        <button type="submit">Add project</button>
      </form>
    </div>
  );
};

export default AddProject;
