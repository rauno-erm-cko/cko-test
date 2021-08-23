import React from "react";
import {Grid} from "@material-ui/core";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from "recharts";


function Chart({userFeedback}) {
    const data = getData()


    function getData() {
        let arr = [];

        for (let rating = 1; rating < 6; rating++) {
            const count = userFeedback.filter(f => f.rating === rating).length || 0;
            arr.push({rating, count});
        }
        return arr;
    }

    return (
            <Grid container spacing={1}>
                <Grid container item sm={5} xs={4} alignItems="center" justifyContent="center">
                    <p>Rating scores</p>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <ResponsiveContainer minWidth={250} minHeight={200}>
                        <BarChart data={data} margin={{top: 20, right: 60, left: 0, bottom: 0}}>>
                            <CartesianGrid stroke="rgba(255,255,255,0.3)" strokeDasharray="3 3"/>
                            <Bar dataKey="count" barSize={15} fill="#8884d8"/>
                            <XAxis dataKey="rating"/>
                            <YAxis dataKey="count" allowDecimals={0}/>
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
    );
}

export default Chart;
