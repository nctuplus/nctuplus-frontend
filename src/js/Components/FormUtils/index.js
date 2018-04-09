
import React from 'react'
import classNames from 'classnames'

const InputWithButton = (props) => (
  <div className={classNames('input-group', props.className)}>
    <input className='form-control' placeholder={props.placeholder} type='text' />
    <div className='input-group-append'>
      <button className={`btn btn-${props.button_style}`} >
        { props.button_content }
      </button>
    </div>
  </div>
)

const LabeledInput = (props) => (
  <div className='form-group'>
    <div className='row'>
      <label className='col-2 text-right'>{ props.label }</label>
      <div className='col-10'>
        {props.children}
      </div>
    </div>
  </div>
)

export { LabeledInput, InputWithButton }
