
import React from 'react'
import Layout from 'pages/Layout'
import { Sidebar, SidebarItem } from 'components/Sidebar'
import * as Course from 'components/Course'
import { Ratings } from 'components/Ratings'
import * as PastExam from 'components/PastExam'
import Spinner from 'components/Spinner'

import scrollToComponent from 'react-scroll-to-component'
import { connect } from 'react-redux'
import { getCourse } from 'api/Controllers/courses'

import { testData } from './testData'

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
    this.scrollTo = this.scrollTo.bind(this)
    this.anchors = Array(7).fill(0).map(React.createRef)
  }
  componentDidMount () {
    const { match, fetchData } = this.props
    fetchData(match.params.id)
  }
  scrollTo (index) {
    return () => {
      scrollToComponent(this.anchors[index].current, { align: 'top', offset: -20, duration: 500 })
      this.setState({ anchor: index })
    }
  }

  render () {
    const chartData = this.props.chartData || testData

    return (
      <Layout>
        <Sidebar >
          <SidebarItem active={this.state.anchor === 1} onClick={this.scrollTo(1)}>
            課程資訊
          </SidebarItem>
          <SidebarItem active={this.state.anchor === 2} onClick={this.scrollTo(2)}>
            課程攻略
          </SidebarItem>
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
              this.props.fetching.status !== 2
                ? <div className='text-center pt-3'><Spinner size={64} color='grey' /></div>
                : <div>
                  <div className='row'>
                    <div className='col-md-10'>
                      <h1>{ this.props.course.permanent_course.name }</h1>
                      <small>最後同步時間 { this.props.course.updated_at }</small>
                    </div>
                    <div className='col-md-2 pull-right mt-md-5 mt-3'>
                      <button className='btn btn-info m-1 d-flex justify-content-center align-items-center' >
                        <i className='fa fa-star' /><span className='ml-1'>收藏課程</span>
                      </button>
                    </div>
                  </div>

                  <hr />

                  <Section domref={this.anchors[0]} >
                    <div className='row'>
                      <div className='col'>
                        <Ratings rating={this.props.rating} />
                      </div>
                      {/* <div className='col-12 col-md-5'>
                        <PersonalRating />
                      </div> */}
                    </div>
                  </Section>

                  <hr />

                  <Section
                    domref={this.anchors[1]}
                    title={<span><i className='fa fa-book mx-2' />課程資訊</span>}
                  >
                    <Course.Info {...this.props.course} />
                  </Section>

                  <hr />

                  <Section title={<span><i className='fa fa-cube mx-2' />修了這堂課的人，也修了...</span>} />

                  <hr />

                  <Section
                    domref={this.anchors[2]}
                    title={<span><i className='fa fa-gamepad mx-2' />課程攻略</span>}
                  >
                    <Course.Tips />
                  </Section>

                  <hr />

                  <Section
                    domref={this.anchors[3]}
                    title={<span><i className='fa fa-align-left mx-2' />歷年統計</span>}
                  >
                    <Course.StatisticCharts {...chartData} />
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

                  <Section domref={this.anchors[5]}>
                    <Course.Forum />
                  </Section>

                  <Section domref={this.anchors[6]} title='考古題區'>
                    <PastExam.FileList />
                    <PastExam.Upload />
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
  fetching: {
    status: state.courses.show.status
  }
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (id) => dispatch(getCourse(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Show)
