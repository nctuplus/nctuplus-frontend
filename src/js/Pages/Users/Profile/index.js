
import React from 'react'
import { Link } from 'react-router-dom'
import Timetable from '../../../Components/Timetable'

const UserCard = ({ user }) => (
  <div className='card'>
    <div className='text-center pt-3'>
      <img className='circle' width='128' height='128' src={user.avatar_url} />
      <h4 className='mt-3'>{ user.name }</h4>
    </div>
    <div className='card-body mx-auto'>
      系級：{ user.department } { user.degree } 級 <br />
      學號：{ user.student_id }<br />
      信箱：{ user.degree }<br />
      身份：{ user.identity } <br />
      分享課表：{ user.allow_schedule_share } <br />
      註冊日期：{ user.register_date }
    </div>
    <div className='card-footer text-center'>
      <button className='btn btn-primary btn-sm mx-1'>
        <Link className='flat-link text-white' to='/user/edit'>
          <i className='fa fa-pencil mx-1' />編輯檔案
        </Link>
      </button>
      <button className='btn btn-warning btn-sm mx-1'>
        <Link className='flat-link text-white' to='/scores/import'>
          <i className='fa fa-refresh mx-1' />匯入成績
        </Link>
      </button>
      <button className='btn btn-warning btn-sm mx-1'>
        <Link className='flat-link text-white' to='/scores/gpa'>
          <i className='fa fa-check mx-1' />GPA計算
        </Link>
      </button>
      <button className='btn btn-warning btn-sm mx-1'>
        <Link className='flat-link text-white' to='/course_maps/198'>
          <i className='fa fa-book mx-1' />課程地圖
        </Link>
      </button>
    </div>
  </div>
)

const UserAnalysis = ({ user }) => (
  <div className='row bg-white'>
    <div className='col-4 p-1 text-center'>
      歷年平均分數
      <h4 className='bold'>{ user.average_grade }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      總排名
      <h4 className='bold'>{ user.is_graduated }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      距離畢業
      <h4 className='bold'>{ user.graduate_countdown } 天</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      本學期學分
      <h4 className='bold'>{ user.credits_this_semaster }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      已修學分
      <h4 className='bold'>{ user.all_credits }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      畢業學分
      <h4 className='bold'>{ user.graduate_credits }</h4>
    </div>
  </div>
)

const UserCreditTable = ({ user }) => (
  <div className='bg-white p-2'>
    <table className='table table-bordered '>
      <tbody className='text-center'>
        <tr>
          <td rowSpan='2'>服務學習</td>
          <td colSpan='3'>一</td>
          <td colSpan='3'>二</td>
        </tr>
        <tr>
          <td colSpan='3' />
          <td colSpan='3' />
        </tr>
        <tr>
          <td rowSpan='2'>藝文賞析</td>
          <td colSpan='3'>上</td>
          <td colSpan='3'>下</td>
        </tr>
        <tr>
          <td colSpan='3' />
          <td colSpan='3' />
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
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>外文</td>
          <td colSpan='6'>
            <div className='progress' />
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
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td colSpan='6'>
            <div className='progress' />
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

const Profile = (props) => (
  <div className='row mt-2'>
    <div className='col-12 col-lg-6'>

      <div className='m-0 m-md-2'>
        <UserCard user={{}} />
      </div>

      <div className='m-0 m-md-2 p-3' >
        <UserAnalysis user={{}} />
      </div>

      <div className='m-0 m-md-2'>
        <UserCreditTable user={{}} />
      </div>
    </div>
    <div className='col-12 col-lg-6'>
      <div className='m-0 m-md-1 bg-white'>
        <Timetable />
      </div>
    </div>
  </div>
)

export default Profile
