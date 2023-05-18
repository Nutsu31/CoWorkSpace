import React from "react";
import MainSection from "../components/section/MainSection";
import Title from "../components/titles/Title";

import homeBanner from "../assets/banner.png";
import homeBanner1 from "../assets/1965773.png";

const HomePage = () => {
  const title = {
    styledText: "COWork-Space",
    unStyledText: "იფიქრე გუნდურად",
    paragraph:
      "CoWorkSpace არის ადგილი, რომელიც იქნება რეალური სამუშაო გარემოსთან მაქსიმალურად მიმსგავსებული, სადაც ყველა დელევოპერს შესაძლებლობა ექნება განავითაროს საკუთარი თავი ,როგორც ინდივიდუალურად ისე გუნდურ მუშაობაში. ჩვენთან თქვენ შეიძენთ ...",
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <MainSection sectionNumber={1} banner={homeBanner} />
      </div>
    </>
  );
};

export default HomePage;
