import { useState } from "react";
import styles from "../styles/components/addProject.module.css";
import { useProjects } from "../store";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [techs, setTechs] = useState("");
  const [descr, setDescr] = useState("");
  const [team, setTeam] = useState(false);

  const addNewProject = useProjects((state) => state.addProject);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "techs":
        setTechs(value);
        break;
      case "descr":
        setDescr(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title,
      techs,
      descr,
      team,
    };

    addNewProject(event);
  };

  const handleCheckboxChange = (e) => {
    setTeam(e.currentTarget.checked);
  };

  return (
    <div className={styles.addContainer}>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <label htmlFor="title" className={styles.formLabel}>
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className={styles.input}
          onChange={handleChange}
        />
        <label htmlFor="techs" className={styles.formLabel}>
          Technologies
        </label>
        <input
          type="text"
          id="techs"
          name="techs"
          className={styles.input}
          onChange={handleChange}
        />
        <label htmlFor="descr" name="descr" className={styles.formLabel}>
          description
        </label>
        <textarea
          name="textarea"
          rows="10"
          cols="5"
          id="descr"
          className={styles.textarea}
          onChange={handleChange}
        />
        <label htmlFor="checkbox" className={styles.formLabel}>
          Team project
        </label>
        <input
          type="checkbox"
          id="checkbox"
          name="team"
          checked={team}
          onChange={handleCheckboxChange}
        />
        <button type="submit">Add project</button>
      </form>
    </div>
  );
};

export default AddProject;
