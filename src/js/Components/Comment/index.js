
import React from 'react'
import ShareButton from '../ShareButton'
import './style.scss'

const CommentReply = (props) => (
  <div className='row'>
    <div className={'col-md-12 reply' + (props.decorate ? ' border-left-green' : '')}>
      <div className='col-md-1'>
        <a href={props.user_link}>
          <img
            src={props.user_image}
            alt='Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140'
            width='45'
          />
        </a>
      </div>
      <div className='col-md-8'>
        <p>{ props.date }</p>
        <p>{props.children}</p>
      </div>
    </div>
  </div>
)

const Comment = (props) => (
  <div className={'panel comment' + (props.decorate ? ' border-left-cyan' : '')}>
    <div className='row panel-heading'>
      <div className='col-md-1 user-profile'>
        <a href={props.user_link} target='_blank'>
          <img alt='Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140' src={props.user_image} height='50' width='50' />
        </a>
      </div>
      <div className='col-md-6'>
        <h4>{ props.title }</h4>
        <p>{ props.date }</p>
      </div>
      <div className='col-md-5 panel-body'>
        <div className='pull-right share'>
          <ShareButton />
        </div>
      </div>
    </div>

    <hr />

    <div className='row'>
      <div className='col-md-12'>
        <p className='block content'>
          { props.children }
        </p>
      </div>
    </div>

    <hr />

    { props.reply }
    {
      typeof props.enable_reply !== 'undefined'
      ? <div className='row'>
        <div className='col-1'>
          <img alt='Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140' height='45' id='social-avatar' src='https://graph.facebook.com/1898906487000541/picture?type=large&amp;redirect=true&amp;width=140&amp;height=140' width='45' />
          <img alt='Anonymous' className='d-none' height='45' src='/assets/anonymous-bfbb219640bb7de2c9cb7fc1a7f4960e.jpg' width='45' />
        </div>
        <div className='col-10'>
          <textarea className='form-control' placeholder='內容...' rows='5' />
        </div>
        <div className='col-1'>
          <div className='checkbox d-inline-block' >
            <label>
              <input type='checkbox' /> 匿名
            </label>
          </div>
          <button className='btn btn-primary'>送出</button>
        </div>
      </div> : ''
    }
  </div>
)
export { Comment, CommentReply }
