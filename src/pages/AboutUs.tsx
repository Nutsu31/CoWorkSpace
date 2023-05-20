import React, { useState } from "react";
import Container from "components/aboutUs/Container";
import styled, { css } from "styled-components";
import photo1 from "../assets/1965773.png";
import PageFullInfo from "components/section/details/PageFullInfo";

const AboutUs = () => {
  const [showFullDetails, setShowFullDetails] = useState(0);

  const aboutUsTitle1 = "პროექტის შესახებ";
  const aboutUsTitle2 = "პროექტის მიზანი";
  const aboutUsTitle3 = "პრემიუმ პაკეტი";

  return (
    <div>
      <AboutUsCss>
        <Container
          photo={photo1}
          text={aboutUsTitle1}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
          num={1}
        />
        <Container
          photo={photo1}
          text={aboutUsTitle2}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
          num={2}
        />
        <Container
          photo={photo1}
          text={aboutUsTitle3}
          num={3}
          setShowFullDetails={setShowFullDetails}
          showFullDetails={showFullDetails}
        />
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
