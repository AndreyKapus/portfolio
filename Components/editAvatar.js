import { CiEdit } from "react-icons/ci";
import styles from "../styles/components/projects.module.css";
import { useState } from "react";
import { useProjects } from "../store";

const EdivAvatar = (projectId) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // const [id, setId] = useState(null);
  // console.log("selected photo", selectedPhoto);

  const uploadFile = useProjects((state) => state.updatePhoto);

  const handleChange = (e) => {
    const input = e.target.files;

    const file = input[0];
    setSelectedPhoto(file);
    console.log("file", input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPhoto) {
      alert("chose photo");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", selectedPhoto);
    uploadFile(formData, projectId);
  };

  return (
    <form className={styles.editPhotoForm} onSubmit={handleSubmit}>
      {!selectedPhoto ? (
        <div>
          <label htmlFor="editPrhoto" className={styles.editLabel}>
            <CiEdit />
          </label>
          <input
            onChange={handleChange}
            type="file"
            name="file"
            id="editPrhoto"
            className={styles.editPhotoInput}
            accept="image/*, .jpg, .jpeg, .png"
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
