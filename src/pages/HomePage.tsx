import React from "react";
import MainSection from "../components/section/MainSection";
import Title from "../components/titles/Title";

import homeBanner from "../assets/banner.jpg";

const HomePage = () => {
  const title = {
    styledText: "COWork-Space",
    unStyledText: "იფიქრე გუნდურად",
    paragraph:
      "CoWorkSpace არის ადგილი, რომელიც იქნება რეალური სამუშაო გარემოსთან მაქსიმალურად მიმსგავსებული, სადაც ყველა დელევოპერს შესაძლებლობა ექნება განავითაროს საკუთარი თავი ,როგორც ინდივიდუალურად ისე გუნდურ მუშაობაში. ჩვენთან თქვენ შეიძენთ ...",
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Title text={title} />
      <MainSection banner={homeBanner} />
    </div>
  );
};

export default HomePage;
