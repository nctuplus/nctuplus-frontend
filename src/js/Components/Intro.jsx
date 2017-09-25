
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { withRouter} from 'react-router-dom'

class _Intro extends React.Component {
	constructor (props){
		super(props)
	}
	render(){
		return (
			<div className="intro block text-center">
				<h2>{this.props.title}</h2>
				{ this.props.children }
			</div>
		)
	}
}

class _IntroItem extends React.Component {
	constructor (props){
		super(props)
		this.redirect = this.redirect.bind(this)
	}
	redirect(e){
		e.preventDefault()
		this.props.history.push(this.props.to)
	}
	render(){
		return (
			<div className="item inline-block clickable" onClick={this.redirect}>
				<img src={this.props.image} />
				<h3>{this.props.title}</h3>
				{ this.props.is_new ? <h5>NCTU+新功能!</h5> : '' }
				<p>{ this.props.children }</p>
			</div>
		)
	}
}

const Intro = withRouter(_Intro)
const IntroItem = withRouter(_IntroItem)


export {Intro, IntroItem}