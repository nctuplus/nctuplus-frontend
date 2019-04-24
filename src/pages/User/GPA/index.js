import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getGPA } from 'api/Controllers/user'
import styles from './style.scss'
import Chart from './Chart.js'

const mapStateToProps = (state) => ({
  gpa: state.user.gpa.data,
  status: state.user.gpa.status
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (id) => dispatch(getGPA())
})

class GPA extends React.Component {
  componentWillMount () {
    this.props.fetchData()
  }
  render () {
    return (
      <div className='row m-2 mt-3'>
        <div className={classNames('col pl-0', styles.container)}>
          <h2><i className='fa fa-check-circle' /> GPA計算機</h2>
          <p className='bg-white pt-2 pl-3 pb-3' style={{ color: '#333' }}>
            看不到歷年課程嗎？趕快先去匯入成績吧！<Link to='/scores/import'>匯入成績</Link>
          </p>
          <div className='bg-white'>
            <h3 className='text-center'>歷年成績</h3>
            <Chart />
          </div>
          {
            this.props.status === 2
              ? <PickedBoard picked={this.props.gpa.picked} />
              : <div className={classNames('row mt-2 mx-auto pb-2', styles.picked)} />
          }
          <div className='row mt-4 ' />
        </div>
      </div>
    )
  }
}

class PickedBoard extends React.Component {
  render () {
    const board = this.props.picked.map((picked, index) => (
      <li key={index}>
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

export default connect(mapStateToProps, mapDispatchToProps)(GPA)
