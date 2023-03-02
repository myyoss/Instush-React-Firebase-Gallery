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
    // let storage = firebase.storage();
    // let pictureRef = storage.refFromURL(url);

    firebase
      .firestore()
      .collection("images")
      .where("url", "==", url)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });

    // pictureRef
    //   .delete()
    //   .then(() => {
    //     setSelectedImg(null)
    //     //  setImages(allImages.filter((image) => image !== url));
    //     alert("Picture is deleted successfully!");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        onClick={handleDelete}
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
