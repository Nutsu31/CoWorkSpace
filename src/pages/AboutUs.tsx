import React from "react";
import Container from "../components/aboutUs/Container";
import styled, { css } from "styled-components";
import photo1 from "../assets/1965773.png";

const AboutUs = () => {
  return (
    <div>
      <AboutUsCss>
        <Container photo={photo1} />
        <Container photo={photo1} />
        <Container photo={photo1} />
      </AboutUsCss>
    </div>
  );
};

export default AboutUs;

const AboutUsCss = styled.div(
  () => css`
    padding: 0 150px;
    display: flex;
    justify-content: center;
    gap: 120px;
  `
);
