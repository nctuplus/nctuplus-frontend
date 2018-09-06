
import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from 'components/PageWrapper'

const Form = props => (
  <PageWrapper>
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-6 offset-2'>
          <form>
            <div className='form-group'>
              <div className='row align-items-center'>
                <label className='col-4 text-right'>中文名稱</label>
                <div className='col-8'>
                  <input className='form-control' />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <div className='row align-items-center'>
                <label className='col-4 text-right'>學院</label>
                <div className='col-8'>
                  <select className='form-control' />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <div className='row align-items-center'>
                <label className='col-4 text-right'>Dept Type</label>
                <div className='col-8'>
                  <select className='form-control' />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <div className='row align-items-center'>
                <label className='col-4 text-right'>可主修</label>
                <div className='col-8'>
                  <select className='form-control'>
                    <option>true</option>
                    <option>false</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-6 offset-6'>
                <button className='btn btn-warning mr-3'>{props.action}</button>
                <Link to='/admin/departments/'>
                  <button className='btn btn-primary'>返回</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </PageWrapper>
)

export default Form
