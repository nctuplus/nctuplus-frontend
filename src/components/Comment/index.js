
import React from 'react'
import classNames from 'classnames'
import {ShareButton} from 'components/ShareButton'

const CommentReply = (props) => (
  <div className='row justify-content-end'>
    <div className='col-1 text-center'>
      <img
        src='http://placeimg.com/45/45/any'
        alt='Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140'
        height='45'
        width='45'
        className='d-inline-block'
      />
    </div>
    <div className='col-11'>
      <textarea className='form-control' placeholder='內容...' rows='5' />
    </div>
    <div className='m-3 text-center'>
      <div className='d-inline-block m-1' >
        <label>
          <input type='checkbox' /> 匿名
        </label>
      </div>
      <button className='btn btn-primary m-1'>送出</button>
    </div>
  </div>
)

const SubComment = (props) => (
  <div className={classNames('row', props.decorate && 'border-left-green')}>
    <div className='col-1'>
      <a href={props.user_link}>
        <img
          src={props.user_image}
          alt='Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140'
          width='45'
        />
      </a>
    </div>
    <div className='col-8'>
      <p>{ props.created_at }</p>
      <p>{ props.content }</p>
    </div>
  </div>
)

const Comment = (props) => (
  <div className={classNames('bg-white', props.decorate && ' border-left-cyan')}>
    <div className='row p-4'>
      <div className='col-md-1'>
        <a href={props.user_link} target='_blank'>
          <img alt='Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140' src={props.user_image} height='50' width='50' />
        </a>
      </div>
      <div className='col-md-6'>
        <h4>{ props.title }</h4>
        <p>{ props.created_at }</p>
      </div>
      <div className='col-md-5'>
        <div className='pull-right'>
          <ShareButton />
        </div>
      </div>
    </div>

    <hr />

    <div className='row'>
      <div className='col-md-12'>
        <p className='p-3'>
          { props.content }
        </p>
      </div>
    </div>

    <hr />
    {
      props.sub_comments &&
      (
        <div className='py-3 pl-5'>
          {
            props.sub_comments.map((comment, index) => (
              <SubComment {...comment} key={index} />)
            )
          }
        </div>
      )
    }
    {
      props.enable_reply &&
      (
        <div className='py-3 pl-5'>
          <CommentReply />
        </div>
      )
    }
  </div>
)
export { Comment, SubComment }
