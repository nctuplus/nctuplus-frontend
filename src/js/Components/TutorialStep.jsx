
import React from 'react'

class TutorialStep extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="step">
				<div className="title-blk col-xs-12">
					<div className="text">{this.props.title}</div>
				</div>
				<div className="content">
					{ this.props.children }
				</div>
			</div>
		)
	}
}

export default TutorialStep

