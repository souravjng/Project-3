import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Devlopment',
    A: 120,
    B: 10,
    fullMark: 150,
  },
  {
    subject: 'Science',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Water',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Enviourment',
    A: 99,
    B: 10,
    fullMark: 150,
  },
  {
    subject: 'Soil',
    A: 85,
    B: 20,
    fullMark: 150,
  },
  {
    subject: 'Fog',
    A: 65,
    B: 15,
    fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/radar-chart-specified-domain-mfl04';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Success" dataKey="A" stroke="#e63946" fill="#e63946" fillOpacity={1} />
          <Radar name="Reject" dataKey="B" stroke="#f1faee" fill="#f1faee" fillOpacity={1} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}