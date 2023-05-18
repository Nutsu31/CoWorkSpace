import { Close } from "@mui/icons-material";
import React from "react";
import styled, { css } from "styled-components";

const PageFullInfo = ({
  setShowFullDetails,
}: {
  setShowFullDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <OuterDiv>
      <InnerDiv>
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
      </InnerDiv>
    </OuterDiv>
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
    background-color: rgba(193, 193, 193, 1);
    position: relative;
  `
);
