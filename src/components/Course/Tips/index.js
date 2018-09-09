
import React from 'react'

// @todo: connect API
const Tips = () => (
  <div className='panel-body'>
    <i className='fa fa-cube' /> 作業/考試：<a>編輯</a>
    <div>
      考試週：（該週可能有考試）
      <div className='btn-group'>
        {
          new Array(18).fill(0).map((value, index) =>
            <button className='btn btn-default no-border' key={index}>
              { index + 1 }
            </button>
          )
        }
      </div>
      <br />
      作業週：（該週可能有作業）
      <div className='btn-group'>
        {
          new Array(18).fill(0).map((value, index) =>
            <button className='btn btn-default no-border' key={index}>
              { index + 1 }
            </button>
          )
        }
      </div>
      <br />
      <i className='fa fa-eye' />點名頻率：
      <span className='label label-success rollcall'>不點名</span>
    </div>
    <hr />
    <i className='fa fa-cube' />其他內容：
    <a className='edit-lists'>編輯</a>
    <div className='row d-none'>
      <div className='col-4'>
        <select className='form-control'>
          <option value='1'>[考試]</option>
          <option value='2'>[作業]</option>
          <option value='3'>[上課]</option>
          <option value='4'>[其他]</option>
        </select>
      </div>
      <div className='col-7'>
        <input className='form-control' maxLength='32' type='text' />
      </div>
      <div className='col-1'>
        <button className='btn btn-success btn-circle'>
          <i className='fa fa-check' />
        </button>
      </div>
    </div>
    <p className='text-center no-data'><strong>尚無資料</strong></p>
  </div>
)

export default Tips
