
import React from 'react'
import { Button } from 'react-bootstrap'

class Collections extends React.Component {
  render () {
    return (
      <div>
        <p className='text-center'>
          <Button bsStyle='info'>使用說明</Button>
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
