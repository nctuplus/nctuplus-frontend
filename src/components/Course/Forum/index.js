
import React from 'react'
import { Link } from 'react-router-dom'

const Forum = ({ children }) => (
  <div >
    <div className='border-left-grey bg-white p-5 my-5'>
      <h4 className='d-inline-block'>
        <i className='fa fa-comment-o' />課程心得/討論
      </h4>
      <h4 className='d-inline-block'>
        <Link to='/discuss/new'>我要發文</Link>
      </h4>
    </div>
    <div>
      { children }
    </div>
  </div>
)

export default Forum
