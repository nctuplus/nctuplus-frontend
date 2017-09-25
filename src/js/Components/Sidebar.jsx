
import React from 'react'
import { Col, Row } from 'react-bootstrap'

class SidebarItem extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let className = 'flat-link' + ( this.props.active ? ' active' : '' )
		return (
			<li className="item text-center">
				<a className={className}>{this.props.children}</a>
			</li>
		)
	}
}

class Sidebar extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="sidebar">
				<ul className="nav">
					{ this.props.children }
				</ul>
			</div>
		)
	}
}

export { Sidebar, SidebarItem }

