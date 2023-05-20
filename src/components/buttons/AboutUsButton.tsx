import React from "react";

const styles = {
  buttons: {
    color: "#123B53",
    fontWeight: 600,
    height: "69px",
    width: "296px",
    borderRadius: "0px",
    padding: "21px 30px 21px 30px",
    backgroundColor: "#919c9f",
    fontSize: "20px",
    border: "none",
  },
};
const StyledButtons = ({
  num,
  setShowFullDetails,
}: {
  num: number;
  setShowFullDetails: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <button style={styles.buttons} onClick={() => setShowFullDetails(num)}>
      დეტალურად
    </button>
  );
};

export default StyledButtons;
