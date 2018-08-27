
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Title = {
  'bulletin': '標題',
  'slogan': '標語',
  'background': '背景'
}

const BulletinTable = props => (
  <div>
    {
      props.data
        ? <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>{ Title[props.type] }</th>
              <th>{ props.type === 'bulletin' ? '上線時間' : '建立時間' }</th>
              <th>{ props.type === 'bulletin' ? '下線時間' : '修改時間' }</th>
              { /* 這裏condition render 後面不知道要放什麼才不會有warning */ }
              { props.type === 'slogan' ? <th>狀態</th> : '' }
              <th />
            </tr>
          </thead>
          <tbody>
            {
              props.data.map((bulletin, index) => (
                <tr key={index}>
                  <td>{ bulletin.title }</td>
                  <td>{ bulletin.created_at.slice(0, 10) }</td>
                  <td>{ bulletin.updated_at.slice(0, 10) }</td>
                  { /* 這裏condition render 後面不知道要放什麼才不會有warning */ }
                  { props.type === 'slogan' ? <td>顯示</td> : '' }
                  <td>
                    {
                      props.type !== 'background'
                        ? <Link to={`/admin/${props.type}/${bulletin.id}/edit`}>
                          <button className='btn btn-primary' >編輯</button>
                        </Link>
                        : <div />
                    }
                    <button className='btn btn-danger ml-3' >刪除</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        : <div />
    }
  </div>
)

export default BulletinTable
