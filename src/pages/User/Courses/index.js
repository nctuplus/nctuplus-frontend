import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { getPastCos } from 'api/Controllers/user'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  pastCos: state.user.past_course.data,
  pastCos_status: state.user.past_course.status
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getPastCos())
})

class Courses extends React.Component {
  componentWillMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <div>
        <div className='row mx-2 mt-3 mb-0 bg-white'>
          <p className='pt-2 pl-4 pb-1' style={{ color: '#333' }}>
            看不到歷年課程嗎？趕快先去匯入成績吧！
            <Link to='/scores/import'>請點我</Link>
          </p>
        </div>
        {
          this.props.pastCos_status === 2
            ? <div className='row m-2 mt-3'>
              {
                this.props.pastCos &&
                this.props.pastCos.map((data, index) => (
                  <CoursesYearlyStatistic {...data} key={index} />
                ))
              }
            </div>
            : <div className='row m-2 mt-3' />
        }
      </div>
    )
  }
}

const CoursesYearlyStatistic = (props) => (
  <div className='col-6 bg-white'>
    <table className={classNames('mt-5 table table-bordered border-thick-gray')}>
      <thead>
        <tr>
          <td className='text-center'>{ props.semester }</td>
          <td className='w-12' />
          <td className='text-center'><i className='fa fa-graduation-cap' /></td>
          <td className='text-center'><i className='fa fa-flag-checkered' /></td>
        </tr>
      </thead>
      <tbody>
        {
          props.courses.map((course, index) => (
            <tr key={index}>
              <td >{course.name} | {course.type}</td>
              <td >
                <button className='btn btn-sm btn-warning mr-1 ' type='button'>
                  <Link className='flat-link text-white' to='/user/courses'>
                    評論
                  </Link>
                </button>
                <button className='btn btn-sm btn-primary' type='button'>
                  <Link className='flat-link text-white' to='/user/courses'>
                    上傳考古
                  </Link>
                </button>
              </td>
              <td className='text-center'>{ course.credit}</td>
              <td className='text-center bold'>{course.score === '未通過' ? <span style={{ color: '#FF0000' }}>未通過</span> : course.score === 'W' ? <span style={{ color: '#FF0000' }}>W</span> : course.score}</td>
            </tr>
          ))
        }
        <tr className='info' style={{ backgroundColor: '#99BBFF' }}>
          <td colSpan='2' className='text-right text-black'>總計</td>
          <td className='text-center'>
            {
              /* all credit */
              props.total_credit
              /* props.courses.reduce((accum, course) => accum + course.credit) */
            }
          </td>
          <td className='text-center bold'>
            {
              /* average score */
              props.average
              /* props.courses.reduce((accum, course) => accum + course.score) / props.course.length */
            }
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Courses)
