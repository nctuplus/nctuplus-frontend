
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from 'pages/Layout'

const Form = props => (
  <Layout>
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-10 offset-1'>
          <form ref={props.formRef}>
            <div className='form-group'>
              <textarea
                className='form-control'
                value={props.payload.title}
                onChange={e => props.updatePayload({ title: e.target.value })}
                placeholder='換行請用<br>標籤'
                required
              />
            </div>
            <div className='form-group text-center'>
              <label className='mr-2'>是否隱藏</label>
              <input
                type='checkbox'
                checked={!props.payload.display}
                onChange={e => props.updatePayload({ display: !props.payload.display })}
              />
            </div>
            <div className='text-center'>
              <button
                type='submit'
                className='btn btn-warning mr-3'
                onClick={props.onSubmit}
              >
                送出
              </button>
              <Link to='/admin/slogan'>
                <button className='btn btn-primary'>返回</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default Form
