import React from "react";

interface textType {
  colored: string;
  simpleText: string;
}

const Title = ({
  text,
  paragraph,
}: {
  text: { colored: string; simpleText: string };
  paragraph: string;
}) => {
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        <span style={styles.colored}>{text.colored} </span>
        {text.simpleText}
      </p>
      <p style={styles.paragraph}>{paragraph}</p>
    </div>
  );
};

export default Title;

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

type CSSProperties = {
  container: {
    width: string;
    height: string;
    display: string;
    alignItems: string;
    justifyContent: string;
    flexDirection?: FlexDirection | undefined;
    gap: number;
  };
  text: {
    color: string;
    fontStyle: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
  };
  colored: {
    color: string;
  };
  paragraph: {
    color: string;
    fontStyle: string;
    fontWeight: number;
    fontSize: string;
    lineHeight: string;
    fontFamily: string;
  };
};

const styles: CSSProperties = {
  container: {
    width: "700px",
    height: "640px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 16,
  },
  text: {
    color: "white",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "56px",
    lineHeight: "140%",
  },
  colored: {
    color: "#A9DEEE",
  },
  paragraph: {
    color: "rgba(250, 250, 250, 0.8)",
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "190%",
  },
};
