import React, { useState } from "react";
import styled, { css } from "styled-components";
import StyledButtons from "../buttons/AboutUsButton";
import PageFullInfo from "components/section/details/PageFullInfo";

function Container({
  photo,
  text,
  num,
  showFullDetails,
  setShowFullDetails,
}: {
  photo: string;
  text: {
    title: string;
    text: string;
    shortTxt: string;
  };
  num: number;
  showFullDetails: number;
  setShowFullDetails: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Containercss num={num} showFullDetails={showFullDetails}>
      <ImageWrapper>
        <Image src={photo} />
      </ImageWrapper>
      <TextWrapper>
        <Info>{text.title}</Info>
        {showFullDetails === num ? null : <P>{text.shortTxt}</P>}
        <StyledButtons setShowFullDetails={setShowFullDetails} num={num} />
      </TextWrapper>
      {showFullDetails === num ? (
        <PageFullInfo setShowFullDetails={setShowFullDetails} text={text} />
      ) : null}
    </Containercss>
  );
}

export default Container;

const Containercss = styled.div(
  ({ num, showFullDetails }: { num?: number; showFullDetails: number }) => css`
    height: ${showFullDetails === num && showFullDetails !== 1
      ? "900px"
      : "774px"};
    width: 360px;
    border-radius: 20px;
    background-color: rgba(193, 193, 193, 1);
    background-color: #1090f855;
    backdrop-filter: blur(45px);
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 25px;
    @media (max-width: 450px) {
      width: 320px;
    }
    @media (max-width: 350px) {
      width: 300px;
    }
  `
);

const Image = styled.img(
  () => css`
    width: 330px;
    @media (max-width: 450px) {
      width: 290px;
    }
    @media (max-width: 350px) {
      width: 270px;
    }
  `
);

const ImageWrapper = styled.div(
  () => css`
    width: 360px;
    height: 360px;
    background-color: rgba(193, 193, 193, 1);
    border: 17px solid #919c9f;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 450px) {
      width: 320px;
    }
    @media (max-width: 350px) {
      width: 300px;
    }
  `
);

const Info = styled.h5(
  () => css`
    color: #ffffff;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
  `
);
const P = styled.p(
  () => css`
    color: #ffffff;
    font-family: "Nunito Sans";
    font-style: normal;
    font-size: 16px;
    line-height: 170%;
    text-align: center;
  `
);

const TextWrapper = styled.div(
  () => css`
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 17px;
  `
);
