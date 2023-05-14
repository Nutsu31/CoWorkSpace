import React from "react";
import Banner1 from "../../assets/1965773.png";
const Images = () => {
  return (
    <div style={styles.container}>
      <div style={styles.image}>
        <img src={Banner1} alt="banner  " />
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
};
