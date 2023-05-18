import React from "react";
import styled, { css } from "styled-components";
import Banner from "../components/section/Banner";
import bannerphoto from "../assets/contact-us.svg";
import Title from "../components/titles/Title";

const title2 = {
  styledText: "CONTACT US",
  unStyledText: "We are here for you",
  paragraph:
    "ალექს ნუცუბიძე, aleksandrenutsubidze@gmail.com, +995 598 79 47 87",
  paragraph2: "ნიკა ზედგინიძე, nikushazedginidze@gmail.com, +995 599 69 48 48",
};

const Contact = () => {
  return (
    <ContactCss>
      <TextWrapper>
        <Title text={title2} />
      </TextWrapper>
      <Banner banner={bannerphoto} />
    </ContactCss>
  );
};

export default Contact;

const ContactCss = styled.div(
  () => css`
    width: 100%;
    height: 90vh;
    display: flex;
    gap: 120px;
    justify-content: center;
    flex-direction: row;
  `
);
const TextWrapper = styled.div(
  () => css`
    width: 650px;
    height: 650px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    flex-direction: column;
    gap: 16px;
  `
);
