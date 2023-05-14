import React from "react";
import Title from "../titles/Title";
import Images from "../imageBox/Images";

const MainSection = () => {
  const title1 = "ჩვენ ერთი გუნდი ვართ";

  return (
    <div style={styles.container}>
      <Title text={title1} />
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
    justifyContent: "center",
  },
};
