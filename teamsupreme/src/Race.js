import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Sector, Cell,Tooltip
} from 'recharts';

const data01 = [
  { name: 'White/White British', value: 75 },
   { name: 'Asian/Asian British', value: 20 },
  { name: 'Age 45 - 55', value: 50 }, 
  { name: 'Over 55', value: 20 },
];
const data02 = [
    { name: 'Age 20 - 30', value: 40 },
    { name: 'Age 30 - 45', value: 30 },
   { name: 'Age 45 - 55', value: 20 }, 
   { name: 'Over 55', value: 10 },
];

export default class Race extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/w6wsrc52/';

  render() {
    return (
       <div><label>Age</label>
      <PieChart width={400} height={400}>
        <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
        <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        <Tooltip></Tooltip>
      </PieChart>
      </div> 
    );
  }
}