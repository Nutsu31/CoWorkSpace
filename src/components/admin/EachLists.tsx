import { DocumentScanner, Home, Person } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EachLists = ({
  option,
  name,
  active,
  setActive,
  buttonNumber,
}: {
  buttonNumber: number;
  active: number;
  option: string;
  name: string;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Link to={`/admin-panel/${option}`}>
      <Button
        onClick={() => setActive(buttonNumber)}
        sx={{
          width: 120,
          height: 60,
        }}
        variant={active === buttonNumber ? "contained" : "outlined"}
      >
        {buttonNumber === 1 ? (
          <Home />
        ) : buttonNumber === 2 ? (
          <Person />
        ) : (
          <DocumentScanner />
        )}
        {name}
      </Button>
    </Link>
  );
};

export default EachLists;
