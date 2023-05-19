import React from "react";
import styled, { css } from "styled-components";

interface BannerTypes {
  banner: string;
}
const Banner = ({ banner }: BannerTypes) => {
  return (
    <ImgWrapper>
      <ImgWrapper innerDiv={true}>
        <StyledImage src={banner} key="main banner" />
      </ImgWrapper>
    </ImgWrapper>
  );
};

export default Banner;

const ImgWrapper = styled.div(
  ({ innerDiv }: { innerDiv?: boolean }) => css`
    width: ${innerDiv ? "500px" : "560px"};
    height: ${innerDiv ? "500px" : "560px"};
    background: rgba(250, 250, 250, 0.15);
    backdrop-filter: blur(45px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    @media (max-width: 1400px) {
      width: ${innerDiv ? "400px" : "460px"};
      height: ${innerDiv ? "400px" : "460px"};
    }
    @media (max-width: 550px) {
      width: ${innerDiv ? "300px" : "360px"};
      height: ${innerDiv ? "300px" : "360px"};
    }
    @media (max-width: 410px) {
      width: ${innerDiv ? "250px" : "310px"};
      height: ${innerDiv ? "250px" : "310px"};
    }
  `
);
const StyledImage = styled.img(
  () => css`
    width: 500px;
    @media (max-width: 1400px) {
      width: 300px;
    }
    @media (max-width: 410px) {
      width: 250px;
    }
  `
);
