import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: "580px",
        height: "215px",
        boxShadow: "7px 8px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px",
        border: " 1px solid rgba(255, 255, 255, 0.5)",
        padding: "1em",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        color: "black",
        backgroundColor: "rgba(255,255,255,0.7)",
    },

});

function SmallBox(props) {
    const {...rest} = props
    const classes = useStyles();
    return <Box className={classes.root} {...rest}  >
        {props.children}
    </Box>;
}

export default SmallBox;