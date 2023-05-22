import React, { useState } from "react";
import Container from "components/aboutUs/Container";
import styled, { css } from "styled-components";
import photo1 from "assets/1965773.png";
import HowWeWork from "assets/howWeWork.svg";
import WeAreAsking from "assets/weAreAsking.png";
import ProjectGoal from "assets/projectGoal.png";
import {
  aboutUsTitle1,
  aboutUsTitle2,
  aboutUsTitle3,
  aboutUsTitle4,
} from "components/aboutUs/AboutTexts";
import AnimationSection from "components/motions/AnimationSection";

const AboutUs = () => {
  const [showFullDetails, setShowFullDetails] = useState(0);

  return (
    <AnimationSection>
      <AboutUsCss>
        <Container
          photo={photo1}
          text={aboutUsTitle1}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
          num={1}
        />
        <Container
          photo={ProjectGoal}
          text={aboutUsTitle2}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
          num={2}
        />
        <Container
          photo={HowWeWork}
          text={aboutUsTitle3}
          num={3}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
        />
        <Container
          photo={WeAreAsking}
          text={aboutUsTitle4}
          num={4}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
        />
      </AboutUsCss>
    </AnimationSection>
  );
};

export default AboutUs;

const AboutUsCss = styled.div(
  () => css`
    padding: 0 150px;
    display: flex;
    justify-content: space-evenly;
    /* flex-direction: column; */
    flex-wrap: wrap;
    gap: 56px;
    @media (max-width: 1380px) {
      gap: 60px;
    }
    @media (max-width: 1230px) {
      gap: 40px;
    }
    @media (max-width: 745px) {
      min-height: 200vh;
    }
  `
);
