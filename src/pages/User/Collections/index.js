import React from 'react'

const Collections = (props) => {
  return (
    <div>
      <div className='container'>
        <p className='text-center'>
          <button className='btn btn-info'>使用說明</button>
        </p>
        <div className='d-flex'>
          <table className='table table-hover text-center bg-white col-7 mr-auto'>
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
          <div className='col-md-4 bg-white mb-4'>
            <div className='mt-2'>朋友數:0
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
          </div>
        </div>
        <div className='d-flex'>
          <div className='col-md-4 offset-md-8 bg-white mb-4'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>交友邀請:2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>邊緣人</th>
                  <td>資工系</td>
                  <td><button type='button' className='btn btn-primary btn-sm'>確認</button></td>
                  <td><button type='button' className='btn btn-warning btn-sm'>略過</button></td>
                </tr>
                <tr>
                  <th scope='row'>夯</th>
                  <td>資工系</td>
                  <td><button type='button' className='btn btn-primary btn-sm'>確認</button></td>
                  <td><button type='button' className='btn btn-warning btn-sm'>略過</button></td>
                </tr>
              </tbody>
            </table>
          </div>
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

export default CollectionsTable
