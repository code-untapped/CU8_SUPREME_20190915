import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '2009', Projected: 1000, amt: 2400,
  },
  {
    name: '2014', Projected: 1700, amt: 2210,
  },
  {
    name: '2019', Projected: 1750, amt: 2290,
  },
  {
    name: '2024', Projected: 3000, amt: 2000,
  },
  {
    name: '2029', Projected: 4900, amt: 2181,
  },
    
];

export default class FutureTrendLine extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        <Line type="monotone" dataKey="Projected" stroke="#82ca9d" />
      </LineChart>
    );
  }
}