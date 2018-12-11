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
    let serviceOne = switched ? user.service_one : curr.basic.service_one || user.service_one
    let serviceTwo = switched ? user.service_two : curr.basic.service_two || user.service_two
    let artOne = switched ? user.art_one : curr.basic.art_one + user.art_one
    let artTwo = switched ? user.art_two : curr.basic.art_two + user.art_two

    let pe1 = switched ? (user.pe_basic > 0 ? 1 : 0) : (user.pe_basic + curr.basic.pe_basic > 0 ? 1 : 0)
    let pe2 = switched ? (user.pe_basic > 1 ? 1 : 0) : (user.pe_basic + curr.basic.pe_basic > 1 ? 1 : 0)
    let pe3 = switched ? (user.pe > 0 ? 1 : 0) : (user.pe + curr.basic.pe > 0 ? 1 : 0)
    let pe4 = switched ? (user.pe > 1 ? 1 : 0) : (user.pe + curr.basic.pe > 1 ? 1 : 0)
    let pe5 = switched ? (user.pe > 2 ? 1 : 0) : (user.pe + curr.basic.pe > 2 ? 1 : 0)
    let pe6 = switched ? (user.pe > 3 ? 1 : 0) : (user.pe + curr.basic.pe > 3 ? 1 : 0)

    let languagePassed = switched ? user.language.total : user.language.total + curr.language.total

    let gnrlContemporary = switched ? user.general.contemporary : curr.general.contemporary + user.general.contemporary
    let gnrlCivil = switched ? user.general.civil : curr.general.civil + user.general.civil
    let gnrlGroup = switched ? user.general.group : curr.general.group + user.general.group
    let gnrlHistory = switched ? user.general.history : curr.general.history + user.general.history
    let gnrlCulture = switched ? user.general.culture : curr.general.culture + user.general.culture
    let gnrlScience = switched ? user.general.science : curr.general.science + user.general.science

    let gnrlPassed = user.general.contemporary + user.general.civil + user.general.group + user.general.history + user.general.culture + user.general.science
    let gnrlCurr = curr.general.contemporary + curr.general.civil + curr.general.group + curr.general.history + curr.general.culture + curr.general.science

    let newGnrlHuman = switched ? user.new_general.core.human : curr.new_general.core.human + user.new_general.core.human
    let newGnrlSociety = switched ? user.new_general.core.society : curr.new_general.core.society + user.new_general.core.society
    let newGnrlScience = switched ? user.new_general.core.science : curr.new_general.core.science + user.new_general.core.science
    let newGnrlBasic = switched ? user.new_general.basic : curr.new_general.basic + user.new_general.basic
    let newGnrlCross = switched ? user.new_general.cross : curr.new_general.cross + user.new_general.cross

    let newGnrlPassed = user.new_general.total
    let newGnrlCurr = curr.new_general.total
    let newGnrlCoreTotal = switched ? user.new_general.core.total : user.new_general.core.total + curr.new_general.core.total

    // <<<<<<< HEAD
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
              <td colSpan='6'>{serviceOne > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='6'>{serviceTwo > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
            </tr>
            <tr>
              <td rowSpan='2'>藝文賞析</td>
              <td colSpan='6'>上</td>
              <td colSpan='6'>下</td>
            </tr>
            <tr>
              <td colSpan='6'>{artOne > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='6'>{artTwo > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
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
              <td colSpan='2'>{pe1 > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{pe2 > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{pe3 > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{pe4 > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{pe5 > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{pe6 > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
            </tr>
            <tr>
              <td rowSpan='3'>外文</td>
              <td colSpan='3'>基礎</td>
              <td colSpan='3'>基礎</td>
              <td colSpan='3'>進階</td>
              <td colSpan='3'>進階</td>
            </tr>
            <tr>
              <td colSpan='3'>{languagePassed > 1 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='3'>{languagePassed > 3 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='3'>{languagePassed > 5 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='3'>{languagePassed > 7 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
            </tr>
            <tr>
              <td colSpan='12'>
                <ProgressBar
                  goal={8}

                  passed={user.language.total}
                  current={curr.language.total}
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
              <td colSpan='2'>{gnrlContemporary > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{gnrlCivil > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{gnrlGroup > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{gnrlHistory > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{gnrlCulture > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
              <td colSpan='2'>{gnrlScience > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br />}</td>
            </tr>
            <tr>
              <td colSpan='12'>
                <ProgressBar
                  goal={18}
                  passed={gnrlPassed}
                  current={gnrlCurr}
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
              <td colSpan='2'>{newGnrlHuman > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : newGnrlHuman}</td>
              <td colSpan='2'>{newGnrlSociety > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : newGnrlSociety}</td>
              <td colSpan='2'>{newGnrlScience > 0 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : newGnrlScience}</td>
              <td colSpan='3'>{newGnrlBasic > 5 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : newGnrlBasic}</td>
              <td colSpan='3'>{newGnrlCross > 5 ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : newGnrlCross}</td>
            </tr>
            <tr>
              <td colSpan='12'>
                <ProgressBar
                  goal={22}
                  passed={newGnrlPassed}
                  current={newGnrlCurr}
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
// =======
// const CreditTable = ({ user }) => (
//   <div className='bg-white p-2'>
//     <table className='table table-bordered '>
//       <tbody className='text-center'>
//         <tr>
//           <td rowSpan='2'>服務學習</td>
//           <td colSpan='6'>一</td>
//           <td colSpan='6'>二</td>
//         </tr>
//         <tr>
//           <td colSpan='6'>{(user.service_one >= 1) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='6'>{(user.service_two >= 1) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//         </tr>
//         <tr>
//           <td rowSpan='2'>藝文賞析</td>
//           <td colSpan='6'>上</td>
//           <td colSpan='6'>下</td>
//         </tr>
//         <tr>
//           <td colSpan='6'>{(user.art_one >= 1) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='6'>{(user.art_two >= 1) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//         </tr>
//         <tr>
//           <td rowSpan='2'>體育</td>
//           <td colSpan='2'>大一</td>
//           <td colSpan='2'>大一</td>
//           <td colSpan='2'>選修</td>
//           <td colSpan='2'>選修</td>
//           <td colSpan='2'>選修</td>
//           <td colSpan='2'>選修</td>
//         </tr>
//         <tr>
//           <td colSpan='2'>{(user.pe_basic >= 1) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='2'>{(user.pe_basic >= 2) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='2'>{(user.pe >= 1) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='2'>{(user.pe >= 2) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='2'>{(user.pe >= 3) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='2'>{(user.pe >= 4) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//         </tr>
//         <tr>
//           <td rowSpan='3'>外文</td>
//           <td colSpan='3'>基礎</td>
//           <td colSpan='3'>基礎</td>
//           <td colSpan='3'>進階</td>
//           <td colSpan='3'>進階</td>
//         </tr>
//         <tr>
//           <td colSpan='3'>{(user.language.basic >= 2) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='3'>{(user.language.basic >= 4) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='3'>{(user.language.advanced >= 2) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//           <td colSpan='3'>{(user.language.advanced >= 4) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : <br/>}</td>
//         </tr>
//         <tr>
//           <td colSpan='12'>
//             <div className='progress' />
//           </td>
//         </tr>
//         <tr>
//           <td rowSpan='3'>通識</td>
//           <td colSpan='2'>當代</td>
//           <td colSpan='2'>公民</td>
//           <td colSpan='2'>群己</td>
//           <td colSpan='2'>歷史</td>
//           <td colSpan='2'>文化</td>
//           <td colSpan='2'>自然</td>
//         </tr>
//         <tr>
//           <td colSpan='2'>{gnrlContemporary}</td>
//           <td colSpan='2'>{gnrlCivil}</td>
//           <td colSpan='2'>{gnrlGroup}</td>
//           <td colSpan='2'>{gnrlHistory}</td>
//           <td colSpan='2'>{gnrlCulture}</td>
//           <td colSpan='2'>{gnrlScience}</td>
//         </tr>
//         <tr>
//           <td colSpan='12'>
//             <div className='progress' />
//           </td>
//         </tr>
//         <tr>
//           <td rowSpan='4'>新制通識</td>
//           <td colSpan='6' rowSpan='1'>核心  XD/6</td>
//           <td colSpan='3' rowSpan='2' >校基本  <br />XD/6</td>
//           <td colSpan='3' rowSpan='2' >跨院  <br />XD/6</td>
//         </tr>
//         <tr>
//           <td colSpan='2'>人文 </td>
//           <td colSpan='2'>社會 </td>
//           <td colSpan='2'>自然 </td>

//         </tr>
//         <tr>
//           <td colSpan='2'>{(user.new_general.core.human >= 2) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : user.new_general.core.human}</td>
//           <td colSpan='2'>{(user.new_general.core.society >= 2) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : user.new_general.core.society}</td>
//           <td colSpan='2'>{(user.new_general.core.science >= 2) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : user.new_general.core.science}</td>
//           <td colSpan='3'>{(user.new_general.basic >= 6) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : user.new_general.basic}</td>
//           <td colSpan='3'>{(user.new_general.cross >= 6) ? <i className='fa fa-check fa-2x' style={{ color: '#5cb85c' }} /> : user.new_general.core.science}</td>
//         </tr>
//         <tr>
//           <td colSpan='12'>
//             <div className='progress' />
//           </td>
//         </tr>
//       </tbody>
//     </table>
//     <p className='p-3'>
//       註：外語學分目前不會計算第二外語及進修英文(因無法得知是否通過中高級初試)<br />
//       需請同學自行計算！
//     </p>
//     <table className='table table-bordered '>
//       <tbody>
//         <tr>
//           <td className='col-md-12' colSpan='6'>
//             <h4 className='text-center'>
//               <Link to='/course_maps/198'>{ user.department } 入學年度: { user.enroll_year }</Link>
//               <a href='/user/statistics_table' className='btn btn-info pull-right' target='blank'>產生報表</a>
//             </h4>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//     <p>
//       註：計算錯誤可能原因如下 (1)系統缺少抵免/免修課程  (2)使用者未選擇該課所屬學程/領域
//     </p>
//   </div>
// )
// >>>>>>> 28c5ec8... on user page new card and new credit table

export default CreditTable
