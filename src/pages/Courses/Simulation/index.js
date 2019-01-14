
import React from 'react'
import Layout from 'pages/Layout'
import { SearchCourse } from 'components/Search'
import { List } from 'components/Course'
import Timetable from 'components/Timetable'
import ReactTooltip from 'react-tooltip'

// @todo: connect course list data

const 假資料_必修 = [
  {
    id:1,
    course_name:'電磁學',
    category:'電機系',
    teacher:'邱一',
    requirement:'必修',
    grade:'三',
    class_time:'1ef3cd',
    classroom:'ED104',
    current_enroll:5,
    max_enroll:25,
    credit:3,
  }
]
const 假資料_選修 = [
  {
    id:2,
    course_name:'JAVA',
    category:'電機系',
    teacher:'蔡媽',
    requirement:'選修',
    grade:'二',
    class_time:'2efg',
    classroom:'ED208',
    current_enroll:15,
    max_enroll:25,
    credit:3,
  }
]
const 假資料_外文 = [
  {
    id:3,
    course_name:'日文',
    category:'語言中心',
    teacher:'花澤香菜',
    requirement:'外文',
    grade:'all',
    class_time:'2cd',
    classroom:'A502',
    current_enroll:60,
    max_enroll:60,
    credit:2,
  }
]
const 假資料收藏_必修 = [
  {
    id:4,
    course_name:'電子學',
    category:'電機系',
    teacher:'陳龍英',
    requirement:'必修',
    grade:'三',
    class_time:'1ef3cd',
    classroom:'ED104',
    current_enroll:55,
    max_enroll:55,
    credit:3,
  }
]
const 假資料收藏_通識 = [
  {
    id:5,
    course_name:'偶像養成導論',
    category:'通識中心',
    teacher:'佐賀偶像',
    requirement:'通識',
    grade:'all',
    class_time:'5gh',
    classroom:'A104',
    current_enroll:65,
    max_enroll:65,
    credit:2,
  }
]

class Simulation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listStatus:0
    }
  }
  changeListStatus(index){
    this.setState({
      listStatus:index
    })
  }
  render(){
    return(
      <Layout>
        <ReactTooltip effect='solid' globalEventOff='click' />
        <div className='container pt-3'>
          <div className='row'>
            <div className='col-12'>
              <div className='alert alert-warning'>
                <span className='bold'>Warning!</span> 因為學校真的很煩, 很抱歉目前識別新制通識的功能正在努力趕工中, 並且106學年度暫時無法搜尋通識的一當代五向度資料, 造成不便, 敬請見諒!
              </div>
            </div>
            <div className='col-12 col-lg-6'>
              <div className='card'>
                <div className='card-heading bg-blue text-white p-2'>
                  <h4 className='text-center'>
                    <span className='pull-left'>
                      <button className='btn btn-info btn-circle m-1' onClick={()=>this.changeListStatus(0)} data-tip='已選課程'>
                        <i className='fa fa-check' />
                      </button>
                      <button className='btn btn-info btn-circle m-1' onClick={()=>this.changeListStatus(1)} data-tip='收藏課程'>
                        <i className='fa fa-star' />
                      </button>
                    </span>
                    課程查詢
                    <span className='pull-right'>
                      <button className='btn btn-info btn-circle m-1' data-tip='使用提示'>
                        <i className='fa fa-question' />
                      </button>
                    </span>
                  </h4>
                </div>
                <div className='card-body'>
                  <div className='row p-3'>
                    <div className='text-center no-padding'>
                      <div className='btn-toolbar'>
                        <div className='btn-group'>
                          <button className='btn btn-secondary' data-tip='推薦課程'><i className='fa fa-book' /></button>
                          <button className='btn btn-secondary' data-tip='空堂'><i className='fa fa-calendar' /></button>
                          <button className='btn btn-secondary' data-tip='向度'><i className='fa fa-graduation-cap' /></button>
                        </div>
                      </div>

                    </div>
                    <div className='text-left mx-2'>
                      <SearchCourse />
                    </div>
                  </div>
                  <div className='scrollable'>
                    {this.state.listStatus === 0?
                      <React.Fragment>
                        <List type='required' data={假資料_必修} />
                        <List type='general' data={假資料_選修} />
                        <List type='foreign' data={假資料_外文} />
                      </React.Fragment>:
                      <React.Fragment>
                        <List type='required' data={假資料收藏_必修} />
                        <List type='general' data={假資料收藏_通識} />
                      </React.Fragment>
                    }

                  </div>
                </div>
              </div>
            </div>
            <div className='mt-3 mt-lg-0 col-12 col-lg-6'>
              <Timetable selectable />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Simulation
