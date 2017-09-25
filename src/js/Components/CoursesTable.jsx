
import React from 'react'
import { withRouter } from 'react-router-dom'

const _CoursesTableRow = (props) => {
	let href = '/courses/'+ String(props.id) 
	return (
	  <tr 
	  	id={props.id} 
	  	className="clickable" 
	  	onClick={ (e) => props.history.push(href) }
	  >
      <td className="hidden-xs">{props.semester}</td>
      <td className="hidden-xs">{props.department}</td>
      <td>{props.name}</td>
      <td>{props.teachers}</td>
      <td>{props.credit}</td>
      <td>{props.course_time}</td>
      <td>{props.grade}</td>
      <td className="hidden-xs">
      	<span>
        	<i className="fa fa-check-square-o fa-2x" />
        </span>
      </td>
    </tr>
  )
}


const CoursesTable = (props) => (
	<table className="table table-hover bg-white">
		<thead>
			<tr>
		    <th className="hidden-xs">學期</th>
		    <th className="hidden-xs">系所/摘要</th>
		    <th>課名</th>
		    <th>老師</th>
		    <th>學分</th>
		    <th>時間</th>
		    <th>年級</th>
		    <th className="hidden-xs">收藏</th>
	    </tr>
	  </thead>
	  <tbody>
			{props.children}
		</tbody>
	</table>
)

const CoursesTableRow = withRouter(_CoursesTableRow)

export { CoursesTable, CoursesTableRow }

