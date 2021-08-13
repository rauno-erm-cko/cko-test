import React from "react";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "35em",
    height: "45em",
    boxShadow: "7px 8px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "70px",
    border: " 1px solid rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

function Wrapper(props) {
  const classes = useStyles();
  return <Card className={classes.root}>{props.children}</Card>;
}

export default Wrapper;
