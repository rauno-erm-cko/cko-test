import React from "react";
import { Box } from "@material-ui/core";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from "recharts";

function Chart({ userFeedback }) {
  let counts = [];
  userFeedback.forEach((el) => {
    if (el.rating === undefined || el.rating === null) {
      el.rating = "missing";
    }
    counts[el.rating] = 1 + (counts[el.rating] || 0);
  });
  const data = Object.entries(counts);
  const obj = Object.fromEntries(data);
  const arrOfRatings = [];

  for (const [key, value] of Object.entries(obj)) {
    arrOfRatings.push({ name: key, value: value });
  }

  console.log(arrOfRatings);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      style={{ backgroundColor: "", borderRadius: "50px" }}
    >
      {" "}
      <p>Rating scores</p>
      <BarChart layout="vertical" width={250} height={200} data={arrOfRatings}>
        <CartesianGrid stroke="rgba(255,255,255,0.3)" strokeDasharray="1 1" />
        <Bar dataKey="value" barSize={10} fill="#8884d8" />
        <XAxis type="number"  />
        <YAxis dataKey="name" />
      </BarChart>
    </Box>
  );
}

export default Chart;
