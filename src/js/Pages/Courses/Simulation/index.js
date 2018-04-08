
import React from 'react'
import { SearchCourse } from '../../../Components/Search'
import { CoursesList, CoursesListItem } from '../../../Components/Course'
import Schedule from '../../../Components/Schedule'
import './style.scss'

const requiredCourses = [
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  },
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  },
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  },
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  },
  {
    id: 36789,
    course_name: '編譯器設計概論',
    teacher: '游逸平',
    category: '資訊學院共同課程',
    requirement: '必修',
    class_time: '3CD5G',
    classroom: 'EDB27',
    grade: 'all',
    current_enroll: 98,
    max_enroll: 99
  }
]
const generalCourses = [
]
const foreignCourses = [
]

class Simulation extends React.Component {
  render () {
    return (
      <div className='page-wrapper simulation'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='alert alert-warning com-cour-error'>
                <span className='bold'>Warning!</span> 因為學校真的很煩, 很抱歉目前識別新制通識的功能正在努力趕工中, 並且106學年度暫時無法搜尋通識的一當代五向度資料, 造成不便, 敬請見諒!
              </div>
            </div>
            <div className='col-6'>
              <div className='panel'>
                <div className='panel-heading bg-blue text-white'>
                  <h4 className='text-center'>
                    <span className='pull-left'>
                      <button className='btn btn-info btn-circle panel-btn' >
                        <i className='fa fa-check' />
                      </button>
                      <button className='btn btn-info btn-circle panel-btn' >
                        <i className='fa fa-star' />
                      </button>
                    </span>
                    課程查詢
                    <span className='pull-right'>
                      <button className='btn btn-info btn-circle panel-btn' >
                        <i className='fa fa-question' />
                      </button>
                    </span>
                  </h4>
                </div>
                <div className='panel-body'>
                  <div className='row courses-list-utils'>
                    <div md={4} className='text-center no-padding'>
                      <div>
                        <button className='d-inline-block'><i className='fa fa-book' /></button>
                        <button className='d-inline-block'><i className='fa fa-calendar' /></button>
                        <button className='d-inline-block'><i className='fa fa-graduation-cap' /></button>
                      </div>
                    </div>
                    <div md={8} className='text-left no-padding'>
                      <SearchCourse />
                    </div>
                  </div>
                  <div className='scrollable'>
                    <CoursesList title='必修' type='required'>
                      {
                        requiredCourses.map((course, index) =>
                          <CoursesListItem key={index} {...course} />
                        )
                      }
                    </CoursesList>
                    <CoursesList title='通識' type='general'>
                      {
                        generalCourses.map((course, index) =>
                          <CoursesListItem key={index} {...course} />
                        )
                      }
                    </CoursesList>
                    <CoursesList title='外語' type='foreign'>
                      {
                        foreignCourses.map((course, index) =>
                          <CoursesListItem key={index} {...course} />
                        )
                      }
                    </CoursesList>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='panel schedule'>
                <div className='panel-heading bg-blue text-white'>
                  <h4 className='text-center'>
                    <button className='btn btn-info btn-circle pull-left header-button'>
                      <i className='glyphicon glyphicon-share' />
                    </button>
                    106上
                    <div className='pull-right header-button pop-over'>
                      <button className='btn btn-info btn-circle dropdown-toggle'>
                        <i className='fa fa-download' />
                      </button>
                      <ul className='dropdown-menu'>
                        <li><a href='/courses/export_timetable.xls?sem_id=22'>Excel</a></li>
                        <li />
                      </ul>
                    </div>
                  </h4>
                </div>
                <Schedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Simulation
