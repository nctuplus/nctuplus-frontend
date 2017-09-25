
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Glyphicon } from 'react-bootstrap'
import { 
	ResponsiveContainer, 
	BarChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Bar
} from 'recharts'
import ShareButton from './ShareButton'

const CourseStatisticBlock = (props) => (
	<Col md={2} className="course-statistic-block text-center">
	  <h1><strong>{props.value}</strong></h1>
	  <span>{ props.children }</span>
	</Col>
)

const CourseStatistics = (props) => (
	<div>
		<div className="chart-wrapper">
			<ResponsiveContainer width="100%" height="100%">
		    <BarChart data={ props.chart_data }>
				  <XAxis dataKey="name" />
				  <YAxis />
				  <CartesianGrid strokeDasharray="3 3" />
				  <Tooltip />
				  <Legend />
				  <Bar dataKey="胡正光" fill="#8884d8" />
				  <Bar dataKey="N/A" fill="#82ca9d" />
				  <Bar dataKey="洪意凌" fill="#AC1234" />
				</BarChart>
		  </ResponsiveContainer>
	  </div>
	  <br/>
	  <div className="chart-wrapper">
			<ResponsiveContainer width="100%" height="100%">
		    <BarChart data={ props.chart_data }>
				  <XAxis dataKey="name" />
				  <YAxis />
				  <CartesianGrid strokeDasharray="3 3" />
				  <Tooltip />
				  <Legend />
				  <Bar dataKey="胡正光" fill="#8884d8" />
				  <Bar dataKey="N/A" fill="#82ca9d" />
				  <Bar dataKey="洪意凌" fill="#AC1234" />
				</BarChart>
		  </ResponsiveContainer>
	  </div>
	  <Row>
	  	<CourseStatisticBlock value={props.avg_score}>本課程平均成績</CourseStatisticBlock>
	  	<CourseStatisticBlock value={props.highest_score}>同類課程最高成績</CourseStatisticBlock>
	  	<CourseStatisticBlock value={props.teacher}>同類課程最高分老師</CourseStatisticBlock>
	  </Row>
	</div>
)
class CourseTips extends React.Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="panel-body">
				<i className="fa fa-cube" /> 作業/考試：<a>編輯</a>	
				<div>
					考試週：（該週可能有考試）    		
					<div className="btn-group">
						{
				    	new Array(18).fill(0).map((value, index) =>
				    		<Button className="no-border" key={index}>{ index + 1 }</Button>
				    	)
						}
					</div>
					<br />
					作業週：（該週可能有作業）  	
					<div className="btn-group">
				    {
				    	new Array(18).fill(0).map((value, index) =>
				    		<Button className="no-border" key={index}>{ index + 1 }</Button>
				    	)
						}
					</div> 
					<br />
					<i className="fa fa-eye" />點名頻率： 
					<span className="label label-success rollcall">不點名</span>	
				</div>
				<hr />
				<i className="fa fa-cube" />其他內容：
				<a className="edit-lists">編輯</a>	
				<Row className="hidden">
					<Col md={4}>
						<select className="form-control">
							<option value="1">[考試]</option>
							<option value="2">[作業]</option>
							<option value="3">[上課]</option>
							<option value="4">[其他]</option>
						</select>
					</Col>
					<Col md={7}>
						<input className="form-control" maxLength="32" type="text" value="" />
					</Col>
					<Col md={1}>
						<Button bsStyle="success" className="btn-circle">
							<i className="fa fa-check" />
						</Button>
					</Col>
				</Row>
				<p className="text-center no-data"><strong>尚無資料</strong></p>
			</div>
		)
	}
}


const CourseIntro = (props) => (
	<tr>
		<td>{props.semester}</td>
		<td>{props.department}</td>
		<td>
			<a href={props.href} target="_blank">{props.course_id}</a>
		</td>
		<td>{props.course_type}</td>
		<td className="text-center">{props.current_enroll}/{props.max_enroll}</td>
		<td>{props.course_time}</td>
		<td>{props.classroom}</td>
		<td>{props.grade}</td>						
		<td>{props.remark}</td>
	</tr>
)

const CourseIntroTable = (props) => (
	<h2 className="panel-title">
		<table className="table">
			<tbody>
				<tr>
					<td>學期</td>
					<td>單位</td>
					<td>課號</td>
					<td>選別</td>
					<td>修課人數/上限</td>
					<td>時間</td>
					<td>教室</td>
					<td>年級</td>					
					<td className="col-md-4">備註</td>
		    </tr>
				{ props.children }
			</tbody>
		</table>
	</h2>	
)

const CourseInfo = (props) => (
	<div>
		<table className="course-table-invisible">
			<tbody>
				<tr>
					<td>永久課號<strong>{props.permanent_id}</strong></td>
					<td>學分<strong>{props.credit}</strong></td>
				</tr>
				<tr>
					<td>
						<a href={props.href} target="_blank">課程綱要</a>
					</td>
					<td>
						查看更多<i className="fa fa-search-plus" />
					</td>
				</tr>
			</tbody>
		</table>
		<CourseIntroTable>{props.children}</CourseIntroTable>
  </div>
)

const CourseComment = (props) => (
	<div className="panel" style={{ borderLeft: '5px solid #5cb85c' }}>
		<Row className="panel-heading">
			<div className="col-md-1">
				<a href="https://www.facebook.com/463545620515814" target="_blank" className="masterTooltip">
					<img alt="Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140" height="50" src="https://graph.facebook.com/463545620515814/picture?type=large&amp;redirect=true&amp;width=140&amp;height=140"  width="50" />
				</a>
			</div>
			<div className="col-md-6">
				<h4>{ props.title }</h4>
				<p>{ props.date }</p>
			</div>
			<div className="col-md-5">
				<div >
					<ShareButton />
				</div>
			</div>
		</Row>

		<hr/>

		<Row className="panel-body">
			<Col md={12}>
				<textcontent>
				{ props.children }
				</textcontent>
			</Col>
		</Row>

		<hr/>

		<Row>
			<Col md={11} mdOffset={1} style={{ borderLeft: '5px solid #5cb85c' }}>
				<Col md={1}>
					<a href="https://www.facebook.com/923934061033151">
						<img 
							src="https://graph.facebook.com/923934061033151/picture?type=large&redirect=true&width=140&height=140"
							alt="Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140" 
							width="45" 
						/>
					</a>
				</Col>
        <Col md={8}>
          <p>2015/11/19 19:42</p>
          <textcontent >hi~</textcontent>
        </Col>
			</Col>
		</Row>

	</div>
)

const CourseForum = (props) => (
	<div className="panel-body">
		<div className="well" style={{ borderLeft: '5px solid #999999' }}>
			<h3 className="inline-block">
				<i className="fa fa-comment-o" />課程心得/討論
			</h3>
			<h4 className="inline-block">
				<Link to='/discuss/new'>我要發文</Link>
			</h4>
		</div>
		<div>
			<CourseComment
				title="社會學"
				date="2016/06/30 23:08"
			>
				老師本人上課很有趣，也很有自己的看法
				考試出題很活，分數不容易拿，上課要認真的才有機會全部都會寫
			</CourseComment>
		</div>
	</div>
)

const CourseSection = (props) => (
	<Row>
		<div className="panel-heading">
			<div className="course-section-title">{ props.title }</div>
			{ props.children }
	  </div>
	</Row>
)

const CoursePastExamTable = (props) => (
	<table className="table well">
		<thead>
			<tr>
				<th className="text-center">下載次數</th>
				<th className="text-center">檔名</th>
				<th className="text-center">年度</th>
				<th className="text-center">檔案說明</th>
				<th className="text-center">大小</th>
				<th className="text-center">提供者</th>
				<th className="text-center">上傳時間</th>
				<th className="text-center">動作</th>
			</tr>
		</thead>
		<tbody className="files" >
			{ props.children ? props.children : <tr className="text-center">尚無檔案!</tr> }
		</tbody>
	</table>
)

const PastExamUploadSection = (props) => (
	<div className="panel panel-default">
	  <div className="panel-heading">
			<h2 className="panel-title">
				上傳檔案
			</h2>
	  </div>
	  <div className="panel-body">
			<h4>請尊重智慧財產權!</h4>
			<p>
				本區只開放上傳考古題及作業，若上傳非相關檔案或未授權檔案後果請自行負責!<br/>
				目前支援的格式有: doc(x)/ppt(x)/pdf/jp(e)g/png/zip/rar<br/>
				每個檔案的大小限制為10MB
			</p>
			<div className="checkbox">
				<label>
					<input type="checkbox" /> 匿名上傳
				</label>
			</div>
			<div>
				<Button bsStyle="success">		  
					<Glyphicon glyph="plus" />
					<span>新增檔案</span>
					<input type="file" className="hidden"/>
				</Button>
				<Button bsStyle="primary" >
					<Glyphicon glyph="arrow-up" />
					<span>開始上傳</span>
				</Button>
				<Button bsStyle="warning" >
					<Glyphicon glyph="remove" />
					<span>取消上傳</span>
				</Button>
			</div>
		</div>
	</div>
)




export { 
	CourseIntroTable, 
	CourseIntro, 
	CourseInfo, 
	CourseTips, 
	CourseStatistics,
	CourseSection,
	CourseForum,
	CoursePastExamTable,
	PastExamUploadSection
}

