
import React from 'react'
import './style.scss'

const Footer = (props) => (
  /* if current page is login page, the footer should be bottom-fixed. */
  <footer className='d-flex justify-content-center align-items-center'>
    <div className='d-flex justify-content-center align-items-center'>
      <span className='mx-2'>© Copyright NCTU+ 2016</span>
      <a className='d-inline-flex' href='https://www.facebook.com/nctuplus' target='_blank'>
        <i className='fa fa-2x fa-facebook-square mx-1' />
      </a>
      <a className='d-inline-flex' href='https://github.com/nctuplus/nctuplus/' target='_blank'>
        <i className='fa fa-2x fa-github-square mx-1' />
      </a>
      <a className='d-inline-flex' href='mailto:nctuplus@gmail.com' target='_blank'>
        <i className='fa fa-envelope fa-2x mx-1' />
      </a>
    </div>
  </footer>
)

export default Footer
