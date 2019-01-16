import React from 'react'
import Layout from 'pages/Layout'
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts'
import * as data from './fakeData';

const ChartContainer = (props)=>(
  <div style={{
    textAlign:'center',
    marginBottom:100,
  }}>
    <h3>{props.name}</h3>
    {props.children}
  </div>
);

class Statistics extends React.Component {

  render () {
    return (
      <Layout>
        <div className='container pt-4 py-5'>
          <ChartContainer name='使用者來源統計'>
            <ResponsiveContainer width='100%' height={300} >
              <BarChart data={data.userFrom}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis>
                  <Label  value='人數' position="insideLeft" angle={ -90}/>
                </YAxis>
                <Tooltip/>
                <Legend />
                <Bar dataKey='value' name="人數" fill="#7cb5ec" unit='人'/>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <ChartContainer name='使用者註冊統計'>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={data.userRegistered}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis>
                  <Label  value='人數' position="insideLeft" angle={ -90}/>
                </YAxis>
                <Tooltip/>
                <Legend />
                <Bar dataKey='value' name="人數" fill="#7cb5ec" unit='人'/>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <ChartContainer name='二手書統計'>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={data.bookMarket}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis>
                  <Label  value='數量(本)' position="insideLeft" angle={ -90}/>
                </YAxis>
                <Tooltip/>
                <Legend />
                <Bar dataKey="new" name='新增' fill="#7cb5ec" unit='本'/>
                <Bar dataKey="sold" name='售出' fill="#424247" unit='本'/>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <ChartContainer name='文章數統計'>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart data={data.postCount}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis>
                  <Label  value='數量(篇)' position="insideLeft" angle={ -90}/>
                </YAxis>
                <Tooltip/>
                <Legend />
                <Bar dataKey="value" name='數量' fill="#7cb5ec" unit='篇'/>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </Layout>
    )
  }
}

export default Statistics
