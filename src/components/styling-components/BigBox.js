import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth:"580px",
        minWidth: "385px",
        boxShadow: "7px 8px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        padding: "1em",
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
        marginTop: "1em",
        textAlign: "center",
    },
});

function BigBox(props) {
    const {...rest} = props
    const classes = useStyles();
    return <Box className={classes.root} {...rest}>{props.children}</Box>;
}

export default BigBox;