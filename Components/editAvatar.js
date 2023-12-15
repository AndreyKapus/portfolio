import { CiEdit } from "react-icons/ci";
import styles from "../styles/components/projects.module.css";
import { useState } from "react";
import { useProjects } from "../store";

const EdivAvatar = (projectId) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [id, setId] = useState(null);

  const uploadFile = useProjects((state) => state.updatePhoto);

  const handleChange = (e) => {
    const file = e.target.files;
    setSelectedPhoto(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPhoto) {
      alert("chose photo");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", selectedPhoto);
    console.log(formData);
    uploadFile(formData, projectId);
  };

  return (
    <form className={styles.editPhotoForm} onSubmit={handleSubmit}>
      {!selectedPhoto ? (
        <div>
          <label for="editPrhoto" className={styles.editLabel}>
            <CiEdit />
          </label>
          <input
            onChange={handleChange}
            type="file"
            id="editPrhoto"
            className={styles.editPhotoInput}
            accept=".jpg, .jpeg, .png"
          />
        </div>
      ) : (
        <button type="submit" className={styles.acceptBtn}>
          accept
        </button>
      )}
    </form>
  );
};

export default EdivAvatar;
