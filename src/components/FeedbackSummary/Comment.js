import React from "react";
import {Grid, Box} from "@material-ui/core";
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
    }
})

function Comment(props) {
    const classes = useStyles()

    const stars = []
    for(let i = 1; i<= props.rating; i++){
        stars.push(<StarIcon style={{color: "orange"}} key={i}/>)
    }

    return (
        <Box
            id={props.id}
            padding="0.5em"
            margin="0.25em"
            style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                borderRadius: "15px",
                alignItems: "center",
                boxShadow: "1px 2px rgba(0, 0, 0, 0.3)",
            }}
        >
            {/* First letter of full name */}
            <Grid container alignItems="center"  spacing={3}>
                <Grid item xs={3} s={2}>
                    <div className={classes.avatar}>
                        <p>
                            {props.fullName.split("").splice(0, 1).toString().toUpperCase()}
                        </p>
                    </div>
                </Grid>
                <Grid item xs={5}>
              {stars}
                </Grid>
                <Grid item xs={12}>
                    <p
                        style={{
                            backgroundColor: "rgba(29,41,99,0.7)",
                            borderRadius: "15px",
                            boxShadow: "1px 2px rgba(0, 0, 0, 0.1)",
                            padding: "1em",
                            wordWrap: "break-word",
                            color: "white"
                        }}
                    >
                        {props.comment}
                    </p>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Comment;
