import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Linegraph = () => {
  const pdata = [
    { name: 'Monday', Submissions: 2, Rewards: 1 },
    { name: 'Tuesday', Submissions: 4, Rewards: 4 },
    { name: 'Wednesday', Submissions: 12, Rewards: 6 },
    { name: 'Thursday', Submissions: 10, Rewards: 9 },
    { name: 'Friday', Submissions: 4, Rewards: 4 },
    { name: 'Saturday', Submissions: 6, Rewards: 4 },
    { name: 'Sunday', Submissions: 22, Rewards: 9 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={pdata} margin={{ top: 30, right: 30, left: -30, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '4px' }} />
          <Legend />
          <Line type="monotone" dataKey="Rewards" stroke="#1e88e5" activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="Submissions" stroke="red" activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linegraph;
