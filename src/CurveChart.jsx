import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import lineData from "./db.json";

export default function CurveChart({ id }) {
  let value = {};
  lineData.curves.map((obj) => {
    if (obj.id === id) {
       value = obj.x.map((data, i) => {
        return { x: data, y:obj.y[i] };
      });
      
      
    }
          
  });
  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={value}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis  dataKey="x"/>
        <YAxis   dataKey="y" />
        <Tooltip />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
        
      </LineChart>
    </div>
  );
}
