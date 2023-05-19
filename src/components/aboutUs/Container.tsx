import React, { useState } from "react";
import styled, { css } from "styled-components";
import StyledButtons from "../buttons/AboutUsButton";

function Container({
  photo,
  text,
  num,
  setShowFullDetails,
}: {
  photo: string;
  text: string;
  num?: number;
  setShowFullDetails: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Containercss num={num}>
      <ImageWrapper>
        <Image src={photo} />
      </ImageWrapper>
      <TextWrapper>
        <Info>{text}</Info>
        <P>
          CoWorkSpace არის ადგილი, რომელიც იქნება რეალური სამუშაო გარემოსთან
          მაქსიმალურად მიმსგავსებული, სადაც ყველა დელევოპერს შესაძლებლობა ექნება
          განავითაროს საკუთარი თავი ,როგორც ინდივიდუალურად ისე გუნდურ მუშაობაში.
        </P>
        <StyledButtons setShowFullDetails={setShowFullDetails} />
      </TextWrapper>
      <div></div>
    </Containercss>
  );
}

export default Container;

const Containercss = styled.div(
  ({ num }: { num?: number }) => css`
    height: 754px;
    width: 360px;
    border-radius: 20px;
    /* background-color: ${num === 3
      ? "#1090f855"
      : "rgba(250, 250, 250, 0.45)"}; */
    background-color: #1090f855;
    backdrop-filter: blur(45px);
    display: flex;
    flex-direction: column;
    gap: 25px;
  `
);

const Image = styled.img(
  () => css`
    width: 330px;
  `
);

const ImageWrapper = styled.div(
  () => css`
    width: 360px;
    height: 360px;
    background-color: rgba(122, 122, 122, 0.4);
    border: 17px solid rgba(250, 250, 250, 0.15);
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
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
