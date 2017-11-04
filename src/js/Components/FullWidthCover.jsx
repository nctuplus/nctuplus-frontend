
import React from 'react'

class FullWidthCover extends React.Component {
  render () {
    return (
      <div
        className='full-width-cover'
        ref='cover-canvas'
        style={{
          background: 'url("' + this.props.images[0] + '") no-repeat',
          backgroundSize: 'cover'
        }}
      />
    )
  }
}

export default FullWidthCover
