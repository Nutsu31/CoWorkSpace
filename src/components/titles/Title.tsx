import React from "react";

const Title = ({ text }: { text: string }) => {
  return (
    <div style={styles.container}>
      <p>{text}</p>
    </div>
  );
};

export default Title;

const styles = {
  container: {
    width: "600px",
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
