import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Courses = (props) => (
  <div>
    <div className='row mx-2 mt-3 mb-0 bg-white'>
      <p className='pt-2 pl-4 pb-3' style={{ color: '#333'}}>
        看不到歷年課程嗎？趕快先去匯入成績吧！
        <Link to='/scores/import'>請點我</Link>
      </p>
    </div>
    <div className='row m-2 mt-3'>
      {
        // props.yearlyStatistics &&
        // props.yearlyStatistics.map((data, index) => (
        //   <CoursesYearlyStatistic {...data} key={index} />
        // ))
      }
      {
        tempCourses &&
         tempCourses.map((data, index) => (
           <CoursesYearlyStatistic {...data} key={index} />
         ))
      }
    </div>
  </div>
)

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
            <tr>
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

const tempCourses =
  [
    {
      'semester': '106下',
      'total_credit': 21,
      'average': 90,
      'courses': [
        {
          'name': '服務學習(二)',
          'code': 'DCP3362',
          'type': '基本必修',
          'score': '未通過',
          'credit': 0
        },
        {
          'name': '經濟社會學',
          'code': 'GEC8174',
          'type': '群己/進階(96 )',
          'score': 90,
          'credit': 2
        },
        {
          'name': '計算機系統',
          'code': 'GEC8174',
          'type': '基本必修',
          'score': 90,
          'credit': 3
        },
        {
          'name': '計算機系統',
          'code': 'GEC8174',
          'type': '基本必修',
          'score': 90,
          'credit': 3
        },
        {
          'name': '計算機系統',
          'code': 'GEC8174',
          'type': '基本必修',
          'score': 90,
          'credit': 3
        },
        {
          'name': '計算機系統',
          'code': 'GEC8174',
          'type': '基本必修',
          'score': 90,
          'credit': 3
        },
        {
          'name': '資料結構與',
          'code': 'GEC8174',
          'type': '基本必修',
          'score': 90,
          'credit': 3
        },
        {
          'name': '計算機系統',
          'code': 'GEC8174',
          'type': '基本必修',
          'score': 90,
          'credit': 3
        }
      ]
    },
    {
      'semester': '106上',
      'total_credit': 20,
      'average': 87.5,
      'courses': [
        {
          'name': '計算機組織',
          'code': 'DCP3362',
          'type': '基本必修',
          'score': 95,
          'credit': 3
        },
        {
          'name': '經濟社會學',
          'code': 'GEC8174',
          'type': '群己/進階(96 )',
          'score': 90,
          'credit': 2
        }
      ]
    },
    {
      'semester': '106上',
      'total_credit': 20,
      'average': 87.5,
      'courses': [
        {
          'name': '計算機組織',
          'code': 'DCP3362',
          'type': '基本必修',
          'score': 95,
          'credit': 3
        },
        {
          'name': '經濟社會學',
          'code': 'GEC8174',
          'type': '群己/進階(96 )',
          'score': 90,
          'credit': 2
        }
      ]
    },
    {
      'semester': '106上',
      'total_credit': 20,
      'average': 87.5,
      'courses': [
        {
          'name': '計算機組織',
          'code': 'DCP3362',
          'type': '基本必修',
          'score': 95,
          'credit': 3
        },
        {
          'name': '經濟社會學',
          'code': 'GEC8174',
          'type': '群己/進階(96 )',
          'score': 90,
          'credit': 2
        }
      ]
    }
  ]

export default Courses
