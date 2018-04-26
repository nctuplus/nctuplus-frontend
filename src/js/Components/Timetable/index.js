
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import CourseConfig from '../Course/config'

import './style.scss'

import { connect } from 'react-redux'
import { 
  timetableSelectNewCell, 
  timetableUnselectCell,
  timetableSetHovering, 
} from '../../Redux/Actions/Timetable'

// 將課程時間 parse 成比較方便存取的格式
// e.g: 1AB4CD => [[1, 'A'], [1, 'B'], [4, 'C'], [4, 'D']]  
function preprocessCourse(course){
  let current = 0
  let parsedTime = []
  for(let letter of course.course_time){
    if('0' <= letter && letter <= '9')current = parseInt(letter)
    else parsedTime.push([current, letter])
  }
  return { 
    timeslots: parsedTime,
    info: {
      id: course.id, 
      name: course.name, 
      classroom: course.classroom, 
      type: course.type,       
    }
  }
}

// 將課程資訊轉換成課表對應 json 格式
function transformTimetableStructure(courses){

  const codes = ['M', 'N', 'A', 'B', 'C', 'D', 'X', 'E', 'F', 'G', 'H', 'Y', 'I', 'J', 'K', 'L']
  const week = [1, 2, 3, 4, 5, 6]
  
  let data  = {}
  codes.forEach(code => (data[code] = week.map(value => null)))
  
  // 如果沒有選任何課回傳空集合
  if(!courses) return data

  courses
    .map(preprocessCourse)
    .forEach(course => 
      course.timeslots.forEach(timeslot => ( data[ timeslot[1] ][ timeslot[0] ] = course.info )))

  return data
}

const TimetableCell = (props) => { 

  const toggle = () => {
    props.selected
      ? props.unselect(props.id)
      : props.select(props.id)
  }
  const startToggle = () => {
    props.setHovering(true)
    toggle()
  }
  const endToggle = () => {
    props.setHovering(false)
    props.toggle()
  }
  return props.course 
    ? <td className={`bg-${CourseConfig[props.course.type].color}`}>
      <Link to={`/courses/${props.course.id}`}>{props.course.name}</Link>
    </td>
    : <td 
      onMouseDown={ startToggle }
      onMouseOver={ () => props.hovering && toggle() }
      onMouseUp={ endToggle }
      className={ classNames(props.selected && 'selected') } 
    />
}

const Timetable = (props) => {
  let structure = transformTimetableStructure(props.courses)

  return (
    <div>
      <div className='btn-group d-flex'> 
        <button className="btn btn-secondary col">
          <i className='fa fa-times mr-1' />刪除
        </button>
        <button className="btn btn-secondary col">
          <i className='fa fa-eraser mr-1' />清除已選
        </button>
        <button className="btn btn-secondary col">
          <i className='fa fa-save mr-1' />儲存
        </button>
        <button className="btn btn-secondary col">
          <i className='fa fa-copy mr-1' />複製
        </button>
        <button className="btn btn-secondary col">
          <i className='fa fa-share mr-1' /> 分享
        </button>
        <button className='btn btn-secondary'>
          <i className='fa fa-download mr-1' />下載
        </button>

      </div>
      <table className='table table-bordered timetable'>
        <tbody>
          <tr>
            <th className='text-center'><i className='fa fa-bars' /></th>
            <th className='text-center'>Mon</th>
            <th className='text-center'>Tue</th>
            <th className='text-center'>Wed</th>
            <th className='text-center'>Thu</th>
            <th className='text-center'>Fri</th>
            <th className='text-center'>Sat</th>
          </tr>
          {
            Object.keys(structure).map(code => (
              <tr key={code} >
                <td className='text-center'>{ code }</td>
                {
                  structure[code].map((course, index) => {
                    const key = `${index+1}${code}`
                    return <TimetableCell 
                        key={ key } 
                        id={ key } 
                        course={ course } 
                        selected={ props.selected_cells[key] }
                        { ...props.cells }
                        hovering={props.hovering}

                      />
                  })
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  selected_cells: state.timetable.selected,
  selectable: state.timetable.selectable,
  courses: state.timetable.courses,  
  hovering: state.timetable.hovering,
})

const mapDispatchToProps = (dispatch, props) => ({
  cells: {
    select: (payload) => dispatch( timetableSelectNewCell(payload) ),
    unselect: (payload) => dispatch( timetableUnselectCell(payload) ),
    setHovering: (payload) => dispatch( timetableSetHovering(payload) )    
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Timetable)
