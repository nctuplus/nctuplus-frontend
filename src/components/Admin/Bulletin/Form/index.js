
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
              <select
                className='form-control'
                onChange={e => props.updatePayload({ category: e.target.value })}
                required
              >
                <option value='0'>最新消息</option>
                <option value='1'>網站改版</option>
              </select>
            </div>
            <div className='form-group'>
              <textarea
                className='form-control'
                onChange={e => props.updatePayload({ title: e.target.value })}
                placeholder='公告標題'
                required
              />
            </div>
            <div className='form-group text-center'>
              <label className='mr-2'>排程發佈</label>
              <input
                type='checkbox'
                onChange={e => props.updatePayload({ schedule: !props.payload.schedule })}
              />
            </div>
            <div className='form-group text-center' hidden={!props.payload.schedule}>
              <label className='mr-2'>上線時間</label>
              <input
                onChange={e => props.updatePayload({ begin_time: e.target.value })}
                type='date'
              />
            </div>
            <div className='form-group text-center' hidden={!props.payload.schedule}>
              <label className='mr-2'>下線時間</label>
              <input
                onChange={e => props.updatePayload({ end_time: e.target.value })}
                type='date'
              />
            </div>
            <div className='text-center'>
              <button
                type='submit'
                className='btn btn-warning mr-3'
                onClick={props.onSubmit}
              >
                {props.action}
              </button>
              <Link to='/admin/bulletin/'>
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
