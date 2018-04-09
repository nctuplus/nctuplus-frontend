
import React from 'react'
import { Link } from 'react-router-dom'

class PageNotFound extends React.Component {
  render () {
    return (
      <div className='page-wrapper'>
        <div className='text-center mt-5'>
          <span style={{ fontSize: 256 }}>
            <i className='fa fa-exclamation-triangle' />
          </span>
          <br />
          <span style={{ fontSize: 32 }}>
            找不到這個頁面喔！<br />
            <Link to='/'>點此</Link>回到首頁
          </span>

        </div>
      </div>
    )
  }
}

export default PageNotFound
