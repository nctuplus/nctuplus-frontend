
import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from 'components/PageWrapper'

const Form = props => (
  <PageWrapper>
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-10 offset-1'>
          <form>
            <div className='form-group'>
              <select className='form-control'>
                <option value='1'>最新消息</option>
                <option value='2'>網站改版</option>
              </select>
            </div>
            <div className='form-group'>
              <textarea className='form-control' placeholder='公告標題' />
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
              <input type='date' />
            </div>
            <div className='form-group text-center' hidden={!props.payload.schedule}>
              <label className='mr-2'>下線時間</label>
              <input type='date' />
            </div>
            <div className='text-center'>
              <button className='btn btn-warning mr-3'>新增</button>
              <Link to='/admin/bulletin/'>
                <button className='btn btn-primary'>返回</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </PageWrapper>
)

export default Form
