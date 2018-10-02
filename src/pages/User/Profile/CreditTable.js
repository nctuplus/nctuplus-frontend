
import React from 'react'
import { Link } from 'react-router-dom'

const CreditTable = ({ user }) => (
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

export default CreditTable
