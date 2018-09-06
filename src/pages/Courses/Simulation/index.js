
import React from 'react'
import PageWrapper from 'components/PageWrapper'
import { SearchCourse } from 'components/Search'
import { CourseList } from 'components/Course'
import Timetable from 'components/Timetable'

class Simulation extends React.Component {
  render () {
    return (
      <PageWrapper>
        <div className='container pt-3'>
          <div className='row'>
            <div className='col-12'>
              <div className='alert alert-warning'>
                <span className='bold'>Warning!</span> 因為學校真的很煩, 很抱歉目前識別新制通識的功能正在努力趕工中, 並且106學年度暫時無法搜尋通識的一當代五向度資料, 造成不便, 敬請見諒!
              </div>
            </div>
            <div className='col-12 col-lg-6'>
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
                    <div className='text-center no-padding'>
                      <div className='btn-toolbar'>
                        <div className='btn-group'>
                          <button className='btn btn-secondary'><i className='fa fa-book' /></button>
                          <button className='btn btn-secondary'><i className='fa fa-calendar' /></button>
                          <button className='btn btn-secondary'><i className='fa fa-graduation-cap' /></button>
                        </div>
                      </div>

                    </div>
                    <div className='text-left mx-2'>
                      <SearchCourse />
                    </div>
                  </div>
                  <div className='scrollable'>
                    <CourseList type='required' data={[]} />
                    <CourseList type='general' data={[]} />
                    <CourseList type='foreign' data={[]} />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-3 mt-lg-0 col-12 col-lg-6'>
              <Timetable selectable />
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }
}

export default Simulation
