import React from "react";
import Comment from "./Comment";
import Chart from "./Chart";
import SmallBox from "../styling-components/SmallBox";
import BigBox from "../styling-components/BigBox";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles({
    icon: {
        fontSize: 50,
        textAlign: "center"
    },
    header: {
        fontWeight: "300",
        fontSize: "1em",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }
});

function FeedbackSummary({userFeedback, submitted}) {
    const classes = useStyles()

    return (
        <div style={{margin: "1em"}}>
            {submitted && <SmallBox style={{marginBottom: "1em", backgroundColor: "rgba(0,24,90,0.8)"}}>
                <p className={classes.header} style={{fontSize: "2em"}}>Thank You for feedback!</p>
            </SmallBox>}


            <SmallBox>
                <Chart userFeedback={userFeedback}/>
            </SmallBox>

            <BigBox>
                {userFeedback.map((fb) => (
                    <Comment {...fb} key={Math.random()}/>
                ))}
            </BigBox>
        </div>
    )
}

export default FeedbackSummary;
