import React from "react";
import { motion } from "framer-motion";
import * as firebase from "firebase/app";
import "firebase/firestore";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const handleDelete = (e) => {
    const url = selectedImg;

    firebase
      .firestore()
      .collection("images")
      .where("url", "==", url)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <div className="deltetWrapper" onClick={handleDelete}>
        <img className="deleteBtn" src="images/delete.svg" alt="delete" />
      </div>
    </motion.div>
  );
};

export default Modal;
