
import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
  Label
} from 'recharts'
import styles from './style.scss';
import testData from './testData';
const StatisticBlock = ({ value, children }) => (
  <div className='col-md-2 text-center bg-white p-3 mx-3 '>
    <h1><strong>{ value }</strong></h1>
    <span>{ children }</span>
  </div>
)

// @todo: connect API
const StatisticCharts = (props) => (
  <div>
    <div className={`chart-wrapper ${styles.chartWrapper}`}>
      <h5>歷年選課人數統計</h5>
      <ResponsiveContainer width='100%' height={350}>
        <BarChart data={props.chart_people}>
          <XAxis dataKey='semester' />
          <YAxis domain={[0,'dataMax - 5']}>
            <Label value="人數" position="insideLeft" angle={-90} />
          </YAxis>
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Bar dataKey='胡正光' fill='#8884d8' />
          <Bar dataKey='N/A' fill='#82ca9d' />
          <Bar dataKey='洪意凌' fill='#AC1234' />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className={`chart-wrapper ${styles.chartWrapper}`}>
      <h5>歷年修課平均分數</h5>
      <ResponsiveContainer width='100%' height={350}>
        <BarChart data={props.chart_avg}>
          <XAxis dataKey='semester' />
          <YAxis domain={[0,100]}>
            <Label value="分" position="insideLeft" angle={-90} />
          </YAxis>
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Bar dataKey='胡正光' fill='#8884d8' />
          <Bar dataKey='N/A' fill='#82ca9d' />
          <Bar dataKey='洪意凌' fill='#AC1234' />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className='row' style={{ paddingLeft: '5%' }}>
      <StatisticBlock value={props.avg_score}>本課程平均成績</StatisticBlock>
      <StatisticBlock value={props.highest_score}>同類課程最高成績</StatisticBlock>
      <StatisticBlock value={props.teacher}>同類課程最高分老師</StatisticBlock>
    </div>
  </div>
)

export default StatisticCharts
