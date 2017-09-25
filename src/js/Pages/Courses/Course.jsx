
import React from 'react'
import { SearchField } from '../../Components/Search'
import { CoursesTable, CoursesTableRow } from '../../Components/CoursesTable'
import Pagination from '../../Components/Pagination'



class Course extends React.Component {
	constructor (props){
		super(props)
	}
	render(){
		return (
			<div className="page-wrapper course">
				<div className="container">
					<div className="search-wrapper">
						<SearchField advanced={true} >
						</SearchField>
					</div>
					<CoursesTable>
						{
							new Array(25).fill(0).map((value,index) => (
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
					<div className="text-center">
						<Pagination current_page={1548} max={1548}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Course