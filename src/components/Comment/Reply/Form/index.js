
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import styles from './style.scss'
import { FETCHING_STATUS } from 'utilities/constants'

const Form = props => {
  const disable = (props.fetchingStatus === FETCHING_STATUS.FETCHING).toString()
  return (
    <form className={styles.container} ref={props.formRef} onSubmit={props.onSubmit}>
      <div className={styles.form}>
        <TextareaAutosize
          className={`${styles.textarea}`}
          maxRows={3}
          minRows={1}
          placeholder='內容...'
          onChange={e => props.updatePayload({ content: e.target.value })}
          value={props.payload.content}
          required
          disable={disable}
        />
        <div className={`custom-control custom-checkbox mx-2 ${styles.checkbox}`}>
          <input type='checkbox' className='custom-control-input' id='newReplyCheckBox'
            checked={props.payload.anonymity}
            onChange={e => props.updatePayload({ anonymity: !props.payload.anonymity })}
            disable={disable}
          />
          <label className='custom-control-label' htmlFor='newReplyCheckBox'>匿名</label>
        </div>
        <button
          type='submit'
          className={`btn btn-primary ${styles.submit}`}
          disable={disable}
        >
          送出
        </button>
      </div>
    </form>
  )
}

export default Form
