
import React from 'react'
import Layout from 'pages/Layout'
import { SearchCourse } from 'components/Search'
import { List } from 'components/Course'
import Timetable from 'components/Timetable'
import ReactJoyride, { STATUS } from 'react-joyride'

// @todo: connect course list data
class Simulation extends React.Component {
  constructor (props) {
    super(props)
    this.handleClickStart = this.handleClickStart.bind(this)
    this.handleJoyrideCallback = this.handleJoyrideCallback.bind(this)
    this.state = {
      run: false,
      steps: [
        {
          content: <h5>請使用Enter鍵或滑鼠點擊灰色處觀看</h5>,
          placement: 'center',
          target: 'body'
        },
        {
          content: (
            <div>
              <h3>已選課表</h3>
              <p>點此察看目前的課程</p>
            </div>
          ),
          placement: 'bottom',
          target: '.fa-check'
        },
        {
          content: (
            <div>
              <h3>收藏課程</h3>
              <p>點此察看在「全校課程」中收藏的課程 <br />
              點選右上角「課程收藏」刪除已收藏的課程</p>
            </div>
          ),
          placement: 'bottom',
          target: '.fa-star'
        },
        {
          content: (
            <div>
              <h3>推薦-空堂</h3>
              <p>先在右方的課表空格中選擇時間 <br />
              按下按鈕搜尋該時段的「通識及外文」課程
              可以搜尋很多個時段喔!</p>
            </div>
          ),
          placement: 'bottom',
          target: '.fa-calendar'
        },
        {
          content: (
            <div>
              <h3>推薦-向度</h3>
              <p>推薦目前缺少的通識向度(需先匯入成績)</p>
            </div>
          ),
          placement: 'bottom',
          target: '.fa-graduation-cap'
        },
        {
          content: (
            <div>
              <h3>分享課表</h3>
              <p>複製您的課表連結給同學們<br />
              若貼在FB還帶有縮圖喔!!</p>
            </div>
          ),
          placement: 'bottom',
          target: '.fa-share'
        },
        {
          content: (
            <div>
              <h3>匯出課表</h3>
              <p>匯出Excel格式或圖檔</p>
            </div>
          ),
          placement: 'bottom',
          target: '.fa-download'
        }
      ]
    }
  }

  componentDidMount () {
    if (document.cookie.search('joyride') === -1) {
      this.setState({ run: true })
      document.cookie = 'name=joyride'
    }
  }

  handleClickStart (e) {
    e.preventDefault()
    this.setState({ run: true })
  }

  handleJoyrideCallback (data) {
    const { status } = data
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      this.setState({ run: false })
    }
  }

  render () {
    const { run, steps } = this.state
    return (
      <Layout>
        <ReactJoyride
          callback={this.handleJoyrideCallback}
          continuous
          run={run}
          scrollToFirstStep
          showProgress
          showSkipButton
          disableOverlayClose
          steps={steps}
          styles={{
            buttonClose: {
              display: 'none'
            },
            options: {
              width: 350,
              height: 200,
              zIndex: 15,
              arrowColor: 'rgba(0,0,0,0.6)',
              backgroundColor: 'rgba(0,0,0,0.6)',
              primaryColor: 'rgba(5,130,255,1)',
              textColor: 'rgba(255,255,255,1)'
            }
          }}
        />
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
                      <button className='btn btn-info btn-circle m-1' >
                        <i className='fa fa-check' />
                      </button>
                      <button className='btn btn-info btn-circle m-1' >
                        <i className='fa fa-star' />
                      </button>
                    </span>
                    課程查詢
                    <span className='pull-right'>
                      <button className='btn btn-info btn-circle m-1' onClick={this.handleClickStart} >
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
                          <button className='btn btn-secondary'><i className='fa fa-book' /></button>
                          <button className='btn btn-secondary'><i className='fa fa-calendar' /></button>
                          <button className='btn btn-secondary'><i className='fa fa-graduation-cap' /></button>
                        </div>
                      </div>

                    </div>
                    <div className='text-left mx-2'>
                      <SearchCourse />
                    </div>
                  </div>
                  <div className='scrollable'>
                    <List type='required' data={[]} />
                    <List type='general' data={[]} />
                    <List type='foreign' data={[]} />
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
