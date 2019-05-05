
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
import randomColor from 'randomcolor'
import { convertSemesterToString } from 'utilities'
import styles from './style.scss'

const StatisticBlock = ({ value, children }) => (
  <div className='text-center bg-white p-3'>
    <h1><strong>{ value }</strong></h1>
    <span>{ children }</span>
  </div>
)

// @todo: connect API
const StatisticCharts = (props) => {
  const color = randomColor({
    count: Object.keys(props.chart_people[0]).length,
    seed: 'NCTU+ is Gooood',
    luminosity: 'bright'
  })

  // 存每個學期的開課老師
  let chartTeachers = new Set()

  let chartPeople = props.chart_people.map((data, index) => {
    Object.keys(data).forEach((key, index) => {
      if (key !== 'semester') chartTeachers.add(key)
    })
    return { ...data, semester: convertSemesterToString(data.semester) }
  })

  let chartAvg = props.chart_avg.map((data, index) => (
    { ...data, semester: convertSemesterToString(data.semester) }
  ))

  return (
    <div>
      <div className={`chart-wrapper ${styles.chartWrapper}`}>
        <h5>歷年選課人數統計</h5>
        <ResponsiveContainer width='100%' height={350}>
          <BarChart data={chartPeople}>
            <XAxis dataKey='semester' />
            <YAxis domain={[0, 'dataMax + 5']}>
              <Label value='人數' position='insideLeft' angle={-90} />
            </YAxis>
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            {
              Array.from(chartTeachers).map((teacher, index) => (
                <Bar key={index} dataKey={teacher} fill={color[index]} />
              ))
            }
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={`chart-wrapper ${styles.chartWrapper}`}>
        <h5>歷年修課平均分數</h5>
        <ResponsiveContainer width='100%' height={350}>
          <BarChart data={chartAvg}>
            <XAxis dataKey='semester' />
            <YAxis domain={[0, 100]}>
              <Label value='分' position='insideLeft' angle={-90} />
            </YAxis>
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            {
              Array.from(chartTeachers).map((teacher, index) => (
                <Bar key={index} dataKey={teacher} fill={color[index]} />
              ))
            }
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.staticBlockWrapper}>
        <StatisticBlock value={props.avg_score.toFixed(2)}>本課程平均成績</StatisticBlock>
        <StatisticBlock value={props.highest_avg_score.toFixed(2)}>同類課程最高成績</StatisticBlock>
        <StatisticBlock value={props.highest_avg_teacher}>同類課程最高分老師</StatisticBlock>
      </div>
    </div>
  )
}

export default StatisticCharts
