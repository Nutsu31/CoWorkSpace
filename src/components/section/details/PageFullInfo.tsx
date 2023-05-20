import { Close } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import JoinUsButton from "components/buttons/JoinUsButton";
import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";

const PageFullInfo = ({
  text,
  setShowFullDetails,
}: {
  text: {
    title: string;
    text: string;
  };
  setShowFullDetails: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const media = useMediaQuery("(max-width:745px)");
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        width: "100%",
        maxHeight: media ? "774px" : "374px",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "rgba(18, 59, 83, 1)",
        border: "1px solid #72bde9",
        borderRadius: 20,
        padding: "60px 20px",
        overflowY: "scroll",
      }}
    >
      <Close
        sx={{
          position: "absolute",
          right: 30,
          top: 30,
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => setShowFullDetails(0)}
      />
      <HeaderText>{text.title}</HeaderText>
      <BodyText>{text.text}</BodyText>
      <JoinUsButton num={2} />
    </motion.div>
  );
};

export default PageFullInfo;

const HeaderText = styled.h1(
  () => css`
    color: #a9deee;
    @media (max-width: 350px) {
      font-size: 30px;
    }
  `
);
const BodyText = styled.p(
  () => css`
    color: #b6b6b6;
    line-height: 175%;
  `
);
