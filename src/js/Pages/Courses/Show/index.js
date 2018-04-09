
import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, SidebarItem } from '../../../Components/Sidebar'
import ShareButton from '../../../Components/ShareButton'
import {
  CourseInfo,
  CourseTips,
  CourseStatistics,
  CourseForum
} from '../../../Components/Course'
import { Ratings, PersonalRating } from '../../../Components/Ratings'
import { Comment, SubComment } from '../../../Components/Comment'
import { PastExamTable, PastExamUpload } from '../../../Components/PastExamUpload'
import './style.scss'

const chartData = [
  {name: '103下', '胡正光': 50, 'N/A': 0, '洪意凌': 0},
  {name: '104上', '胡正光': 0, 'N/A': 18, '洪意凌': 0},
  {name: '104下', '胡正光': 0, 'N/A': 8, '洪意凌': 0},
  {name: '105上', '胡正光': 0, 'N/A': 0, '洪意凌': 48}
]

const Section = (props) => (
  <div className='py-4'>
    { props.title && <h4 className='my-4'>{ props.title }</h4> }
    <div>{ props.children }</div>
  </div>
)

class Show extends React.Component {
  render () {
    return (
      <div className='page-wrapper course-detail'>
        <Sidebar >
          <SidebarItem active>課程資訊</SidebarItem>
          <SidebarItem active={false}>課程攻略</SidebarItem>
          <SidebarItem active={false}>歷年統計</SidebarItem>
          <SidebarItem active={false}>留言板</SidebarItem>
          <SidebarItem active={false}>課程資訊</SidebarItem>
          <SidebarItem active={false}>教授比一比</SidebarItem>
          <SidebarItem active={false}>考古題</SidebarItem>
        </Sidebar>
        <div className='container'>
          <div className='offset-2 py-4'>
            <div className='row'>
              <div className='col-md-10'>
                <h1>電子學（一）－陳龍英</h1>
                <small>最後同步時間 2017-09-23 09:08</small>
              </div>
              <div className='col-md-2 pull-right mt-5'>
                <ShareButton />
              </div>
            </div>

            <hr />

            <Section>
              <div className='row'>
                <div className='col-12 col-md-7'>
                  <Ratings
                    loading={50}
                    easiness={27}
                    depth={34}
                    loading_people={7}
                    easiness_people={8}
                    depth_people={9}
                  />
                </div>
                <div className='col-12 col-md-5'>
                  <PersonalRating />
                </div>
              </div>
            </Section>

            <hr />

            <Section title={<span><i className='fa fa-book mx-2' />課程資訊</span>}>
              <CourseInfo 
                permanent_id='DEE2320' 
                credit={3} 
                id='123'
                semester='106上'
                department='電工系'
                href='https://cos.adm.nctu.edu.tw/Course/CrsOutline/show.asp?Acy=106&amp;Sem=1&amp;CrsNo=1029'
                course_id={1029}
                course_type='必修'
                current_enroll={179}
                max_enroll={200}
                course_time='1GH4CD'
                classroom='EC123'
                grade='2'
                remark='電子系及電資學士班優先,地點:合勤講堂'
              />
            </Section>

            <hr />

            <Section title={<span><i className='fa fa-cube mx-2' />修了這堂課的人，也修了...</span>}>
              <span className='mx-2'><Link to='/courses/36771'>微分方程</Link></span>
              <span className='mx-2'><Link to='/courses/38811'>當代世界</Link></span>
              <span className='mx-2'><Link to='/courses/20764'>電子實驗（一）</Link></span>
              <span className='mx-2'><Link to='/courses/20751'>電路學</Link></span>
              <span className='mx-2'><Link to='/courses/36890'>導師時間暨電子與生活</Link></span>
            </Section>

            <hr />

            <Section title={<span><i className='fa fa-gamepad mx-2' />課程攻略</span>}>
              <CourseTips />
            </Section>

            <hr />

            <Section title={<span><i className='fa fa-align-left mx-2' />歷年統計</span>}>
              <CourseStatistics
                chart_data={chartData}
                avg_score='79.00'
                highest_score='82.00'
                teacher='N/A'
              />
            </Section>

            <hr />

            <Section title={<span><i className='fa fa-weixin mx-2' />留言板</span>}>
              <div className='well bg-grey p-4'>
                <p className='text-center'>
                  <strong>尚無討論</strong>
                </p>
              </div>
              <div className='input-group'>
                <div>
                  <select className='form-control'>
                    <option value='1'>推</option>
                    <option value='2'>→</option>
                    <option value='3'>噓</option>
                  </select>
                </div>
                <input className='form-control' maxLength='32' type='text' />
                <div className="input-group-append">
                  <button className="btn btn-outline-success" type="button">確定</button>
                </div>
              </div>
            </Section>

            <hr />

            <Section>
              <CourseForum>
                <Comment
                  title='社會學'
                  date='2016/06/30 23:08'
                  user_link='https://www.facebook.com/463545620515814'
                  user_image='https://graph.facebook.com/463545620515814/picture?type=large&amp;redirect=true&amp;width=140&amp;height=140'
                  decorate
                  reply={
                    new Array(3).fill(0).map((v, idx) =>
                      <SubComment
                        date='2015/11/19 19:42'
                        user_link='https://www.facebook.com/923934061033151'
                        user_image='https://graph.facebook.com/923934061033151/picture?type=large&redirect=true&width=140&height=140'
                        decorate
                        key={idx}
                      >
                        hi~
                      </SubComment>
                    )
                  }
                >
                  {'老師本人上課很有趣，也很有自己的看法\n考試出題很活，分數不容易拿，上課要認真的才有機會全部都會寫'}
                </Comment>
              </CourseForum>
            </Section>

            <Section title='考古題區'>
              <PastExamTable />
              <PastExamUpload />
            </Section>
          </div>
        </div>
      </div>
    )
  }
}

export default Show
