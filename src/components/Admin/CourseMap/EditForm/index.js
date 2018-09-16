
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from 'pages/Layout'
import { InputWithButton } from 'components/FormUtils'
import styles from './style.scss'

const Form = props => (
  <Layout>
    <div className='container pt-3'>
      <div className={`row ${styles.courseMapEditBox} py-3`}>
        <div className='col-12'>
          <h4>
            課程地圖 -
            <small className='ml-3'>
              <button className='btn btn-primary mx-1'>編輯</button>
              <button className='btn btn-warning mx-1'>套用課程修改</button>
              <Link to={`/course_maps/${props.match.params.id}`}>
                <button className='btn btn-info mx-1'>預覽</button>
              </Link>
            </small>
          </h4>
        </div>
        <div className='col-12 mt-2'>
          <table className='table table-bordered'>
            <tbody>
              <tr>
                <td>適用系所：</td>
                <td />
                <td>適用學期：</td>
                <td />
                <td>應修學分：</td>
                <td />
              </tr>
              <tr>
                <td colSpan='6'>
                  <p>
                    說明：
                    <a href=''>顯示</a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-3'>
          <div className={`${styles.courseMapEditBox} p-3`}>
            <form>
              <div className='row m-0'>
                <div className='col-5 pl-0 pr-2'>
                  <select className='form-control'>
                    <option>分類</option>
                  </select>
                </div>
                <div className='col-7 pr-0'>
                  <select className='form-control'>
                    <option>系所</option>
                  </select>
                </div>
                <div className='col-12 mt-2 px-0'>
                  <InputWithButton
                    placeholder='課名'
                    button_style='primary'
                    button_content={<i className='fa fa-search' />}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='col-7 px-0'>
          <div className={`${styles.courseMapEditBox} p-3`}>
            <table className='table'>
              <tbody>
                <tr>
                  <th>課名</th>
                  <th>永久課號</th>
                  <th>開課系所</th>
                  <th>學分</th>
                  <th>建議學期</th>
                  <th>動作</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='col-2'>
          <div className={`${styles.courseMapEditBox} p-3`}>
            <ul className='list-group'>
              <li className='list-group-item text-center px-0'>
                <span className='icon fa fa-check-square-o mr-2' />
                [必修] 必修
              </li>
              <li className='list-group-item text-center px-0'>
                <span className='icon fa fa-plus text-success mr-2' />
                新增類別
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Form
