
import React from 'react'
import PageWrapper from '../../../Components/PageWrapper'
import { Sidebar, SidebarItem } from '../../../Components/Sidebar'
import ShareButton from '../../../Components/ShareButton'
import {
  CourseInfo,
  CourseTips,
  CourseStatistics,
  CourseForum
} from '../../../Components/Course'
import { Ratings, PersonalRating } from '../../../Components/Ratings'
import { PastExamUploadTable, PastExamUpload } from '../../../Components/PastExamUpload'
import Spinner from '../../../Components/Spinner'
import './style.scss'

import scrollToComponent from 'react-scroll-to-component'
import { connect } from 'react-redux'
import courseActions from '../../../Redux/Actions/Courses'

const Section = (props) => (
  <div className='py-4' ref={props.domref}>
    { props.title && <h4 className='my-4'>{ props.title }</h4> }
    <div>{ props.children }</div>
  </div>
)

class Show extends React.Component {
  constructor (props) {
    super(props)

    this.ratings = this.props.ratings || {}
    // workaround
    this.chartData = this.props.chartData || [
      { name: '103下', '胡正光': 50, 'N/A': 20, '洪意凌': 10 },
      { name: '104上', '胡正光': 0, 'N/A': 18, '洪意凌': 0 },
      { name: '104下', '胡正光': 30, 'N/A': 8, '洪意凌': 4 },
      { name: '105上', '胡正光': 0, 'N/A': 0, '洪意凌': 48 }
    ]

    this.state = { anchor: 1 }
    this.scrollTo = this.scrollTo.bind(this)
    this.anchors = []

    // fetch data
    if (!this.props.course || this.props.course.id !== this.props.match.params.id) {
      this.props.fetch_data(this.props.match.params.id)
    }
  }
  scrollTo (index) {
    scrollToComponent(this.anchors[index], { align: 'top', offset: -20, duration: 500 })
    this.setState({ anchor: index })
  }

  render () {
    return (
      <PageWrapper>
        <Sidebar >
          <SidebarItem active={this.state.anchor === 1} onClick={() => this.scrollTo(1)}>
            課程資訊
          </SidebarItem>
          <SidebarItem active={this.state.anchor === 2} onClick={() => this.scrollTo(2)}>
            課程攻略
          </SidebarItem>
          <SidebarItem active={this.state.anchor === 3} onClick={() => this.scrollTo(3)}>
            歷年統計
          </SidebarItem>
          <SidebarItem active={this.state.anchor === 4} onClick={() => this.scrollTo(4)}>
            留言板
          </SidebarItem>
          <SidebarItem active={this.state.anchor === 5} onClick={() => this.scrollTo(5)}>
            課程(心得)討論區
          </SidebarItem>
          <SidebarItem active={this.state.anchor === 6} onClick={() => this.scrollTo(6)}>
            考古題
          </SidebarItem>
        </Sidebar>
        <div className='container'>
          <div className='offset-2 py-4'>
            {
              this.props.fetching.status !== 2
                ? <div className='text-center pt-3'><Spinner size={64} color='grey' /></div>
                : <div>
                  <div className='row'>
                    <div className='col-md-10'>
                      <h1>{ this.props.course.name }</h1>
                      <small>最後同步時間 { this.props.course.updated_at }</small>
                    </div>
                    <div className='col-md-2 pull-right mt-5'>
                      <ShareButton />
                    </div>
                  </div>

                  <hr />

                  <Section domref={anchor => (this.anchors[0] = anchor)} >
                    <div className='row'>
                      <div className='col-12 col-md-7'>
                        <Ratings rating={this.ratings} />
                      </div>
                      <div className='col-12 col-md-5'>
                        <PersonalRating />
                      </div>
                    </div>
                  </Section>

                  <hr />

                  <Section
                    domref={anchor => (this.anchors[1] = anchor)}
                    title={<span><i className='fa fa-book mx-2' />課程資訊</span>}
                  >
                    <CourseInfo {...this.props.course} />
                  </Section>

                  <hr />

                  <Section title={<span><i className='fa fa-cube mx-2' />修了這堂課的人，也修了...</span>} />

                  <hr />

                  <Section
                    domref={anchor => (this.anchors[2] = anchor)}
                    title={<span><i className='fa fa-gamepad mx-2' />課程攻略</span>}
                  >
                    <CourseTips />
                  </Section>

                  <hr />

                  <Section
                    domref={anchor => (this.anchors[3] = anchor)}
                    title={<span><i className='fa fa-align-left mx-2' />歷年統計</span>}
                  >
                    <CourseStatistics chart_data={this.chartData} />
                  </Section>

                  <hr />

                  <Section
                    domref={anchor => (this.anchors[4] = anchor)}
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

                  <Section domref={anchor => (this.anchors[5] = anchor)}>
                    <CourseForum />
                  </Section>

                  <Section domref={anchor => (this.anchors[6] = anchor)} title='考古題區'>
                    <PastExamUploadTable />
                    <PastExamUpload />
                  </Section>
                </div>
            }
          </div>
        </div>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  course: state.courses.show.data,
  fetching: {
    status: state.courses.show.status
  }
})

const mapDispatchToProps = (dispatch) => ({
  fetch_data: (id) => dispatch(courseActions.show.fetch(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Show)
