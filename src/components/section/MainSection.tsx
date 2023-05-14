import React from "react";
import Title from "../titles/Title";
import Images from "../imageBox/Images";

const MainSection = () => {
  const title = {
    colored: "We're not here to take part, ",
    simpleText: "we're here to take over",
  };
  const paragraph1 =
    "In conclusion, collaboration work is a vital component of success in various domains. It harnesses the power of teamwork, diversity, and effective communication to drive innovation, efficiency, and personal growth. By embracing collaboration and creating a collaborative culture, individuals and organizations can unlock their full potential and achieve remarkable outcomes.";
  return (
    <div style={styles.container}>
      <Title text={title} paragraph={paragraph1} />
      <Images />
    </div>
  );
};

export default MainSection;

const styles = {
  container: {
    width: "100%",
    height: "780px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
};
