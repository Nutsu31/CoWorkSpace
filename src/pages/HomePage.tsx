import React from "react";
import Banner from "components/section/Banner";
import styled, { css } from "styled-components";
import HomeBanner from "../assets/banner.png";
import Title from "components/section/titles/Title";

interface HomePageType {
  banner: string;
  sectionNumber: number;
}

const title = {
  styledText: "COWork-Space",
  unStyledText: "იფიქრე გუნდურად",
  paragraph:
    "CoWorkSpace არის ადგილი, რომელიც იქნება რეალური სამუშაო გარემოსთან მაქსიმალურად მიმსგავსებული, სადაც ყველა დელევოპერს შესაძლებლობა ექნება განავითაროს საკუთარი თავი ,როგორც ინდივიდუალურად ისე გუნდურ მუშაობაში. ჩვენთან თქვენ შეიძენთ ...",
};

const HomePage = () => {
  return (
    <HomeContainer>
      <Title text={title} />
      <Banner banner={HomeBanner} />
    </HomeContainer>
  );
};

export default HomePage;

export const HomeContainer = styled.div(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 1090px) {
      flex-direction: column-reverse;
    }
  `
);
