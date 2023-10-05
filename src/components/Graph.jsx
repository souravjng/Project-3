import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const data1 = [{name: 'Monday',Submissions: 2,Rewards:1},{  name: 'Tuesday',  Submissions: 4,  Rewards:4},{  name: 'Wednesday',  Submissions: 12,  Rewards:6},{  name: 'Thursday',  Submissions: 10,  Rewards: 9},{  name: 'Friday',  Submissions: 4,  Rewards: 4},{  name: 'Saturday',  Submissions: 6,  Rewards: 4},{name: 'Sunday',Submissions: 22,Rewards: 9},];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [{  name: 'Gurgaon',  uv: 4000,  pv: 2400,  amt: 2400,},{  name: 'Karnal',  uv: 3000,  pv: 1398,  amt: 2210,},{  name: 'Kurukshetra',  uv: 2000,  pv: 9800,  amt: 2290,},{  name: 'Nuh',  uv: 2780,  pv: 3908,  amt: 2000,},{  name: 'Sonipat',  uv: 1890,  pv: 4800,  amt: 2181,},{  name: 'Panipat',  uv: 2390,  pv: 3800,  amt: 2500,},{  name: 'Ambala',  uv: 3490,  pv: 4300,  amt: 2100,},];


const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
  return (
    <BarChart
      width={550}
      height={650}
      data={data}
      margin={{
        top: 120,
        right: 30,
        left: -10,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}
