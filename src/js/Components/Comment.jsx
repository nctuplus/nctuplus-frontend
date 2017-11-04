
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import ShareButton from './ShareButton'

const CommentReply = (props) => (
  <Row>
    <Col md={12} className={'reply' + (props.decorate ? ' border-left-green' : '')}>
      <Col md={1}>
        <a href={props.user_link}>
          <img
            src={props.user_image}
            alt='Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140'
            width='45'
          />
        </a>
      </Col>
      <Col md={8}>
        <p>{ props.date }</p>
        <textcontent>{props.children}</textcontent>
      </Col>
    </Col>
  </Row>
)

const Comment = (props) => (
  <div className={'panel comment' + (props.decorate ? ' border-left-cyan' : '')}>
    <Row className='panel-heading'>
      <Col md={1} className='user-profile'>
        <a href={props.user_link} target='_blank'>
          <img alt='Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140' src={props.user_image} height='50' width='50' />
        </a>
      </Col>
      <Col md={6}>
        <h4>{ props.title }</h4>
        <p>{ props.date }</p>
      </Col>
      <Col md={5} className='panel-body'>
        <div className='pull-right share'>
          <ShareButton />
        </div>
      </Col>
    </Row>

    <hr />

    <Row>
      <Col md={12}>
        <textcontent className='block content'>
          { props.children }
        </textcontent>
      </Col>
    </Row>

    <hr />

    { props.reply }
    {
      typeof props.enable_reply !== 'undefined'
      ? <Row>
        <Col md={1}>
          <img alt='Picture?type=large&amp;redirect=true&amp;width=140&amp;height=140' height='45' id='social-avatar' src='https://graph.facebook.com/1898906487000541/picture?type=large&amp;redirect=true&amp;width=140&amp;height=140' width='45' />
          <img alt='Anonymous' className='hidden' height='45' src='/assets/anonymous-bfbb219640bb7de2c9cb7fc1a7f4960e.jpg' width='45' />
        </Col>
        <Col md={10}>
          <textarea className='form-control' placeholder='內容...' rows='5' />
        </Col>
        <Col md={1}>
          <div className='checkbox inline-block' >
            <label>
              <input type='checkbox' /> 匿名
            </label>
          </div>
          <Button bsStyle='primary'>送出</Button>
        </Col>
      </Row> : ''
    }
  </div>
)
export { Comment, CommentReply }
