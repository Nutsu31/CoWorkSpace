import React from "react";
import Styles from "./banner.module.css";

interface BannerTypes {
  banner: string;
}
const Banner = ({ banner }: BannerTypes) => {
  return (
    <div className={Styles.bannerOuterWrapper}>
      <div className={Styles.bannerInnerBox}>
        <img className={Styles.image} src={banner} key="main banner" />
      </div>
    </div>
  );
};

export default Banner;
