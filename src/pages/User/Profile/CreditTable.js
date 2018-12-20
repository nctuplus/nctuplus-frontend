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
  getSwitchState (switchState) {
    this.setState({ switched: switchState })
  }
  render () {
    let user = this.props.user
    let current = this.props.user.this_semester
    let switched = this.state.switched
    let serviceOne = switched ? user.service_one : current.basic.service_one + user.service_one
    let serviceTwo = switched ? user.service_two : current.basic.service_two + user.service_two
    let artOne = switched ? user.art_one : current.basic.art_one + user.art_one
    let artTwo = switched ? user.art_two : current.basic.art_two + user.art_two

    let peBasic = switched ? user.pe_basic : current.basic.pe_basic + user.pe_basic
    let peAdvance = switched ? user.pe : current.basic.pe + user.pe

    let languagePassed = user.language.total
    let languageCurrent = current.language.total
    let language = switched ? languagePassed : languagePassed + languageCurrent

    let gnrlContemporary = switched ? user.general.contemporary : current.general.contemporary + user.general.contemporary
    let gnrlCivil = switched ? user.general.civil : current.general.civil + user.general.civil
    let gnrlGroup = switched ? user.general.group : current.general.group + user.general.group
    let gnrlHistory = switched ? user.general.history : current.general.history + user.general.history
    let gnrlCulture = switched ? user.general.culture : current.general.culture + user.general.culture
    let gnrlScience = switched ? user.general.science : current.general.science + user.general.science
    let gnrlPassed = user.general.total
    let gnrlCurrent = current.general.total

    let newGnrlHuman = switched ? user.new_general.core.human : current.new_general.core.human + user.new_general.core.human
    let newGnrlSociety = switched ? user.new_general.core.society : current.new_general.core.society + user.new_general.core.society
    let newGnrlScience = switched ? user.new_general.core.science : current.new_general.core.science + user.new_general.core.science
    let newGnrlBasic = switched ? user.new_general.basic : current.new_general.basic + user.new_general.basic
    let newGnrlCross = switched ? user.new_general.cross : current.new_general.cross + user.new_general.cross

    let newGnrlPassed = user.new_general.total
    let newGnrlCurrent = current.new_general.total
    let newGnrlCoreTotal = switched ? user.new_general.core.total : user.new_general.core.total + current.new_general.core.total

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
              <td colSpan='6'>一</td>
              <td colSpan='6'>二</td>
            </tr>
            <tr>
              <td colSpan='6'>{serviceOne > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='6'>{serviceTwo > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
            </tr>
            <tr>
              <td rowSpan='2'>藝文賞析</td>
              <td colSpan='6'>上</td>
              <td colSpan='6'>下</td>
            </tr>
            <tr>
              <td colSpan='6'>{artOne > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='6'>{artTwo > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
            </tr>
            <tr>
              <td rowSpan='2'>體育</td>
              <td colSpan='2'>大一</td>
              <td colSpan='2'>大一</td>
              <td colSpan='2'>選修</td>
              <td colSpan='2'>選修</td>
              <td colSpan='2'>選修</td>
              <td colSpan='2'>選修</td>
            </tr>
            <tr>
              <td colSpan='2'>{peBasic > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{peBasic > 1 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{peAdvance > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{peAdvance > 1 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{peAdvance > 2 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{peAdvance > 3 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
            </tr>
            <tr>
              <td rowSpan='3'>外文</td>
              <td colSpan='3'>基礎</td>
              <td colSpan='3'>基礎</td>
              <td colSpan='3'>進階</td>
              <td colSpan='3'>進階</td>
            </tr>
            <tr>
              <td colSpan='3'>{language > 1 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='3'>{language > 3 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='3'>{language > 5 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='3'>{language > 7 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
            </tr>
            <tr>
              <td colSpan='12'>
                <ProgressBar
                  goal={8}
                  passed={languagePassed}
                  current={languageCurrent}
                  switched={this.state.switched}
                />
              </td>
            </tr>
            <tr>
              <td rowSpan='3'>通識</td>
              <td colSpan='2'>當代</td>
              <td colSpan='2'>公民</td>
              <td colSpan='2'>群己</td>
              <td colSpan='2'>歷史</td>
              <td colSpan='2'>文化</td>
              <td colSpan='2'>自然</td>
            </tr>
            <tr>
              <td colSpan='2'>{gnrlContemporary > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{gnrlCivil > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{gnrlGroup > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{gnrlHistory > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{gnrlCulture > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
              <td colSpan='2'>{gnrlScience > 0 ? <CheckMark color={'#5cb85c'} /> : <CheckMark color={'#ffffff'} />}</td>
            </tr>
            <tr>
              <td colSpan='12'>
                <ProgressBar
                  goal={18}
                  passed={gnrlPassed}
                  current={gnrlCurrent}
                  switched={this.state.switched}
                />
              </td>
            </tr>
            <tr>
              <td rowSpan='4'>新制通識</td>
              <td colSpan='6' rowSpan='1'>核心  {newGnrlCoreTotal}/6</td>
              <td colSpan='3' rowSpan='2' >校基本  <br />{newGnrlBasic}/6</td>
              <td colSpan='3' rowSpan='2' >跨院  <br />{newGnrlCross}/6</td>
            </tr>
            <tr>
              <td colSpan='2'>人文 </td>
              <td colSpan='2'>社會 </td>
              <td colSpan='2'>自然 </td>

            </tr>
            <tr>
              <td colSpan='2'>{newGnrlHuman > 0 ? <CheckMark color={'#5cb85c'} /> : newGnrlHuman}</td>
              <td colSpan='2'>{newGnrlSociety > 0 ? <CheckMark color={'#5cb85c'} /> : newGnrlSociety}</td>
              <td colSpan='2'>{newGnrlScience > 0 ? <CheckMark color={'#5cb85c'} /> : newGnrlScience}</td>
              <td colSpan='3'>{newGnrlBasic > 5 ? <CheckMark color={'#5cb85c'} /> : newGnrlBasic}</td>
              <td colSpan='3'>{newGnrlCross > 5 ? <CheckMark color={'#5cb85c'} /> : newGnrlCross}</td>
            </tr>
            <tr>
              <td colSpan='12'>
                <ProgressBar
                  goal={22}
                  passed={newGnrlPassed}
                  current={newGnrlCurrent}
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
              <td className='col-md-12' colSpan='6'>
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

const CheckMark = ({ color }) => (
  <div>
    <i className='fa fa-check fa-2x'
      style={{ color: color, transition: 'all 0.5s' }} />
  </div>
)
