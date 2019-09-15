import React, { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, Scatter,
} from 'recharts';

const data = [
  {
    name: '2009', Projected: 800, Actual: 600, cnt: 490,
  },
  {
    name: '2019', Projected: 1200, Actual: 1000, cnt: 590,
  },
  {
    name: '2029', Projected: 1500, Actual: 1800, cnt: 350,
  },
  
];

export default class FutureTrend extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9xopwa9v/';

  render() {
    return (
      <ComposedChart
        width={700}
        height={200}
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="Actual" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="Projected" barSize={20} fill="#413ea0" />
        {/* <Scatter dataKey="cnt" fill="red" /> */}
      </ComposedChart>
    );
  }
}
