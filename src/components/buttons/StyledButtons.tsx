import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const styles = {
  buttons: {
    height: "69px",
    width: "196px",
    borderRadius: "0px",
    padding: "21px 30px 21px 30px",
    backgroundColor: "#A9DEEE",
    fontSize: "20px",
    border: "none",
  },
};
const StyledButtons = () => {
  return (
    <Link to="/">
      <button style={styles.buttons}>nika</button>;
    </Link>
  );
};

export default StyledButtons;
