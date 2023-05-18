import React from "react";
import Banner from "./Banner";
import Title from "../titles/Title";

interface MainSectionTypes {
  banner: string;
  sectionNumber: number;
}

const title = {
  styledText: "COWork-Space",
  unStyledText: "იფიქრე გუნდურად",
  paragraph:
    "CoWorkSpace არის ადგილი, რომელიც იქნება რეალური სამუშაო გარემოსთან მაქსიმალურად მიმსგავსებული, სადაც ყველა დელევოპერს შესაძლებლობა ექნება განავითაროს საკუთარი თავი ,როგორც ინდივიდუალურად ისე გუნდურ მუშაობაში. ჩვენთან თქვენ შეიძენთ ...",
};

const MainSection = ({ banner, sectionNumber }: MainSectionTypes) => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        gap: 120,
        flexDirection: sectionNumber === 2 ? "row-reverse" : "row",
        justifyContent: "center",
      }}
    >
      <Title text={title} />
      <Banner banner={banner} />
    </div>
  );
};

export default MainSection;
