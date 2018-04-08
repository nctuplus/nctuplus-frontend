
import React from 'react'

class Collections extends React.Component {
  render () {
    return (
      <div>
        <p className='text-center'>
          <button className='btn btn-info'>使用說明</button>
        </p>
        <table className='table table-hover text-center bg-white'>
          <thead>
            <tr>
              <td>名稱</td>
              <td>系所</td>
              <td>課表年級</td>
              <td />
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    )
  }
}

export default Collections
