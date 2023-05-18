import React, { useState } from "react";
import Container from "../components/aboutUs/Container";
import styled, { css } from "styled-components";
import photo1 from "../assets/1965773.png";
import PageFullInfo from "../components/section/details/PageFullInfo";

const AboutUs = () => {
  const [showFullDetails, setShowFullDetails] = useState(false);

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
        />
        <Container
          photo={photo1}
          text={aboutUsTitle2}
          setShowFullDetails={setShowFullDetails}
        />
        <Container
          photo={photo1}
          text={aboutUsTitle3}
          num={3}
          setShowFullDetails={setShowFullDetails}
        />
        {showFullDetails ? (
          <PageFullInfo setShowFullDetails={setShowFullDetails} />
        ) : null}
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
