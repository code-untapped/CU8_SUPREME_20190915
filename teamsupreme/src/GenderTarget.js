import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,Tooltip
  } from 'recharts';

const data01 = [
  { name: 'Men', value: 60 },
   { name: 'Women', value: 40 },
];
const data02 = [
    { name: 'Men', value: 55 },
    { name: 'Women', value: 45 },
];

export default class GenderTarget extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

  render() {
    return (
        <div><label>Gender</label>
      <PieChart width={400} height={400}>
        <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
        <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        <Tooltip></Tooltip>
      </PieChart>
      </div>
    );
  }
}
