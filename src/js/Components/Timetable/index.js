
import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import CourseConfig from '../Course/config'
import ReactTooltip from 'react-tooltip'
import './style.scss'

import { connect } from 'react-redux'
import {
  timetableSelectNewCell,
  timetableUnselectCell,
  timetableSetHovering
} from '../../Redux/Actions/Timetable'

import html2canvas from 'html2canvas'

const codes = ['M', 'N', 'A', 'B', 'C', 'D', 'X', 'E', 'F', 'G', 'H', 'Y', 'I', 'J', 'K', 'L']
const codeTimeMap = {
  M: '6:00 ~ 6:50',
  N: '7:00 ~ 7:50',
  A: '8:00 ~ 8:50',
  B: '9:00 ~ 9:50',
  C: '10:10 ~ 11:00',
  D: '11:10 ~ 12:00',
  X: '12:20 ~ 13:10',
  E: '13:20 ~ 14:10',
  F: '14:20 ~ 15:10',
  G: '15:30 ~ 16:20',
  H: '16:30 ~ 17:20',
  Y: '17:30 ~ 18:20',
  I: '18:30 ~ 19:20',
  J: '19:30 ~ 20:20',
  K: '20:30 ~ 21:30',
  L: '21:30 ~ 22:20'
}

// 將課程時間 parse 成比較方便存取的格式
// e.g: 1AB4CD => [[1, 'A'], [1, 'B'], [4, 'C'], [4, 'D']]
function preprocessCourse (course) {
  let current = 0
  let parsedTime = []
  for (let letter of course.course_time) {
    if (letter >= '0' && letter <= '9')current = parseInt(letter)
    else parsedTime.push([current, letter])
  }
  return {
    timeslots: parsedTime,
    info: {
      id: course.id,
      name: course.name,
      classroom: course.classroom,
      type: course.type
    }
  }
}

// 將課程資訊轉換成課表對應 json 格式
function transformTimetableStructure (courses) {
  const week = [1, 2, 3, 4, 5, 6]

  let data = {}
  codes.forEach(code => (data[code] = week.map(value => null)))

  // 如果沒有選任何課回傳空集合
  if (!courses) return data

  courses
    .map(preprocessCourse)
    .forEach(course =>
      course.timeslots.forEach(timeslot => (data[ timeslot[1] ][ timeslot[0] ] = course.info)))

  return data
}

// 以html2canvas截下課表，並以png格式匯出
function exportTimetable () {
  html2canvas(document.getElementById('timetable'), {logging: false}).then(canvas => {
    let dataUrl = canvas.toDataURL('image/png')
    let exportTable = document.createElement('a')
    exportTable.href = dataUrl
    exportTable.download = 'timetable.png'
    exportTable.click()
  })
}

// 將空的row隱藏/顯示[toggle]
function hiddenEmptyRow () {
  document.querySelectorAll('tbody tr').forEach(
    (tr, i) => {
      let empty = true
      if ([1, 2, 12, 13, 14, 15, 16].includes(i)) {
        tr.childNodes.forEach((td, j) => {
          if (td.innerHTML !== '' && j > 0) {
            empty = false
          }
        })
        if (empty) { tr.hidden = !tr.hidden }
      }
    }
  )
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
  }
  return props.course
    ? <td className={`bg-${CourseConfig[props.course.type].color}`} data-tip={props.course.classroom}>
      <Link to={`/courses/${props.course.id}`}>{props.course.name}</Link>
    </td>
    : <td
      onMouseDown={startToggle}
      onMouseOver={() => props.hovering && toggle()}
      onMouseUp={endToggle}
      onDrag={(e) => e.preventDefault()}
      className={classNames(props.selected && 'selected')}
    />
}

const Timetable = (props) => {
  let structure = transformTimetableStructure(props.courses)
  return (
    <div className='card mb-3'>
      <ReactTooltip effect='solid' />
      <div className='card-heading bg-blue text-white p-2'>
        <h4 className='text-center'>
          106上<i className='fa fa-caret-down mx-2' />
        </h4>
      </div>
      <div className='card-body p-0'>
        <div className='btn-group d-flex'>
          <button className='btn btn-lg btn-secondary col' data-tip='刪除課表'>
            <i className='fa fa-trash mr-1' />
          </button>
          <button className='btn btn-lg btn-secondary col' data-tip='清除已選時段'>
            <i className='fa fa-eraser mr-1' />
          </button>
          <button className='btn btn-lg btn-secondary col' data-tip='儲存課表'>
            <i className='fa fa-save mr-1' />
          </button>
          <button className='btn btn-lg btn-secondary col' data-tip='複製課表'>
            <i className='fa fa-copy mr-1' />
          </button>
          <button className='btn btn-lg btn-secondary col' data-tip='分享課表'>
            <i className='fa fa-share mr-1' />
          </button>
          <button className='btn btn-lg btn-secondary col' data-tip='下載/匯出' onClick={exportTimetable}>
            <i className='fa fa-download mr-1' />
          </button>
        </div>
        <table className='table table-bordered timetable mb-0' id='timetable'>
          <tbody>
            <tr>
              <th className='text-center'>
                <i className='fa fa-bars' id='hiddenEmptyRow' onClick={hiddenEmptyRow} data-html2canvas-ignore='true' />
              </th>
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
                  <td className='text-center' data-tip={codeTimeMap[code]}>{ code }</td>
                  {
                    structure[code].map((course, index) => {
                      const key = `${index + 1}${code}`
                      const selected = props.selectable && props.selected_cells[key]
                      return (
                        <TimetableCell
                          key={key}
                          id={key}
                          selected={selected}
                          course={course}
                          {...props.cells}
                        />
                      )
                    })
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  timetable: {
    selected_cells: state.timetable.selected,
    courses: state.timetable.courses
  },
  cells: {
    hovering: state.timetable.hovering
  }
})

const mapDispatchToProps = (dispatch) => ({
  cells: {
    select: (payload) => dispatch(timetableSelectNewCell(payload)),
    unselect: (payload) => dispatch(timetableUnselectCell(payload)),
    setHovering: (payload) => dispatch(timetableSetHovering(payload))
  }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps.timetable,
  cells: {
    ...stateProps.cells,
    ...dispatchProps.cells
  }
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Timetable)
