import React from "react";
import styled, { css } from "styled-components";
import StyledButtons from "../buttons/AboutUsButton";

function Container({ photo }: { photo: string }) {
  return (
    <Containercss>
      <ImageWrapper>
        <Image src={photo} />
      </ImageWrapper>
      <TextWrapper>
        <Info>მოკლე აღწერა</Info>
        <P>
          Lorem ipsum dolor, sit amem ullam iure, r epellat alias voluptatibus
          eum doloribus?
        </P>
        <StyledButtons />
      </TextWrapper>
      <div></div>
    </Containercss>
  );
}

export default Container;

const Containercss = styled.div(
  () => css`
    height: 704px;
    width: 360px;
    background-color: #0a344d;
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
    background-color: rgba(122, 122, 122, 1);
    border: 17px solid rgba(193, 193, 193, 1);
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
    font-weight: 700;
    font-size: 18px;
    line-height: 170%;
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
