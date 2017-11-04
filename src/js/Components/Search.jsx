
import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'
import { InputWithButton } from './FormUtils'

class SearchCourse extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      advanced: false,
      type: null,
      department: null
    } 
  }
  render () {
    return (
      <div className='search-course'>
        <div className='inline-block vertical-center'>
          <InputWithButton
            className='search-bar'
            placeholder='課名/老師/時間/向度'
            button_style='primary'
            button_content={<i className='fa fa-search' />}
          />
        </div>
        <div className='inline-block vertical-center'>
          <div className='hidden-xs checkbox'>
            <label>
              <input 
                type='checkbox' 
                checked={ this.state.advanced }
                onChange={ (e) => this.setState({ advanced: e.target.checked }) }
              />進階搜尋
            </label>
          </div>
        </div>
        <Row className={ this.state.advanced ? '' : 'hidden' } >
          {
            this.props.show_semester 
            ? <Col md={4} className='text-center no-padding-right'>
              <select className='form-control'>
                <option value=''>所有學期</option>
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
            </Col>: ''
          }
          <Col 
            md={ this.props.show_semester ? 8 : 3 } 
            className={ `text-center ${this.props.show_semester ? 'no-padding-left' : 'no-padding-right'}` }
          >
            <select className='form-control'>
              <option value=''>分類</option>
              <option value='1'>大學部</option>
              <option value='2'>大學部共同</option>
              <option value='3'>研究所</option>
            </select>
          </Col>
          <Col 
            md={ this.props.show_semester ? 12 : 9 } 
            className='text-center'
          >
            <select className='form-control' >
              <option value=''>系所</option>
              <option value='260'>奈米學士班</option>
              <option value='261'>理學院學士班</option>
              <option value='262'>電資學士班</option>
              <option value='263'>電工系</option>
              <option value='266'>機械系</option>
              <option value='267'>土木系</option>
              <option value='268'>資工系</option>
              <option value='269'>材料系</option>
              <option value='270'>電物系</option>
              <option value='271'>應數系</option>
              <option value='272'>電機系</option>
              <option value='273'>光電系</option>
              <option value='274'>應化系</option>
              <option value='275'>生科系</option>
              <option value='276'>管科系</option>
              <option value='277'>運管系</option>
              <option value='278'>工工系</option>
              <option value='279'>外文系</option>
              <option value='280'>資財系</option>
              <option value='281'>人社系</option>
              <option value='282'>傳科系</option>
              <option value='284'>人文社會學院</option>
              <option value='285'>生物科技學院</option>
              <option value='286'>資訊學院</option>
              <option value='287'>工學院</option>
              <option value='288'>電機學院(大學部)</option>
              <option value='289'>客家文化學院</option>
              <option value='290'>管理學院院本部</option>
              <option value='292'>理學院</option>
            </select>
          </Col>
        </Row>
      </div>
    )
  }
}

class SearchPanelNews extends React.Component {
  render () {
    return (
      <Link to={this.props.href} className='list-group-item list-group-item-success'>
        { this.props.children }
      </Link>
    )
  }
}

class SearchPanelNewsFeed extends React.Component {
  render () {
    return (
      <div>
        <h4 className='text-center hidden-xs title'>最新動態</h4>
        <Row className='hidden-xs'>
          <div className='list-group'>
            { this.props.children }
          </div>
        </Row>
      </div>
    )
  }
}

class SearchPanelCollegeList extends React.Component {
  render () {
    return (
      <div className='college-group'>
        <h4 className='text-center' style={{ marginTop: -5 }}>分類</h4>
        <Button className='college' >共同課程</Button>
        <Button className='college' >資訊學院</Button>
        <Button className='college' >電機學院</Button>
        <Button className='college' >工學院</Button>
        <Button className='college' >理學院</Button>
        <Button className='college' >光電學院</Button>
        <Button className='college' >生科學院</Button>
        <Button className='college' >管理學院</Button>
        <Button className='college' >人社學院</Button>
        <Button className='college' >客家文化學院</Button>
      </div>
    )
  }
}

class SearchPanelButtonGroup extends React.Component {
  render () {
    return (
      <Row style={{marginTop: 20}}>
        <table className='table table-bordered text-center' >
          <tbody>
            <tr>
              <td>
                <Link
                  className={'btn btn-sm btn-' + this.props.new_btn_type}
                  to={this.props.new_link}
              >
                  { this.props.new_title }
                </Link>
              </td>
              <td>
                <Link
                  className={'btn btn-sm btn-' + this.props.mine_btn_type}
                  to={this.props.mine_link}
              >
                  { this.props.mine_title }
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Row>
    )
  }
}

class SearchPanel extends React.Component {
  render () {
    return (
      <Col md={3} className='search-panel'>
        { this.props.children }
      </Col>

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
