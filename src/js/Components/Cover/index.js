
import React from 'react'
import './style.scss'

const CoverSlogan = (props) => (
  <div className='slogan'>
    <h2 className='text-center' dangerouslySetInnerHTML={{ __html: props.children }} />
  </div>
)

const CoverWrapper = (props) => (
  <div className='cover-wrapper'>
    <div className='container'>
      { props.children }
    </div>
  </div>
)

export { CoverWrapper, CoverSlogan }
