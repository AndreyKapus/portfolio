import Modal from "react-modal";
import { useState } from "react";
import LoginForm from "./loginForm";
import styles from "../styles/components/logIn.module.css";
import { IoClose } from "react-icons/io5";

const LogInModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "300px",
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
      <button className={styles.logInBtn} type="button" onClick={openModal}>
        Log in
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal} className={styles.closeModalBtn}>
          <IoClose className={styles.closeIcon} />
        </button>
        <LoginForm />
      </Modal>
    </div>
  );
};

export default LogInModal;
