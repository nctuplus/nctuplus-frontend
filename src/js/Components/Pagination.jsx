
import React from 'react'

class Pagination extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<ul className="pagination" style={{ display:'inline-block' }}>
				﻿<li>
					<a href="/courses"><span className="translation_missing" title="translation missing: zh-TW.views.pagination.first">First</span></a>
				</li>
				<li className="prev">
				  <a href="/courses?page=1547" rel="prev"><span className="translation_missing" title="translation missing: zh-TW.views.pagination.prev">Prev</span></a>
				</li>
				<li className="disabled">
				  <a href="#">...</a>
				</li>
				<li className="">
				  <a href="/courses?page=1546">1546</a>
				</li>
				<li className="">
				  <a href="/courses?page=1547" rel="prev">1547</a>
				</li>
				<li className="active">
				  <a href="#">1548</a>
				</li>			
			</ul>
		)
	}
}

export default Pagination

