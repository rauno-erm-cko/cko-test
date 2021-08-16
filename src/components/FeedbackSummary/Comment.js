import React from "react";
import {Grid, Box, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
    avatar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        height: "35px",
        width: "35px",
        backgroundColor: "rgba(29,41,99,0.9)",
        color: "white",
        fontSize: "2em",
        padding: "0.75em"
    },
    fullName: {
        fontSize: "1em",
        textAlign: "center",
        padding: "1em"
    },
    name: {
        display: "flex",
        alignItems: "center"
    },
    comment: {
        backgroundColor: "rgba(29,41,99,0.7)",
        borderRadius: "15px",
        padding: "1em",
        wordWrap: "break-word",
        color: "white",
    },
    commentBox: {
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: "15px",
        alignItems: "center",
        boxShadow: "2px 5px rgba(0, 0, 0, 0.1)",
        padding: "0.5em",
        margin: "0.5em"
    }
})

function Comment(props) {
    const classes = useStyles()

    const stars = []
    for (let i = 1; i <= props.rating; i++) {
        stars.push(<StarIcon style={{color: "orange"}} key={i}/>)
    }

    return (
        <div>
            {props.comment &&
            <Box
                id={props.id}
                className={classes.commentBox}
            >
                <Grid container alignItems="center" spacing={5} justifyContent={"space-around"}>
                    <Grid item xs={5} s={5}>
                        <div className={classes.name}>
                            <div className={classes.avatar}>
                                <p>
                                    {props.fullName.split("").splice(0, 1).toString().toUpperCase()}
                                </p>
                            </div>
                            <div className={classes.fullName}>
                                <p>{props.fullName}</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={5}>
                        {stars}
                        <Divider/>
                    </Grid>

                    <Grid item xs={12}>
                        <p className={classes.comment}>
                            {props.comment}
                        </p>
                    </Grid>
                </Grid>
            </Box>}
        </div>
    );
}

export default Comment;
