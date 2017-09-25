
import React from 'react'
import { Link, } from 'react-router-dom'
import { Col, Row, InputGroup, FormControl, Button } from 'react-bootstrap'

class Search extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<InputGroup style={this.props.style}>
        <FormControl placeholder="課名/老師/時間/向度" type="text" />
        <span className="input-group-btn">
          <button className="btn btn-primary" ><i className="fa fa-search" /></button>        
        </span>
      </InputGroup>
	  )
	}
}

class SearchField extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="search-bar">
				<div className="inline-block">
					<Search style={{ width: 212 }}/>
	      </div>
	      {
	      	this.props.advanced ? (
	      		<div className="inline-block">
				      <div className="hidden-xs checkbox">
				        <label>
				          <input type="checkbox" />進階搜尋
				        </label>
				      </div>
				    </div>
		      ) : ''
	    	}
	    	<div className="hidden">{ this.props.children }</div>
      </div>
		)
	}
}

class SearchPanelNews extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Link to={ this.props.href } className="list-group-item list-group-item-success">							
				{ this.props.children }
			</Link>
		)
	}
}

class SearchPanelNewsFeed extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<h4 className="text-center hidden-xs .search-panel-title">最新動態</h4>
				<Row className="hidden-xs">
					<div className="list-group">
						{ this.props.children }
					</div>
				</Row>
			</div>
		)
	}
}



class SearchPanelCollegeList extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="college-group">
				<h4 className="text-center" style={{ marginTop:-5 }}>分類</h4>
				<Button className="search-panel-college" >共同課程</Button>
				<Button className="search-panel-college" >資訊學院</Button>
				<Button className="search-panel-college" >電機學院</Button>
				<Button className="search-panel-college" >工學院</Button>
				<Button className="search-panel-college" >理學院</Button>
				<Button className="search-panel-college" >光電學院</Button>
				<Button className="search-panel-college" >生科學院</Button>
				<Button className="search-panel-college" >管理學院</Button>
				<Button className="search-panel-college" >人社學院</Button>
				<Button className="search-panel-college" >客家文化學院</Button>
			</div>
		)
	}
}



class SearchPanelButtonGroup extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let new_btn_class= 'btn btn-sm btn-' + this.props.new_btn_type
		let mine_btn_class= 'btn btn-sm btn-' + this.props.mine_btn_type

		return (
			<Row style={{marginTop: 20}}>
				<table className="table table-bordered text-center" >
					<tbody>
					<tr>
						<td>
							<Link className={new_btn_class} to={this.props.new_link}>{ this.props.new_title }</Link>
						</td>
						<td>
							<Link className={mine_btn_class} to={this.props.mine_link}>{ this.props.mine_title }</Link>
						</td>
					</tr>
					</tbody>
				</table>
			</Row>
		)
	}
}


class SearchPanel extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<Col md={3} className="search-panel">
				{ this.props.children } 
			</Col>

		)
	}
}

export { 
	Search, 
	SearchField,
	SearchPanel, 
	SearchPanelCollegeList, 
	SearchPanelNews, 
	SearchPanelNewsFeed, 
	SearchPanelButtonGroup
}

