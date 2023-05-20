import { Close } from "@mui/icons-material";
import JoinUsButton from "components/buttons/JoinUsButton";
import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";

const PageFullInfo = ({
  text,
  setShowFullDetails,
}: {
  text: string;
  setShowFullDetails: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        width: "100%",
        height: "760px",
        display: "flex",
        flexDirection: "column",
        gap: 24,
        position: "absolute",
        top: "50%",
        left: "50%",
        translate: "-50% -50%",
        backgroundColor: "rgba(18, 59, 83, 1)",
        borderRadius: 20,
        padding: "60px 20px",
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
      <HeaderText>{text}</HeaderText>
      <BodyText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure pariatur
        quae fuga rem reiciendis quis officia qui, sapiente soluta autem
        reprehenderit voluptas veniam tempore doloribus inventore provident
        consectetur ipsam. Deserunt.
      </BodyText>
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
  `
);
