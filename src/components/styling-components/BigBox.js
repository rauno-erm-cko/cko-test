import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        maxWidth:"36.25em",
        boxShadow: "7px 8px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: "1.875em",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
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