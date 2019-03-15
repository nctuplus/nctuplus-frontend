
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { InputWithButton } from 'components/FormUtils'
import styles from './style.scss'
import { connect } from 'react-redux'
import actions from 'api/Actions/SearchPanel'

class SearchCourse extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      advanced: false,
      type: null,
      department: null
    }
  }
  render () {
    return (
      <div className={styles.searchCourse}>
        <div className='d-inline-block vertical-center'>
          <InputWithButton
            className={styles.searchBar}
            placeholder='課名/老師/時間/向度'
            button_style='primary'
            button_content={<i className='fa fa-search' />}
          />
        </div>
        <div className='d-inline-block vertical-center'>
          <div className='d-none d-inline-block mx-2'>
            <label className='my-auto'>
              <input
                className='mr-1'
                type='checkbox'
                checked={this.state.advanced}
                onChange={(e) => this.setState({ advanced: e.target.checked })}
              />進階搜尋
            </label>
          </div>
        </div>
        <div className={classNames('row mt-2', !this.state.advanced && 'd-none')} >
          {
            this.props.show_semester
              ? <div className='col-3 text-center px-1'>
                <select className='form-control'>
                  <option value=''>所有學期</option>
                  <option value='25'>107上</option>
                  <option value='24'>106暑</option>
                  <option value='23'>106下</option>
                  <option value='22'>106上</option>
                  <option value='21'>105暑</option>
                  <option value='20'>105下</option>
                  <option value='19'>105上</option>
                  <option value='18'>104暑</option>
                  <option value='17'>104下</option>
                  <option value='16'>104上</option>
                  <option value='15'>103暑</option>
                  <option value='14'>103下</option>
                  <option value='13'>103上</option>
                  <option value='12'>102暑</option>
                  <option value='11'>102下</option>
                  <option value='10'>102上</option>
                  <option value='9'>101暑</option>
                  <option value='8'>101下</option>
                  <option value='7'>101上</option>
                  <option value='6'>100暑</option>
                  <option value='5'>100下</option>
                  <option value='4'>100上</option>
                  <option value='3'>99暑</option>
                  <option value='2'>99下</option>
                  <option value='1'>99上</option>
                </select>
              </div> : ''
          }
          <div
            className={`col-4 text-center px-1 ${this.props.show_semester ? 'no-padding-left' : 'no-padding-right'}`}
          >
            <select className='form-control'>
              <option value=''>分類</option>
              <option value='1'>大學部</option>
              <option value='2'>大學部共同</option>
              <option value='3'>研究所</option>
            </select>
          </div>
          <div
            className='col-5 text-center px-1'
          >
            <select className='form-control' >
              <option value=''>系所</option>
              <option value='7'>華語中心</option>
              <option value='8'>通識教育中心</option>
              <option value='9'>語言教學與研究中心</option>
              <option value='10'>師資培育中心</option>
              <option value='11'>交大遠距教學</option>
              <option value='12'>體育室</option>
              <option value='13'>軍訓室</option>
              <option value='14'>資訊技術服務中心</option>
              <option value='15'>圖書館</option>
              <option value='16'>普通物理教學小組</option>
              <option value='17'>微積分教學小組</option>
              <option value='18'>衛保組(健康與護理)</option>
              <option value='20'>教務處</option>
              <option value='22'>寫作中心</option>
              <option value='24'>服務學習中心</option>
              <option value='25'>計概小組</option>
              <option value='26'>課務組</option>
              <option value='27'>國際處</option>
              <option value='28'>台中一中科學班</option>
              <option value='388'>資訊學院共同課程</option>
              <option value='389'>電機學院共同課程</option>
              <option value='390'>管理學院共同課程</option>
              <option value='391'>電機學院與資訊學院共同課程</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

const SearchPanelNews = (props) => {
  const color = props.status ? 'list-group-item-success' : 'list-group-item-light'

  if (props.clickable) {
    return (
      <Link to={props.href} className={`list-group-item ${color}`}>
        { props.children }
      </Link>
    )
  } else {
    return (
      <div className={`list-group-item ${color}`}>
        { props.children }
      </div>
    )
  }
}

const SearchPanelNewsFeed = (props) => (
  <div>
    <h4 className={`text-center d-none d-lg-block ${styles.title}`}>最新動態</h4>
    <div className='row d-none d-lg-block'>
      <div className='list-group'>
        { props.children }
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  college: state.searchPanel.college
})

const mapDispatchToProps = (dispatch) => ({
  updateCollege: (payload) => dispatch(actions.searchPanel.updateCollege(payload))
})

const SearchPanelCollegeBtn = connect(mapStateToProps, mapDispatchToProps)((props) => (
  <button
    className={props.value === props.college ? `btn btn-primary text-white ${styles.college} ` : `btn btn-default ${styles.college}`}
    onClick={() => props.updateCollege(props.value)}>{props.title}</button>
))

const SearchPanelCollegeList = (props) => (
  <div className={`d-md-block ${styles.collegeGroup}`}>
    <h4 className='text-center'>分類</h4>
    <SearchPanelCollegeBtn title='共同課程' value={0} />
    <SearchPanelCollegeBtn title='資訊學院' value={3} />
    <SearchPanelCollegeBtn title='電機學院' value={5} />
    <SearchPanelCollegeBtn title='工學院' value={4} />
    <SearchPanelCollegeBtn title='理學院' value={9} />
    <SearchPanelCollegeBtn title='光電學院' value={8} />
    <SearchPanelCollegeBtn title='生科學院' value={2} />
    <SearchPanelCollegeBtn title='管理學院' value={7} />
    <SearchPanelCollegeBtn title='人社學院' value={1} />
    <SearchPanelCollegeBtn title='客家文化學院' value={6} />
  </div>
)

const SearchPanelButtonGroup = (props) => (
  <div className='row mt-3'>
    <table className='table table-bordered text-center' >
      <tbody>
        <tr>
          <td>
            <Link
              className={`btn btn-sm btn-${props.new_btn_type}`}
              to={props.new_link}
            >
              { props.new_title }
            </Link>
          </td>
          <td>
            <Link
              className={`btn btn-sm btn-${props.mine_btn_type}`}
              to={props.mine_link}
            >
              { props.mine_title }
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

class SearchPanel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.toggleClose = this.toggleClose.bind(this)
  }
  toggleOpen (e) {
    this.setState({ open: true })
    const documentWidth = document.documentElement.clientWidth
    const windowWidth = window.innerWidth
    const scrollBarWidth = windowWidth - documentWidth
    document.body.style.overflowY = 'hidden'
    document.body.style.paddingRight = `${scrollBarWidth}px`
    e.stopPropagation()
  }
  toggleClose (e) {
    this.setState({ open: false })
    document.body.style.overflowY = 'auto'
    document.body.style.paddingRight = '0'
    e.stopPropagation()
  }
  componentWillUnmount () {
    document.body.style.overflowY = 'auto'
    document.body.style.paddingRight = '0'
  }
  render () {
    return (
      <div className={classNames(styles.searchPanel, this.state.open && 'show')} >
        <div className={classNames(styles.panelOpen, this.state.open && 'show')} onClick={this.toggleOpen}>
          <i className='fa fa-filter' />
        </div>
        <div className={classNames(styles.panelClose, this.state.open && 'show')} onClick={this.toggleClose} />
        { this.props.children }
      </div>
    )
  }
}

export {
  SearchCourse,
  SearchPanel,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed,
  SearchPanelButtonGroup
}
