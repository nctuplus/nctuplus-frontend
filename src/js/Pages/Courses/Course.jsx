
import React from 'react'
import { SearchCourse } from '../../Components/Search'
import { CoursesTable, CoursesTableRow } from '../../Components/Course'

import { Pagination } from './Components/Pagination'

class Course extends React.Component {
  render () {
    return (
      <div className='course page-wrapper'>
        <div className='container'>
          <div className='search-wrapper'>
            <SearchCourse show_semester={true} />
          </div>
          <CoursesTable>
            {
              new Array(25).fill(0).map((value, index) => (
                <CoursesTableRow
                  id={36861}
                  key={index}
                  semester='106上'
                  department='電工系'
                  name='電子學（一）'
                  teachers='陳龍英'
                  credit='3'
                  course_time='1GH4CD'
                  grade='2'
                />
                )
              )
            }
          </CoursesTable>
          <div className='text-center'>
            <Pagination />
          </div>
        </div>
      </div>
    )
  }
}

export default Course
