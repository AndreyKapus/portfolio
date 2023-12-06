import Modal from "react-modal";
import { useState } from "react";
import styles from "../styles/components/layout.module.css";
import AddProject from "./addProject";

const AddProjectModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#343434",
    },
  };

  Modal.setAppElement("body");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className={styles.addBtn} type="button" onClick={openModal}>
        Add project
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal}>close</button>
        <AddProject />
      </Modal>
    </div>
  );
};

export default AddProjectModal;
