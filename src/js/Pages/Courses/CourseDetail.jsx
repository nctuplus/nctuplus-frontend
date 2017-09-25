
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Glyphicon } from 'react-bootstrap'
import { Sidebar, SidebarItem } from '../../Components/Sidebar'
import ShareButton from '../../Components/ShareButton'
import { 
	CourseSection,
	CourseInfo, 
	CourseIntro, 
	CourseTips,
	CourseStatistics,
	CourseForum,
	CoursePastExamTable,
	PastExamUploadSection
} from '../../Components/CourseInfo'
import { Ratings, PersonalRating } from '../../Components/Ratings'

const chart_data = [
	{name: '103下', '胡正光': 50, 'N/A': 0, '洪意凌': 0},
	{name: '104上', '胡正光': 0, 'N/A': 18, '洪意凌': 0},
	{name: '104下', '胡正光': 0, 'N/A': 8, '洪意凌': 0},
	{name: '105上', '胡正光': 0, 'N/A': 0, '洪意凌': 48},
]

const Items = [
	{
		title: '課程資訊',
		active: false
	},
	{
		title: '課程攻略',
		active: true
	},
	{
		title: '歷年統計',
		active: false
	},
	{
		title: '留言板',
		active: false
	},
	{
		title: '教授比一比',
		active: false
	},
	{
		title: '課程(心得)討論區',
		active: false
	},
	{
		title: '考古題',
		active: false
	},
]

class CourseDetail extends React.Component {
	constructor (props){
		super(props)
	}
	render(){
		return (
			<div className="page-wrapper">
				<Sidebar >
					{
						Items.map((value, index) => (
							<SidebarItem 
								active={value.active} 
								key={index} 
							>
								{ value.title }
							</SidebarItem>
						))
					}
				</Sidebar>
				<Col mdOffset={2}>
					<div className="courses-page-content">
						<Row>
							<Col md={10}>
								<h1>電子學（一）－陳龍英</h1>
				        <small>最後同步時間 2017-09-23 09:08</small>
							</Col>
							<Col md={2} className="pull-right" style={{ marginTop: 35 }}>
								<ShareButton />
							</Col>
						</Row>
						
						<hr/>	
						

						<CourseSection>
							<Col md={7} sm={12}>
								<Ratings 
									loading={50}
									easiness={27}
									depth={34}
									loading_people={7}
									easiness_people={8}
									depth_people={9}
								/>
							</Col>
							<Col md={5} sm={12}>
								<PersonalRating />
							</Col>
						</CourseSection>

						<hr/>
						
						<CourseSection title={<span><i className="fa fa-book" />課程資訊</span> }>
							<CourseInfo permanent_id="DEE2320" credit={3} href="123">
								<CourseIntro
									semester = '106上'
									department = '電工系'
									href = 'https://cos.adm.nctu.edu.tw/Course/CrsOutline/show.asp?Acy=106&amp;Sem=1&amp;CrsNo=1029'
									course_id = {1029}
									course_type = '必修'
									current_enroll = {179}
									max_enroll = {200}
									course_time = '1GH4CD'
									classroom ='EC123'
									grade = '2'						
									remark = '電子系及電資學士班優先,地點:合勤講堂'
								/>
							</CourseInfo>
						</CourseSection>

						<hr/>
						
						<CourseSection title={<span><i className="fa fa-cube" />修了這堂課的人，也修了...</span>}>
							<Link to="/courses/36771">微分方程</Link> 
				      <Link to="/courses/38811">當代世界</Link> 
				      <Link to="/courses/20764">電子實驗（一）</Link> 
				      <Link to="/courses/20751">電路學</Link> 
				      <Link to="/courses/36890">導師時間暨電子與生活</Link>
						</CourseSection>
						
						<hr/>
						
						<CourseSection title={<span><i className="fa fa-gamepad" />課程攻略</span>}>
							<CourseTips />
						</CourseSection>

						<hr/>

						<CourseSection title={<span><i className="fa fa-align-left" />歷年統計</span>}>
							<CourseStatistics 
								chart_data={chart_data}
								avg_score = "79.00"
								highest_score = "82.00"
								teacher = "N/A"
							/>	
						</CourseSection>

						<hr/>

						<CourseSection title={<span><i className="fa fa-weixin" />留言板</span>}>
							<div className="well" style={{ backgroundColor: '#BDBDBD' }}>
								<p className="text-center">
									<strong>尚無討論</strong>
								</p>
							</div>
							<Row className="comment-form">
								<Col smOffset={1} sm={2} >
									<select className="form-control">
										<option value="1">推</option>
										<option value="2">→</option>
										<option value="3">噓</option>
									</select>
								</Col>
								<Col sm={6}>
									<input className="form-control" maxLength="32" type="text" value="" />
								</Col>
								<Col sm={1}>
									<Button bsStyle="success" className="form-control comment-submit">確定</Button>
								</Col>
							</Row>
						</CourseSection>

						<hr/>

						<CourseSection>
							<CourseForum>
							</CourseForum>
						</CourseSection>

						<CourseSection title="考古題區">
							<CoursePastExamTable></CoursePastExamTable>
							<PastExamUploadSection></PastExamUploadSection>							
						</CourseSection>

					</div>
				</Col>
			</div>
		)
	}
}

export default CourseDetail