import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class Chart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        { semester: '一上', grade: 90 },
        { semester: '一下', grade: 82.5 },
        { semester: '二上', grade: 87 },
        { semester: '二下', grade: 83 },
        { semester: '三上', grade: 92.1 },
        { semester: '三下', grade: 'NULL' },
        { semester: '四上', grade: 'NULL' },
        { semester: '四下', grade: 'NULL' }
      ]
    }
  }
  render () {
    return (
      <LineChart width={600} height={300} data={this.state.data} style={{ margin: '0 auto' }}>
        <XAxis dataKey='semester' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' fill='white' />
        <Tooltip />
        <Legend />
        <Line type='monotone' dataKey='grade' stroke='#FD9727' />
      </LineChart>
    )
  }
}

export default Chart
