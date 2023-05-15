import React from "react";
import Banner from "./Banner";

interface MainSectionTypes {
  banner: string;
}

const MainSection = ({ banner }: MainSectionTypes) => {
  return (
    <div>
      <Banner banner={banner} />
    </div>
  );
};

export default MainSection;
