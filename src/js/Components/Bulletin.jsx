import React from 'react'

const Bulletin = (props) => (
	<span>
		<span className="inline-block ellipsis title">{props.children}</span>
		<span className="inline-block date">{props.date}</span>
		<br/>
	</span>
)

class BulletinTab extends React.Component {
		constructor(props){
		super(props)
	}
	render(){
		return (
			<button className={this.props.selected ? 'selected' : ''}>{this.props.children}</button>
		)
	}
}

class BulletinBoard extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="bulletin-board">
				<hr />
				<div className="tabs">
					<BulletinTab>網站改版</BulletinTab>
					<BulletinTab>最新消息</BulletinTab>
				</div>
				<div className="bulletins">
					<Bulletin date="2017/06/13" type="最新消息">通識新制上路導致網站向度部分顯示異常，維修中請見諒。</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
					<Bulletin date="2017/03/23" type="網站更新">活動吧改版上線</Bulletin>
				</div>
			</div>
		)
	}
}

export default BulletinBoard