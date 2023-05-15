import React from "react";
import Banner1 from "../../assets/1965773.png";
import { motion } from "framer-motion";

const Images = () => {
  return (
    <div style={styles.container}>
      <div style={styles.image}>
        <div style={styles.imageBg}>
          <img src={Banner1} alt="banner  " />
        </div>
      </div>
    </div>
  );
};

export default Images;
const styles = {
  container: {
    width: "600px",
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    background: " rgba(250, 250, 250, 0.2)",
    backdropFilter: "blur(45px)",
    height: "550px",
    width: "550px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "24px",
  },
  imageBg: {
    width: 500,
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "24px",
  },
};
