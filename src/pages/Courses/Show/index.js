
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import scrollToComponent from 'react-scroll-to-component'
import Layout from 'pages/Layout'
import { Sidebar, SidebarItem } from 'components/Sidebar'
import { Ratings } from 'components/Ratings'
import * as Courses from 'components/Course'
import * as Comments from 'components/Comment'
import * as PastExams from 'components/PastExam'
import Spinner from 'components/Spinner'
import { getCourse, getCourseComments, getCoursePastExams } from 'api/Controllers/courses'
import { FETCHING_STATUS } from 'utilities/constants'
import styles from './style.scss'
// import { testData } from './testData'

const Section = (props) => (
  <div className='py-4' ref={props.domref}>
    { props.title && <h4 className='my-4'>{ props.title }</h4> }
    <div>{ props.children }</div>
  </div>
)

class Show extends React.Component {
  constructor (props) {
    super(props)
    this.state = { anchor: 1 }
    this.anchors = Array(7).fill(0).map(React.createRef)
    this.scrollTo = this.scrollTo.bind(this)
  }

  componentDidMount () {
    const id = this.props.match.params.id
    this.props.getCourse(id)
    this.props.getComments(id)
    this.props.getPastExams(id)
  }

  scrollTo (index) {
    return () => {
      scrollToComponent(this.anchors[index].current, { align: 'top', offset: -20, duration: 500 })
      this.setState({ anchor: index })
    }
  }

  render () {
    const { course, status, comments, pastExams } = this.props

    return (
      <Layout>
        <Sidebar >
          <SidebarItem active={this.state.anchor === 1} onClick={this.scrollTo(1)}>
            課程資訊
          </SidebarItem>
          {/* <SidebarItem active={this.state.anchor === 2} onClick={this.scrollTo(2)}>
            課程攻略
          </SidebarItem> */}
          <SidebarItem active={this.state.anchor === 3} onClick={this.scrollTo(3)}>
            歷年統計
          </SidebarItem>
          <SidebarItem active={this.state.anchor === 4} onClick={this.scrollTo(4)}>
            留言板
          </SidebarItem>
          <SidebarItem active={this.state.anchor === 5} onClick={this.scrollTo(5)}>
            課程(心得)討論區
          </SidebarItem>
          <SidebarItem active={this.state.anchor === 6} onClick={this.scrollTo(6)}>
            考古題
          </SidebarItem>
        </Sidebar>

        <div className='container'>
          <div className='offset-md-2 py-4'>
            {
              status !== FETCHING_STATUS.DONE
                ? <div className='text-center pt-3'><Spinner size={64} color='grey' /></div>
                : <div>
                  <div className='row'>
                    <div className='col-md-10'>
                      <h1>{ this.props.course.permanent_course.name }</h1>
                      <small className=''>最後同步時間 { course.updated_at && course.updated_at.substr(0, 10) }</small>
                    </div>
                    <div className='col-md-2 d-flex mt-md-0 mt-2 justify-content-md-end align-item-end'>
                      <button className={`btn btn-info ${styles.btnLike}`} >
                        <i className='fa fa-star' /><span className='ml-1'>收藏課程</span>
                      </button>
                    </div>
                  </div>

                  <hr />

                  <Section
                    domref={this.anchors[0]}
                    title={<span><i className='fas fa-star mx-2' />課程評分</span>}
                  >
                    <div className='row'>
                      <div className='col'>
                        <Ratings rating={course.rating} />
                      </div>
                    </div>
                  </Section>

                  <hr />

                  <Section
                    domref={this.anchors[1]}
                    title={<span><i className='fa fa-book mx-2' />課程資訊</span>}
                  >
                    <Courses.Info {...this.props.course} />
                  </Section>

                  <hr />

                  {/*
                  <Section
                    domref={this.anchors[2]}
                    title={<span><i className='fa fa-gamepad mx-2' />課程攻略</span>}
                  >
                    <Course.Tips />
                  </Section>

                  <hr /> */}

                  <Section
                    domref={this.anchors[3]}
                    title={<span><i className='fa fa-align-left mx-2' />歷年統計</span>}
                  >
                    <Courses.StatisticCharts {...course.chart_data} />
                  </Section>

                  <hr />

                  <Section
                    domref={this.anchors[4]}
                    title={<span><i className='fa fa-weixin mx-2' />留言板</span>}
                  >
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
                      <div className='input-group-append'>
                        <button className='btn btn-outline-success' type='button'>確定</button>
                      </div>
                    </div>
                  </Section>

                  <hr />

                  <Section
                    domref={this.anchors[5]}
                    title={
                      <span>
                        <i className='fa fa-comment-o mx-2' />課程心得
                        <h5 className='d-inline-block mx-2'>
                          <Link className='text-blue' to='/comments/new'>我要發文</Link>
                        </h5>
                      </span>
                    }
                  >
                    <Comments.Table {...comments} fromCoursePage />
                  </Section>

                  <Section
                    domref={this.anchors[6]}
                    title={
                      <span>
                        <i className='fas fa-paste mx-2' />考古題區
                        <h5 className='d-inline-block mx-2'>
                          <Link className='text-blue' to='/past_exams/new'>我要上傳</Link>
                        </h5>
                      </span>
                    }
                  >
                    <PastExams.Table {...pastExams} fromCoursePage />
                  </Section>
                </div>
            }
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  course: state.courses.show.data,
  status: state.courses.show.status,
  comments: state.courses.comments,
  pastExams: state.courses.pastExams
})

const mapDispatchToProps = (dispatch) => ({
  getCourse: (id) => dispatch(getCourse(id)),
  getComments: (id) => dispatch(getCourseComments(id)),
  getPastExams: (id) => dispatch(getCoursePastExams(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Show)
