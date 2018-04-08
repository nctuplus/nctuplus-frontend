
import React from 'react'
import { Link } from 'react-router-dom'
import Schedule from '../../../Components/Schedule'

const Profile = (props) => (
  <div className='row'>
    <div className='col-6'>
      <div className='row no-margin'>
        <div className='col-4 text-center'>
          <img className='circle' src='https://graph.facebook.com/1898906487000541/picture?type=large&amp;redirect=true&amp;width=140&amp;height=140' />
          <h4>學號:0416304</h4>
        </div>
        <div className='col-8 bg-white'>
          <br />
          系級：資工系(資工組) 108 級 <br />
          學號：0416304<br />
          信箱：yanglin5689446@gmail.com<br />
          身份：NCTU Facebook <br />
          分享課表：On <br />
          註冊日期：2015-09-04
          <hr />
          <div className='link-btn-group'>
            <button className='btn btn-primary btn-xs'>
              <Link className='flat-link text-white' to='/user/edit'><i className='fa fa-pencil' />編輯檔案</Link>
            </button>
            <button className='btn btn-warning btn-xs'>
              <Link className='flat-link text-white' to='/scores/import'><i className='fa fa-refresh' />匯入成績</Link>
            </button>
            <button className='btn btn-warning btn-xs'>
              <Link className='flat-link text-white' to='/scores/gpa'><i className='fa fa-check' />GPA計算</Link>
            </button>
            <button className='btn btn-warning btn-xs'>
              <Link className='flat-link text-white' to='/course_maps/198'><i className='fa fa-book' />課程地圖</Link>
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className='row bg-white no-margin'>
        <div md={4} className='text-center'>
          歷年平均分數
          <h4 className='bold'>81.8</h4>
        </div>
        <div md={4} className='text-center'>
          總排名
          <h4 className='bold'>Not Yet</h4>
        </div>
        <div md={4} className='text-center'>
          距離畢業
          <h4 className='bold'>
            612天
          </h4>
        </div>
        <div md={4} className='text-center'>
          本學期學分
          <h4 className='bold'>0</h4>
        </div>
        <div md={4} className='text-center'>
          已修學分
          <h4 className='bold'>75</h4>
        </div>
        <div md={4} className='text-center'>
          畢業學分
          <h4 className='bold'>128</h4>
        </div>
      </div>

      <br />

      <div className='row bg-white no-margin'>
        <div md={12}>
          <table className='table table-bordered '>
            <tbody>
              <tr>
                <td className='text-center no-margin col-md-2' rowSpan='2'>服務學習</td>
                <td className='text-center no-margin' colSpan='3'>一</td>
                <td className='text-center no-margin' colSpan='3'>二</td>
              </tr>
              <tr>
                <td className='text-center no-margin' colSpan='3'>
                  <i className='fa fa-check fa-2x' />
                </td>
                <td className='text-center no-margin' colSpan='3'>
                  <i className='fa fa-check fa-2x' />
                </td>
              </tr>
              <tr>
                <td className='text-center no-margin col-md-2' rowSpan='2'>藝文賞析</td>
                <td className='text-center no-margin' colSpan='3'>上</td>
                <td className='text-center no-margin' colSpan='3'>下</td>
              </tr>
              <tr>
                <td className='text-center no-margin' colSpan='3' />
                <td className='text-center no-margin' colSpan='3' />
              </tr>
              <tr>
                <td className='text-center no-margin col-md-2' rowSpan='2'>體育</td>
                <td className='text-center no-margin'>大一</td>
                <td className='text-center no-margin'>大一</td>
                <td className='text-center no-margin'>選修</td>
                <td className='text-center no-margin'>選修</td>
                <td className='text-center no-margin'>選修</td>
                <td className='text-center no-margin'>選修</td>
              </tr>
              <tr>
                <td className='text-center no-margin'>
                  <i className='fa fa-check fa-2x' />
                </td>
                <td className='text-center no-margin'>
                  <i className='fa fa-check fa-2x' />
                </td>
                <td className='text-center no-margin'>
                  <i className='fa fa-check fa-2x' />
                </td>
                <td className='text-center no-margin' />
                <td className='text-center no-margin' />
                <td className='text-center no-margin' />
              </tr>
              <tr>
                <td className='text-center no-margin col-md-2'>
                  外文
                </td>
                <td className='text-center no-margin' colSpan='6'>
                  <div className='progress no-margin'>
                    <div className='progress-bar progress-bar-success'>
                      <span>基礎 <strong>2/4</strong></span>
                    </div>
                    <div className='progress-bar'>
                      <span>進階(其他) <strong>0/2</strong></span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className='text-center no-margin' rowSpan='3'>通識</td>
                <td className='text-center no-margin'>當代</td>
                <td className='text-center no-margin'>公民</td>
                <td className='text-center no-margin'>群己</td>
                <td className='text-center no-margin'>歷史</td>
                <td className='text-center no-margin'>文化</td>
                <td className='text-center no-margin'>自然</td>
              </tr>
              <tr>
                <td className='text-center no-margin'>
                  <i className='fa fa-check fa-2x' />
                </td>
                <td className='text-center no-margin'>
                  <i className='fa fa-check fa-2x' />
                </td>
                <td className='text-center no-margin' />
                <td className='text-center no-margin'>
                  <i className='fa fa-check fa-2x' />
                </td>
                <td className='text-center no-margin'>
                  <i className='fa fa-check fa-2x' />
                </td>
                <td className='text-center no-margin' />
              </tr>
              <tr>
                <td className='text-center no-margin' colSpan='6'>
                  <div className='progress no-margin'>
                    <div className='progress-bar dimension-world'>
                      <span>當代 <strong>2/2</strong></span>
                    </div>
                    <div className='progress-bar'>
                      <span>其他 <strong>6/18</strong></span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            註：外語學分目前不會計算第二外語及進修英文(因無法得知是否通過中高級初試)<br />
            需請同學自行計算！
          </p>
        </div>
        <div className='col-12'>
          <table className='table table-bordered '>
            <tbody>
              <tr>
                <td className='col-md-12' colSpan='3'>
                  <h4 className='text-center'>
                    <Link to='/course_maps/198'>資工系(資工組) 入學年度:104</Link>
                    <a href='/user/statistics_table' className='btn btn-info pull-right' target='blank'>產生報表</a>
                  </h4>
                </td>
              </tr>
              <tr>
                <td className='col-md-2 text-center'>基本必修</td>
                <td className='col-md-10 text-center' colSpan='2'>29/56</td>
              </tr>
              <tr>
                <td className='col-md-2 text-center'>物/化/生三選一</td>
                <td className='col-md-10 text-center' colSpan='2'>
                  <i className='fa fa-check fa-2x' />
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            註：計算錯誤可能原因如下 (1)系統缺少抵免/免修課程  (2)使用者未選擇該課所屬學程/領域
          </p>
        </div>
      </div>
    </div>
    <div className='col-md-6 bg-white'>
      <div className='row schedule-header'>
        <div className='col-3'>
          <select className='form-control'>
            <option value='16'>104上</option>
          </select>
        </div>
        <button className='btn btn-info'>
          <i className='fa fa-share-square-o' />
        </button>
      </div>
      <div className='row no-margin'>
        <Schedule />
      </div>
    </div>
  </div>
)

export default Profile
