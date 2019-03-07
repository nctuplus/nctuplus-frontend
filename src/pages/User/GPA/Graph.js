import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Graph.scss'
import Chart from './Chart.js'
class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      picked: [
        {
          id: 0,
          country: '美國',
          school: 'UCLA',
          department: '資工',
          overall: 3.87,
          last60: 4.0
        },
        {
          id: 1,
          country: '台灣',
          school: 'NCTU',
          department: '資工',
          overall: 3.87,
          last60: 3.57
        },
        {
          id: 2,
          country: '中國',
          school: '上海交大',
          department: '資工',
          overall: 3.87,
          last60: 3.33
        }
      ]
    }
  }
  render () {
    return (
      <div className={classNames('col p-4', styles.container)}>
        <h2><i className='fa fa-check-circle' /> GPA計算機</h2>
        <div className={classNames(styles.prompt, 'row pb-3 pl-3 pt-1 mb-4')}>若還未匯入成績，請先到<Link to='/scores/import'>匯入成績</Link></div>
        <h3 className='text-center'>歷年成績</h3>
        <Chart />
        <PickedBoard picked={this.state.picked} />
        <div className='row mt-4 ' />
      </div>
    )
  }
}

export default Graph

class PickedBoard extends React.Component {
  render () {
    const { picked } = this.props
    const board = picked.map((picked) => (
      <li key={picked.id}>
        <Picked
          country={picked.country}
          school={picked.school}
          department={picked.department}
          overall={picked.overall}
          last60={picked.last60}
        />
      </li>
    ))
    return <ul className={styles.board}>{board}</ul>
  }
}

class Picked extends React.Component {
  render () {
    var detail = this.props.country + this.props.school + this.props.department
    return (
      <div className={classNames('row mt-2 mx-auto pb-2', styles.picked)}>
        <div className='col ml-2'>
          <div className='row'>Overall 4.0</div>
          <div className={classNames('row', styles.school)}>{detail}</div>
        </div>
        <div className={classNames(styles.number, 'col-2')}>{this.props.overall.toFixed(2)}</div>
        <div className='col-4 text-center '>Last 60 Credits 4.0</div>
        <div className={classNames(styles.number, 'col text-center')}>{this.props.last60.toFixed(2)}</div>
      </div>
    )
  }
}
