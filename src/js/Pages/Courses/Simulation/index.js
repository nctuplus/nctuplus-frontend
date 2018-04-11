
import React from 'react'
import { SearchCourse } from '../../../Components/Search'
import { CoursesList } from '../../../Components/Course'
import Timetable from '../../../Components/Timetable'
import './style.scss'

class Simulation extends React.Component {
  render () {
    return (
      <div className='page-wrapper simulation'>
        <div className='container pt-3'>
          <div className='row'>
            <div className='col-12'>
              <div className='alert alert-warning'>
                <span className='bold'>Warning!</span> 因為學校真的很煩, 很抱歉目前識別新制通識的功能正在努力趕工中, 並且106學年度暫時無法搜尋通識的一當代五向度資料, 造成不便, 敬請見諒!
              </div>
            </div>
            <div className='col-6'>
              <div className='card'>
                <div className='card-heading bg-blue text-white p-2'>
                  <h4 className='text-center'>
                    <span className='pull-left'>
                      <button className='btn btn-info btn-circle m-1' >
                        <i className='fa fa-check' />
                      </button>
                      <button className='btn btn-info btn-circle m-1' >
                        <i className='fa fa-star' />
                      </button>
                    </span>
                    課程查詢
                    <span className='pull-right'>
                      <button className='btn btn-info btn-circle m-1' >
                        <i className='fa fa-question' />
                      </button>
                    </span>
                  </h4>
                </div>
                <div className='card-body'>
                  <div className='row p-3'>
                    <div md={4} className='text-center no-padding'>
                      <div className='btn-toolbar'>
                        <div className='btn-group'>
                          <button className='btn btn-secondary'><i className='fa fa-book' /></button>
                          <button className='btn btn-secondary'><i className='fa fa-calendar' /></button>
                          <button className='btn btn-secondary'><i className='fa fa-graduation-cap' /></button>
                        </div>
                      </div>
                    </div>
                    <div md={8} className='text-left mx-2'>
                      <SearchCourse />
                    </div>
                  </div>
                  <div className='scrollable'>
                    <CoursesList title='必修' type='required' />
                    <CoursesList title='通識' type='general' />
                    <CoursesList title='外語' type='foreign' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='card'>
                <div className='card-heading bg-blue text-white p-2'>
                  <h4 className='text-center'>
                    <button className='btn btn-info btn-circle m-1 pull-left'>
                      <i className='fa fa-share' />
                    </button>
                    106上
                    <div className='pull-right header-button pop-over'>
                      <button className='btn btn-info btn-circle m-1'>
                        <i className='fa fa-download' />
                      </button>
                      <ul className='dropdown-menu'>
                        <li><a href='/courses/export_timetable.xls?sem_id=22'>Excel</a></li>
                        <li />
                      </ul>
                    </div>
                  </h4>
                </div>
                <Timetable />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Simulation
