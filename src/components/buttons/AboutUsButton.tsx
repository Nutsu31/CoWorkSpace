import React from "react";
import styled, { css } from "styled-components";

const StyledButtons = ({
  num,
  setShowFullDetails,
}: {
  num: number;
  setShowFullDetails: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <DetailsButton onClick={() => setShowFullDetails(num)}>
      დეტალურად
    </DetailsButton>
  );
};

export default StyledButtons;

const DetailsButton = styled.button(
  () => css`
    color: #123b53;
    background-color: #a9deee;
    font-weight: 600;
    height: 70px;
    width: 296px;
    font-size: 20px;
    border: none;
    @media (max-width: 350px) {
      width: 260px;
      height: 60px;
    }
  `
);
