import React from "react";
import Styles from "./title.module.css";
import JoinUsButton from "../buttons/JoinUsButton";
import InfoButton from "../buttons/InfoButton";
interface TitleTypes {
  text: {
    styledText: string;
    unStyledText: string;
    paragraph: string;
  };
}

const Title = ({ text }: TitleTypes) => {
  return (
    <div className={Styles.textWrapper}>
      <h2 className={Styles.text}>
        {text.styledText}
        <p className={Styles.styledText}>{text.unStyledText}</p>
      </h2>
      <h2></h2>
      <p className={Styles.paragrhap}>{text.paragraph}</p>
      <div className={Styles.buttonWrapper}>
        <JoinUsButton />
        <InfoButton />
      </div>
    </div>
  );
};

export default Title;
