import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";

const PageFullInfo = ({
  setShowFullDetails,
}: {
  setShowFullDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        width: "100%",
        height: "110vh",
        position: "absolute",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        layout
        style={{
          borderRadius: 20,
          width: 750,
          height: 700,
          backgroundColor: "rgba(190, 190, 190, 1)",
          position: "relative",
        }}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Close
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "rgba(18, 59, 83, 1)",
            cursor: "pointer",
          }}
          onClick={() => setShowFullDetails((curr) => (curr = false))}
        />
        <h1>alex</h1>
      </motion.div>
    </motion.div>
  );
};

export default PageFullInfo;

const OuterDiv = styled.div(
  () => css`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(18, 59, 83, 0.7);
    backdrop-filter: blur(45px);
  `
);

const InnerDiv = styled.div(
  () => css`
    width: 800px;
    height: 700px;
    background-color: rgba(190, 190, 190, 0.9);
    position: relative;
  `
);
