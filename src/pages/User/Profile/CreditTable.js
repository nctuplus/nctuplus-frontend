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
    let switched = this.state.switched ? 1 : 0

    /* for all classes, class[0] is current+passed, class[1] is passed */

    let serviceOne = [current.basic.service_one + user.service_one, user.service_one]
    let serviceTwo = [current.basic.service_two + user.service_two, user.service_two]
    let artOne = [current.basic.art_one + user.art_one, user.art_one]
    let artTwo = [current.basic.art_two + user.art_two, user.art_two]

    let peBasic = [current.basic.pe_basic + user.pe_basic, user.pe_basic]
    let peAdvance = [current.basic.pe + user.pe, user.pe]

    let languagePassed = user.language.total
    let languageCurrent = current.language.total
    let language = [languagePassed + languageCurrent, languagePassed]

    let gnrlContemporary = [current.general.contemporary + user.general.contemporary, user.general.contemporary]
    let gnrlCivil = [current.general.civil + user.general.civil, user.general.civil]
    let gnrlGroup = [current.general.group + user.general.group, user.general.group]
    let gnrlHistory = [current.general.history + user.general.history, user.general.history]
    let gnrlCulture = [current.general.culture + user.general.culture, user.general.culture]
    let gnrlScience = [current.general.science + user.general.science, user.general.science]
    let gnrlPassed = user.general.total
    let gnrlCurrent = current.general.total

    let newGnrlHuman = [current.new_general.core.human + user.new_general.core.human, user.new_general.core.human]
    let newGnrlSociety = [current.new_general.core.society + user.new_general.core.society, user.new_general.core.society]
    let newGnrlScience = [current.new_general.core.science + user.new_general.core.science, user.new_general.core.science]
    let newGnrlBasic = [current.new_general.basic + user.new_general.basic, user.new_general.basic]
    let newGnrlCross = [current.new_general.cross + user.new_general.cross, user.new_general.cross]
    let newGnrlCoreTotal = [user.new_general.core.total + current.new_general.core.total, user.new_general.core.total]
    let newGnrlPassed = user.new_general.total
    let newGnrlCurrent = current.new_general.total

    // define 3 types of checkmark color
    let CheckMarkPassed = '#5cb85c'
    let CheckMarkCurrent = '#ff8800'
    let CheckMarkBlank = '#ffffff'

    function getTableContent (classes, threshold) {
      /*
      Input: class array, checkmark threshold
      Output: this function will return a proper content to the table block
              ex: blank, different color checkmark, or number
      */
      if (classes[switched] > threshold) {
        return classes[1] > threshold ? <CheckMark color={CheckMarkPassed} /> : <CheckMark color={CheckMarkCurrent} />
      } else {
        return <CheckMark color={CheckMarkBlank} />
      }
    }
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
              <td colSpan='6'>{getTableContent(serviceOne, 0, false)}</td>
              <td colSpan='6'>{getTableContent(serviceTwo, 0, false)}</td>
            </tr>
            <tr>
              <td rowSpan='2'>藝文賞析</td>
              <td colSpan='6'>上</td>
              <td colSpan='6'>下</td>
            </tr>
            <tr>
              <td colSpan='6'>{getTableContent(artOne, 0, false)}</td>
              <td colSpan='6'>{getTableContent(artTwo, 0, false)}</td>
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
              <td colSpan='2'>{getTableContent(peBasic, 0, false)}</td>
              <td colSpan='2'>{getTableContent(peBasic, 1, false)}</td>
              <td colSpan='2'>{getTableContent(peAdvance, 0, false)}</td>
              <td colSpan='2'>{getTableContent(peAdvance, 1, false)}</td>
              <td colSpan='2'>{getTableContent(peAdvance, 2, false)}</td>
              <td colSpan='2'>{getTableContent(peAdvance, 3, false)}</td>
            </tr>
            <tr>
              <td rowSpan='3'>外文</td>
              <td colSpan='3'>基礎</td>
              <td colSpan='3'>基礎</td>
              <td colSpan='3'>進階</td>
              <td colSpan='3'>進階</td>
            </tr>
            <tr>
              <td colSpan='3'>{getTableContent(language, 1, false)}</td>
              <td colSpan='3'>{getTableContent(language, 3, false)}</td>
              <td colSpan='3'>{getTableContent(language, 5, false)}</td>
              <td colSpan='3'>{getTableContent(language, 7, false)}</td>
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
              <td colSpan='2'>{getTableContent(gnrlContemporary, 0, false)}</td>
              <td colSpan='2'>{getTableContent(gnrlCivil, 0, false)}</td>
              <td colSpan='2'>{getTableContent(gnrlGroup, 0, false)}</td>
              <td colSpan='2'>{getTableContent(gnrlHistory, 0, false)}</td>
              <td colSpan='2'>{getTableContent(gnrlCulture, 0, false)}</td>
              <td colSpan='2'>{getTableContent(gnrlScience, 0, false)}</td>
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
              <td colSpan='6' rowSpan='1'>核心  {newGnrlCoreTotal[switched]}/6</td>
              <td colSpan='3' rowSpan='2' >校基本  <br />{newGnrlBasic[switched]}/6</td>
              <td colSpan='3' rowSpan='2' >跨院  <br />{newGnrlCross[switched]}/6</td>
            </tr>
            <tr>
              <td colSpan='2'>人文 </td>
              <td colSpan='2'>社會 </td>
              <td colSpan='2'>自然 </td>

            </tr>
            <tr>
              {/* new general classes cannot use the getTableContent function, because in some cases it need a number but not a CheckMark */}
              <td colSpan='2'>{newGnrlHuman[switched] > 0 ? (newGnrlHuman[1] > 0 ? <CheckMark color={CheckMarkPassed} /> : <CheckMark color={CheckMarkCurrent} />) : newGnrlHuman[switched]}</td>
              <td colSpan='2'>{newGnrlSociety[switched] > 0 ? (newGnrlSociety[1] > 0 ? <CheckMark color={CheckMarkPassed} /> : <CheckMark color={CheckMarkCurrent} />) : newGnrlSociety[switched]}</td>
              <td colSpan='2'>{newGnrlScience[switched] > 0 ? (newGnrlScience[1] > 0 ? <CheckMark color={CheckMarkPassed} /> : <CheckMark color={CheckMarkCurrent} />) : newGnrlScience[switched]}</td>
              <td colSpan='3'>{newGnrlBasic[switched] > 5 ? (newGnrlBasic[1] > 5 ? <CheckMark color={CheckMarkPassed} /> : <CheckMark color={CheckMarkCurrent} />) : newGnrlBasic[switched]}</td>
              <td colSpan='3'>{newGnrlCross[switched] > 5 ? (newGnrlCross[1] > 5 ? <CheckMark color={CheckMarkPassed} /> : <CheckMark color={CheckMarkCurrent} />) : newGnrlCross[switched]}</td>
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
