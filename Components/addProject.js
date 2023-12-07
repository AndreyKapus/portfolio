import styles from "../styles/components/addProject.module.css";

const AddProject = () => {
  return (
    <div className={styles.addContainer}>
      <form className={styles.addForm}>
        <label htmlFor="title" className={styles.formLabel}>
          Title
        </label>
        <input type="text" id="title" className={styles.input} />
        <label htmlFor="techs" className={styles.formLabel}>
          Technologies
        </label>
        <input type="text" id="techs" className={styles.input} />
        <label htmlFor="descr" className={styles.formLabel}>
          description
        </label>
        <textarea
          name="textarea"
          rows="10"
          cols="5"
          id="descr"
          className={styles.textarea}
        />
        <label htmlFor="checkbox" className={styles.formLabel}>
          Team project
        </label>
        <input type="checkbox" id="checkbox" />
        <button type="submit">Add project</button>
      </form>
    </div>
  );
};

export default AddProject;
