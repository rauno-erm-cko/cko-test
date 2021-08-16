import React from "react";
import {Box, Grid} from "@material-ui/core";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from "recharts";


function Chart({userFeedback}) {
    let counts = [];
    userFeedback.forEach((el) => {
        if (el.rating === undefined || el.rating === null) {
            el.rating = "missing";
        }
        counts[el.rating] = 1 + (counts[el.rating] || 0);
    });
    const data = Object.entries(counts);
    const obj = Object.fromEntries(data);
    const arrOfRatings = [
        {
            name: "1 star",
            value: 0
        },
        {
            name: "2 star",
            value: 0
        },
        {
            name: "3 star",
            value: 0
        },
        {
            name: "4 star",
            value: 0
        },
        {
            name: "5 star",
            value: 0
        }
    ];

    for (const [key, value] of Object.entries(obj)) {
        let test = key.replace(/\D/g,'')
        arrOfRatings[test - 1] = ({name: `${key} star`, value: value});
    }

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            style={{backgroundColor: "", borderRadius: "50px"}}
        >
            <Grid container spacing={1}>
                <Grid item xs={12}>
            <p>Rating scores</p>
                </Grid>
            <Grid item xs={12}>
            <BarChart  width={400} height={185} data={arrOfRatings} >
                <CartesianGrid stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3"/>
                <Bar dataKey="value" barSize={10} fill="#8884d8"/>
                <XAxis dataKey={"name"}  />
                <YAxis dataKey={"value"} allowDecimals={0}/>
            </BarChart>
            </Grid>
            </Grid>
        </Box>
    );
}

export default Chart;
