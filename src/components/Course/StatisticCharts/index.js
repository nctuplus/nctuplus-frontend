
import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar
} from 'recharts'

const StatisticBlock = ({ value, children }) => (
  <div className='col-md-2 text-center bg-white p-3 m-3 '>
    <h1><strong>{ value }</strong></h1>
    <span>{ children }</span>
  </div>
)

// @todo: connect API
const StatisticCharts = (props) => (
  <div>
    <div className='chart-wrapper'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={props.chart_data}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Bar dataKey='胡正光' fill='#8884d8' />
          <Bar dataKey='N/A' fill='#82ca9d' />
          <Bar dataKey='洪意凌' fill='#AC1234' />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <br />
    <div className='chart-wrapper'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart data={props.chart_data}>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Bar dataKey='胡正光' fill='#8884d8' />
          <Bar dataKey='N/A' fill='#82ca9d' />
          <Bar dataKey='洪意凌' fill='#AC1234' />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className='row' style={{paddingLeft:'5%'}}>
      <StatisticBlock value={props.avg_score}>本課程平均成績</StatisticBlock>
      <StatisticBlock value={props.highest_score}>同類課程最高成績</StatisticBlock>
      <StatisticBlock value={props.teacher}>同類課程最高分老師</StatisticBlock>
    </div>
  </div>
)

export default StatisticCharts
