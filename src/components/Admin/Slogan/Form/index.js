
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
              <textarea className='form-control' placeholder='換行請用<br>標籤' />
            </div>
            <div className='form-group text-center'>
              <label className='mr-2'>是否隱藏</label>
              <input type='checkbox' />
            </div>
            <div className='text-center'>
              <button className='btn btn-warning mr-3'>{props.action}</button>
              <Link to='/admin/slogan/'>
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
