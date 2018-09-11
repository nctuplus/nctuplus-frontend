
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Layout from 'pages/Layout'
import CourseListDiagram from 'components/CourseMap/CourseListDiagram'
import CourseListText from 'components/CourseMap/CourseListText'
import { getCourseMap } from 'api/Actions/CourseMaps'

const mapStateToProps = (state) => ({
  courseMap: state.courseMaps.show.data,
  status: state.courseMaps.show.status
})

const mapDispatchToProps = (dispatch) => ({
  getCourseMap: (id) => dispatch(getCourseMap(id))
})

class CourseMap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      courseListType: 0
    }
  }

  componentDidMount () {
    this.props.getCourseMap(this.props.match.params.id)
  }

  render () {
    let courseMap = this.props.courseMap

    return (
      <Layout>
        <div className='container pt-4'>
          <div className='row'>
            <div className='col-6 offset-3'>
              <form>
                <div className='row'>
                  <div className='col-6 px-1'>
                    <select className='form-control'>
                      <option>系所</option>
                    </select>
                  </div>
                  <div className='col-4 px-1'>
                    <select className='form-control'>
                      <option>入學年度</option>
                    </select>
                  </div>
                  <div className='col-2 px-1'>
                    <button className='btn btn-success'>送出</button>
                  </div>
                </div>
              </form>
            </div>
            <div className='card col-10 offset-1 mt-3 px-5 py-4'>
              <div className='card-body'>
                <h4>
                  <b className='mx-1'>{ courseMap.name }</b>
                  <b className='mx-1'>{`入學年度: ${courseMap.year}`}</b>
                  <b className='mx-1'>{`畢業學分: ${courseMap.total_credit}`}</b>
                  <small className='mx-1'>
                    管理者:
                    <a>{courseMap.manager}</a>
                  </small>
                  <div className='pull-right'>
                    <button className='btn btn-info mr-1'>使用導覽</button>
                    <a href='http://aadm.nctu.edu.tw/chcourse/class03.aspx?ftype=3' className='btn btn-primary' target='_blank'>
                      <i className='fa fa-bookmark-o' />
                      必修科目表
                    </a>
                  </div>
                </h4>

                <hr />

                <h4>
                  <strong>課程列表</strong>
                  <div className='btn-group pl-2'>
                    <button
                      className='btn btn-success'
                      disabled={this.state.courseListType === 0}
                      onClick={() => this.setState({ courseListType: 0 })}
                    >
                      修課學期
                    </button>
                    <button
                      className='btn btn-success'
                      disabled={this.state.courseListType === 1}
                      onClick={() => this.setState({ courseListType: 1 })}
                    >
                      學程
                    </button>
                  </div>
                </h4>
                {
                  this.state.courseListType === 0
                    ? <CourseListDiagram />
                    : <CourseListText />
                }

                <hr />

                <div>
                  <h4><strong>修課規定</strong></h4>
                </div>

                <hr />

                <div>
                  <h4><strong>備註</strong></h4>
                </div>

                <div className='mt-5'>
                  <h4><strong>問題回報區</strong></h4>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CourseMap))
