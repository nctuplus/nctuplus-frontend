
import React from 'react'
import FullWidthCover from '../Components/FullWidthCover'

const image = [
	'https://plus.nctu.edu.tw/assets/new-index/bg-login-ffb5ed42d0a4d4b1e40e29c273db0a4e.jpg'
]

class Login extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		{/* workaround:  52 is navbar height*/}
		return (
			<div className="login">
				<FullWidthCover images={image}>
				  <div className="login-area container">
				    <div className="row vertical-center">
				      <div className="col-md-12 col-sm-12 col-xs-12 header-content-inner">
				        <h1 style={{ fontSize: 65}}>NCTU+</h1>
				        <div>
				          <h6>是交大學生嗎？請用單一入口登入享用完整功能。</h6>
				        </div>
				        <div className="form1">
				          <button className="btn-width-e3">
				            交大單一入口登入
									</button>          
								<div style={{ marginTop: 7 }}>or</div>
				          <button className="btn-width-fb">
				            Facebook登入
									</button>
									<button className="btn-width-google">
				            Google登入
									</button>
								</div>	
				      </div>
				    </div>
				  </div>
				</FullWidthCover>
			</div>
		)
	}
}

export default Login

