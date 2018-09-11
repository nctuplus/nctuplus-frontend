
import React from 'react'
import Layout from 'pages/Layout'
import { LabeledInput, InputWithButton } from 'components/FormUtils'

const Form = props => (
  <Layout>
    <div className='container bg-white p-5'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <h2><i className='fa fa-book mx-3' />我要賣書</h2>

          <hr />

          <LabeledInput label='書籍名稱'>
            <div className='input-group'>
              <input className='form-control' placeholder='利用搜尋可快速填入其他資訊' type='text' />
              <div className='input-group-btn'>
                <button className='btn btn-success' >搜尋</button>
              </div>
            </div>
          </LabeledInput>

          <LabeledInput label='作者'>
            <input className='form-control' placeholder='' required='required' type='text' />
          </LabeledInput>

          <LabeledInput label={<a >ISBN<sup><i className='fa fa-question' /></sup></a>}>
            <input className='form-control integer-only' placeholder='10 碼或13 碼皆可，範例：9789861994192' type='text' />
          </LabeledInput>

          <LabeledInput label='圖片'>
            <input accept='image/*' className='hidden' type='file' />
            <div className='text-center clickable-hover'>
              點選上傳圖片(需小於2MB)
            </div>
          </LabeledInput>

          <LabeledInput label='價格'>
            <input className='form-control integer-only' type='text' />
          </LabeledInput>

          <LabeledInput label='書況說明'>
            <textarea className='form-control' required='required' rows='8' />
          </LabeledInput>

          <LabeledInput label='聯絡方式'>
            <div className='radio'>
              <label>
                <input type='radio' /> Facebook
              </label>
            </div>
            <div className='radio'>
              <label>
                <input defaultChecked='checked' type='radio' value='0' /> Email
              </label>
            </div>
          </LabeledInput>

          <h4><span className='text-center' /></h4>
          <div>
            <LabeledInput label='適用課程'>
              <InputWithButton
                placeholder='搜尋課名（交大專用）'
                button_content='搜尋'
              />
            </LabeledInput>
          </div>
          <div className='row'>
            <div className='col-md-10'>
              <a hidden>展開</a>
            </div>
          </div>
          <hr />
          <button className='btn btn-primary pull-right'>立即刊登</button>
        </div>
      </div>
    </div>
  </Layout>
)

export default Form
