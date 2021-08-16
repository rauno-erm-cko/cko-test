import React from "react";
import FeedbackInputs from "./FeedbackInputs";
import SmallBox from "../styling-components/SmallBox";
import BigBox from "../styling-components/BigBox";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({
    header: {
        fontWeight: "300",
        fontSize: "1em",
        color: "white",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: "1em 0px",
    }
})

function FeedbackForm({addNewFeedback, submitHandler}) {
    const classes = useStyles()
    return (
        <div style={{margin: "1em"}}>
            <SmallBox style={{backgroundColor: "rgba(0,24,90,0.8)"}}>
                <header className={classes.header}>
                    <p style={{fontSize: "2em"}}>We value Your feedback.</p>
                    <p>
                        Please complete the following form and help us improve our customer
                        experience.
                    </p>
                </header>
            </SmallBox>
            <BigBox>
                <FeedbackInputs addNewFeedback={addNewFeedback} submitHandler={submitHandler}/>
            </BigBox>
        </div>

    );
}

export default FeedbackForm;
