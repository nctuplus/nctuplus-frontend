
import React from 'react'
import { LabeledInput } from '../../../Components/FormUtils'

const Edit = (props) => (
  <div className='container bg-white edit'>
    <LabeledInput label={<h4>分享課表</h4>} />
    <LabeledInput label={<h4>姓名</h4>} >
      <input className='form-control' />
    </LabeledInput>
    <LabeledInput label={<h4>信箱</h4>} >
      <input className='form-control' />
    </LabeledInput>
    <div className='form-group'>
      <div className='row'>
        <label className='col-2 text-right'><h4>入學年度</h4></label>
        <div className='col-2'>
          <select className='form-control'>
            <option value=''>請選擇</option>
            <option value='99'>99</option>
          </select>
        </div>
      </div>
    </div>

    <div className='form-group'>
      <div className='row'>
        <label className='col-2 text-right'><h4>系所</h4></label>
        <div className='col-2 no-margin'>
          <select className='form-control' >
            <option value='3'>大學部</option>
          </select>
        </div>
        <div className='col-5'>
          <select className='form-control' >
            <option value=''>請選擇</option>
            <option value='260'>奈米學士班</option>
          </select>
          <select className='form-control d-none' >
            <option value=''>請選擇</option>
            <option value='73'>加速器光源科技與應用碩士學位學程</option>
          </select>
        </div>
      </div>
    </div>

    <div className='form-group text-center' >
      <button className='btn btn-primary'>送出</button>
    </div>
  </div>
)

export default Edit
