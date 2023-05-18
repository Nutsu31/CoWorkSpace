import React from "react";
import Styles from "./title.module.css";
import JoinUsButton from "../buttons/JoinUsButton";
import InfoButton from "../buttons/InfoButton";
interface TitleTypes {
  text: {
    styledText: string;
    unStyledText: string;
    paragraph: string;
    paragraph2?: string;
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
      {text.paragraph2 ? <p className={Styles.paragrhap}>{text.paragraph2}</p> : null}
      <div className={Styles.buttonWrapper}>
        <JoinUsButton num={2} />
        <InfoButton />
      </div>
    </div>
  );
};

export default Title;
