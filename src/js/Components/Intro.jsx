
import React from 'react'
import { withRouter } from 'react-router-dom'

const _Intro = (props) => (
  <div className='intro block text-center'>
    <h2>{ props.title }</h2>
    { props.children }
  </div>
)

const _IntroItem = (props) => (
  <div className='item inline-block clickable' onClick={() => props.history.push(props.to)}>
    <img src={props.image} />
    <h3>{ props.title }</h3>
    { props.is_new ? <h5>NCTU+新功能!</h5> : '' }
    <p>{ props.children }</p>
  </div>
)

const Intro = withRouter(_Intro)
const IntroItem = withRouter(_IntroItem)

export {Intro, IntroItem}
