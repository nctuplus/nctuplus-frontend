
import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.scss'

const Intro = withRouter((props) => (
  <div className='intro d-block text-center bg-white'>
    <h2 className='m-5'>{ props.title }</h2>
    { props.children }
  </div>
))

const IntroItem = withRouter((props) => (
  <div className='item d-inline-block clickable' onClick={() => props.history.push(props.to)}>
    <img src={props.image} />
    <h4 className='mt-3'>{ props.title }</h4>
    { props.is_new && <span className='new-feature'>NCTU+新功能!</span> }
    <p>{ props.children }</p>
  </div>
))

export { Intro, IntroItem }
