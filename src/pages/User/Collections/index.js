import React from 'react'
import styles from './style.scss'

const CollectionsTable = (props) => (
  <div>
    {
      Users &&
         Users.map((data, index) => (
           <Collections {...data} key={index} />
         ))
    }
  </div>
)

const Collections = (props) => {
  return (
    <div className='row'>
      <div className='m-2 mt-4 col-8'>
        <table className='table table-hover text-center bg-white  mr-4'>
          <thead>
            <tr>
              <td>名稱</td>
              <td>系所</td>
              <td>課表年級</td>
              <td />
            </tr>
          </thead>
          <tbody>
            {
              props.people.map((people, index) => (
                <tr key={people.id}>
                  <td >{people.name}</td>
                  <td>{people.department}</td>
                  <td>{people.semester}</td>
                  <td />
                </tr>
              ))

            }
          </tbody>
        </table>
      </div>

      <div style={{ backgroundColor: '#E9EAED' }} className={`mt-4 mb-4 ${styles.pullRight}`}>
        <div className='p-3 bg-white '>
          朋友數： 0&emsp;
          <button type='button' className='btn btn-primary btn-sm mr-1 pt-0 pb-0 pl-1 pr-1 ml-2'>查看朋友</button>
          <button type='button' className='btn btn-primary btn-sm mr-1 pt-0 pb-0 pl-1 pr-1'>尋找朋友</button>
          <button type='button' className='btn btn-primary btn-sm pt-0 pb-0 pl-1 pr-1'>隱私設定</button>
          <div className='input-group input-group-sm mt-4 mb-3'>
            <input type='text' className='form-control' placeholder=' ' />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button' id='button-addon2'><i className='fa fa-search' /></button>
            </div>
          </div>
        </div>

        <div className='mt-3 p-3 bg-white mb-2'>
          <div className='m-2'>交友邀請： 2</div>
          <table className='table'>
            <tbody>
              <tr>
                <td>邊緣人</td>
                <td>資工系</td>
                <td><button type='button' className='btn btn-primary btn-sm'>確認</button></td>
                <td><button type='button' className='btn btn-warning btn-sm'>略過</button></td>
              </tr>
              <tr>
                <td>夯</td>
                <td>資工系</td>
                <td><button type='button' className='btn btn-primary btn-sm'>確認</button></td>
                <td><button type='button' className='btn btn-warning btn-sm'>略過</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const Users = [
  {
    people: [
      {
        'id': 1,
        'name': '白白',
        'department': '資工系',
        'semester': '107下'

      },
      {
        'id': 2,
        'name': '阿旦',
        'department': '電機系',
        'semester': '106下'
      },
      {
        'id': 3,
        'name': '嘿嘿',
        'department': '傳科系',
        'semester': '107上'
      },
      {
        'id': 4,
        'name': '嘿嘿哈哈',
        'department': '電工系',
        'semester': '105上'
      },
      {
        'id': 5,
        'name': '台中花博真心推',
        'department': '業配系',
        'semester': '107下'
      }
    ]
  }
]

export default CollectionsTable
