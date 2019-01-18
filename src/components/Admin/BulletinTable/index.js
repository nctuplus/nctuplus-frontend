
import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './style.scss'

const Title = {
  'bulletin': '標題',
  'slogan': '標語',
  'background': '背景'
}

const BulletinTable = props => (
  <div>
    {
      props.data
        ? <table className={classNames('table', 'table-bordered', styles.tableBordered, 'table-striped', styles.tableStriped)}>
          <thead>
            <tr className={classNames(styles.trHide)}>
              <th>{ Title[props.type] }</th>
              <th>{ props.type === 'bulletin' ? '上線時間' : '建立時間' }</th>
              <th>{ props.type === 'bulletin' ? '下線時間' : '修改時間' }</th>
              { props.type === 'bulletin' ? <th>發文者</th> : null }
              { props.type === 'slogan' ? <th>狀態</th> : null }
              <th />
            </tr>
          </thead>
          <tbody>
            {
              props.data.map((data, index) => (
                <tr key={index}>
                  <td className={classNames(styles.trBefore)} data-th='標題'>
                    {
                      props.type !== 'background'
                        ? data.title
                        : <img
                          className='d-inline-block'
                          alt='尚無圖片!'
                          height='100'
                          src={`${SERVER_URL}${data.cover_image.url}`}
                        />
                    }
                  </td>
                  <td className={classNames(styles.trBefore)} data-th='上線時間'>
                    { props.type === 'bulletin'
                      ? data.begin_time.slice(0, 10)
                      : data.created_at.slice(0, 10)
                    }
                  </td>
                  <td className={classNames(styles.trBefore)} data-th='下線時間'>
                    { props.type === 'bulletin'
                      ? data.end_time.slice(0, 10)
                      : data.updated_at.slice(0, 10)
                    }
                  </td>
                  { props.type === 'bulletin' ? <td className={classNames(styles.trBefore)} data-th='發文者'>{ data.author.name }</td> : null }
                  { props.type === 'slogan' ? <td className={classNames(styles.trBefore)} data-th='顯示'>{ data.display ? '顯示' : '隱藏' }</td> : null }
                  <td>
                    {
                      props.type !== 'background'
                        ? <Link to={`/admin/${props.type}/${data.id}/edit`} className='ml-3'>
                          <button className='btn btn-primary' >編輯</button>
                        </Link>
                        : <div />
                    }
                    <button
                      className='btn btn-danger ml-3'
                      onClick={() => props.onDelete(data.id)}
                    >
                      刪除
                    </button>
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
