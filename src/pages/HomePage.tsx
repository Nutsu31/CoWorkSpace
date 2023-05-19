import React from "react";
import MainSection from "components/section/MainSection";

import homeBanner from "assets/banner.png";

const HomePage = () => {
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
