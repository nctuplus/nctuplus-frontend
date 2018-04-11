
import React from 'react'

class ShareButton extends React.Component {
  render () {
    return (
      <div>
        <div className='share-button'>
          <button className='btn btn-primary'>
            <i className='fa fa-export' />分享
          </button>
          <div className='d-none'>
            <i className='fa fa-pinterest' />
            <i className='fa fa-facebook' />
            <i className='fa fa-googleplus' />
            <i className='fa fa-twitter' />
            <i className='fa fa-paper-plane' />
          </div>
        </div>
      </div>
    )
  }
}

export default ShareButton
