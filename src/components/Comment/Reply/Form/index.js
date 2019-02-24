
import React from 'react'

const Form = props => (
  <form className='py-5' ref={props.formRef}>
    <div>
      <textarea
        className='form-control'
        placeholder='內容...'
        rows='5'
        value={props.payload.content}
        onChange={e => props.updatePayload({ content: e.target.value })}
        required
      />
    </div>
    <div className='my-3 pull-right'>
      <div className='d-inline-block m-1' >
        <label>
          <input
            checked={props.payload.anonymity}
            onChange={e => props.updatePayload({ anonymity: !props.payload.anonymity })}
            className='mx-1'
            type='checkbox'
          />
          匿名
        </label>
      </div>
      <button
        type='submit'
        className='btn btn-primary m-1'
        onClick={props.onSubmit}
      >
        送出
      </button>
      <button
        className='btn btn-default m-1'
        onClick={props.onCancel}
      >
        取消
      </button>
    </div>
  </form>
)

export default Form
