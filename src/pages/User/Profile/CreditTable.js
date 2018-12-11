import React from 'react'
import { Link } from 'react-router-dom'
import Toggle from './Toggle.js'
import ProgressBar from '../../../components/ProgressBar/index.js'
class CreditTable extends React.Component {
  constructor (props) {
    super(props)
    this.getSwitchState = this.getSwitchState.bind(this)
    this.state = {
      switched: true
    }
  }
  getSwitchState (XD) {
    this.setState({ switched: XD })
  }
  render () {
    let user = this.props.user
    let curr = this.props.user.this_semester
    let switched = this.state.switched
    let serviceOne = switched ? user.serviceOne : curr.basic.serviceOne || user.serviceOne
    let serviceTwo = switched ? user.serviceTwo : curr.basic.serviceTwo || user.serviceTwo
    let artOne = switched ? user.artOne : curr.basic.artOne || user.artOne
    let artTwo = switched ? user.artTwo : curr.basic.artTwo || user.artTwo

    let pe1 = switched ? (user.pe_basic > 0 ? 1 : 0) : (user.pe_basic + curr.basic.pe_basic > 0 ? 1 : 0)
    let pe2 = switched ? (user.pe_basic > 1 ? 1 : 0) : (user.pe_basic + curr.basic.pe_basic > 1 ? 1 : 0)
    let pe3 = switched ? (user.pe > 0 ? 1 : 0) : (user.pe + curr.basic.pe > 0 ? 1 : 0)
    let pe4 = switched ? (user.pe > 1 ? 1 : 0) : (user.pe + curr.basic.pe > 1 ? 1 : 0)
    let pe5 = switched ? (user.pe > 2 ? 1 : 0) : (user.pe + curr.basic.pe > 2 ? 1 : 0)
    let pe6 = switched ? (user.pe > 3 ? 1 : 0) : (user.pe + curr.basic.pe > 3 ? 1 : 0)

    let gnrlContemporary = switched ? user.general.contemporary : curr.general.contemporary + user.general.contemporary
    let gnrlCivil = switched ? user.general.civil : curr.general.civil + user.general.civil
    let gnrlGroup = switched ? user.general.group : curr.general.group + user.general.group
    let gnrlHistory = switched ? user.general.history : curr.general.history + user.general.history
    let gnrlCulture = switched ? user.general.culture : curr.general.culture + user.general.culture
    let gnrlScience = switched ? user.general.science : curr.general.science + user.general.science

    let gnrlPassed = user.general.contemporary + user.general.civil + user.general.group + user.general.history + user.general.culture + user.general.science
    let gnrlCurr = curr.general.contemporary + curr.general.civil + curr.general.group + curr.general.history + curr.general.culture + curr.general.science

    // let newGnrlHuman = switched ? user.new_general.core.human : curr.new_general.core.human + user.new_general.core.human
    // let newGnrlSociety = switched ? user.new_general.core.society : curr.new_general.core.society + user.new_general.core.society
    // let newGnrlScience = switched ? user.new_general.core.science : curr.new_general.core.science + user.new_general.core.science
    // let newGnrlBasic = switched ? user.new_general.basic : curr.new_general.basic + user.new_general.basic
    // let newGnrlCross = switched ? user.new_general.cross : curr.new_general.cross + user.new_general.cross

    return (
      <div className='bg-white p-2'>
        <div className='toggleLine'>
          <Toggle getSwitchState={this.getSwitchState} />
          <div className='text'>
              加入當期課程
          </div>
        </div>
        <table className='table table-bordered '>
          <tbody className='text-center'>
            <tr>
              <td rowSpan='2'>服務學習</td>
              <td colSpan='3'>一</td>
              <td colSpan='3'>二</td>
            </tr>
            <tr>
              <td colSpan='3'>{serviceOne}</td>
              <td colSpan='3'>{serviceTwo}</td>
            </tr>
            <tr>
              <td rowSpan='2'>藝文賞析</td>
              <td colSpan='3'>上</td>
              <td colSpan='3'>下</td>
            </tr>
            <tr>
              <td colSpan='3'>{artOne}</td>
              <td colSpan='3'>{artTwo}</td>
            </tr>
            <tr>
              <td rowSpan='2'>體育</td>
              <td>大一</td>
              <td>大一</td>
              <td>選修</td>
              <td>選修</td>
              <td>選修</td>
              <td>選修</td>
            </tr>
            <tr>
              <td>{pe1}</td>
              <td>{pe2}</td>
              <td>{pe3}</td>
              <td>{pe4}</td>
              <td>{pe5}</td>
              <td>{pe6}</td>
            </tr>
            <tr>
              <td rowSpan='3'>外文</td>
              <td >基礎</td>
              <td >基礎</td>
              <td >進階</td>
              <td >進階</td>
            </tr>
            <tr>
              <td>D</td>
              <td>D</td>
              <td>D</td>
              <td>D</td>
            </tr>
            <tr>
              <td colSpan='6'>
                <ProgressBar
                  goal={user.language.total}
                  passed={user.language.basic + user.language.advanced}
                  current={curr.language.basic + curr.language.advanced}
                  switched={this.state.switched}
                />
              </td>
            </tr>
            <tr>
              <td rowSpan='3'>通識</td>
              <td>當代</td>
              <td>公民</td>
              <td>群己</td>
              <td>歷史</td>
              <td>文化</td>
              <td>自然</td>
            </tr>
            <tr>
              <td>{gnrlContemporary}</td>
              <td>{gnrlCivil}</td>
              <td>{gnrlGroup}</td>
              <td>{gnrlHistory}</td>
              <td>{gnrlCulture}</td>
              <td>{gnrlScience}</td>
            </tr>
            <tr>
              <td colSpan='6'>
                <ProgressBar
                  goal={user.general.total}
                  passed={gnrlPassed}
                  current={gnrlCurr}
                  switched={this.state.switched}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <p className='p-3'>
          註：外語學分目前不會計算第二外語及進修英文(因無法得知是否通過中高級初試)<br />
          需請同學自行計算！
        </p>
        <table className='table table-bordered '>
          <tbody>
            <tr>
              <td className='col-md-12' colSpan='3'>
                <h4 className='text-center'>
                  <Link to='/course_maps/198'>{ user.department } 入學年度: { user.enroll_year }</Link>
                  <a href='/user/statistics_table' className='btn btn-info pull-right' target='blank'>產生報表</a>
                </h4>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          註：計算錯誤可能原因如下 (1)系統缺少抵免/免修課程  (2)使用者未選擇該課所屬學程/領域
        </p>
      </div>
    )
  }
}

export default CreditTable
