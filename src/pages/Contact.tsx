import React from "react";
import styled, { css } from "styled-components";
import Banner from "components/section/Banner";
import bannerphoto from "assets/contact-us.svg";
import { HomeContainer } from "pages/HomePage";
import Title from "components/section/titles/Title";

const title2 = {
  styledText: "CONTACT US",
  unStyledText: "We are here for you",
  paragraph:
    "ალექს ნუცუბიძე, aleksandrenutsubidze@gmail.com, +995 598 79 47 87",
  paragraph2: "ნიკა ზედგინიძე, nikushazedginidze@gmail.com, +995 599 69 48 48",
};

const Contact = () => {
  return (
    <HomeContainer>
      <Title text={title2} />
      <Banner banner={bannerphoto} />
    </HomeContainer>
  );
};

export default Contact;
