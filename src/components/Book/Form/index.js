
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

          <form ref={props.formRef}>
            <LabeledInput label='書籍名稱'>
              <div className='input-group'>
                <input
                  value={props.payload.name}
                  onChange={e => props.updatePayload({ name: e.target.value })}
                  className='form-control'
                  placeholder='必填 / 利用搜尋可快速填入其他資訊'
                  type='text'
                  required
                />
                <div className='input-group-btn'>
                  <button className='btn btn-success' >搜尋</button>
                </div>
              </div>
            </LabeledInput>

            <LabeledInput label='作者'>
              <input
                value={props.payload.author}
                onChange={e => props.updatePayload({ author: e.target.value })}
                className='form-control'
                placeholder='必填'
                type='text'
                required
              />
            </LabeledInput>

            <LabeledInput label={<a >ISBN<sup><i className='fa fa-question' /></sup></a>}>
              <input
                value={props.payload.isbn}
                onChange={e => props.updatePayload({ isbn: e.target.value })}
                className='form-control integer-only'
                placeholder='選填 / 10 碼或13 碼皆可，範例：9789861994192'
                type='text'
              />
            </LabeledInput>

            <LabeledInput label='圖片'>
              <input
                ref={props.imageUploadRef}
                accept='image/*' type='file' hidden
                onChange={props.onFileUpload}
              />
              <div
                className='text-center clickable upload-picture p-5'
                onClick={() => props.imageUploadRef.current.click()}
              >
                {
                  props.uploadedImageUrl
                    ? <img src={props.uploadedImageUrl} className='img-fluid' />
                    : '點選以上傳,建議800x400以達最佳效果(需小於2MB)'
                }
              </div>
            </LabeledInput>

            <LabeledInput label='價格'>
              <input
                value={props.payload.price}
                onChange={e => props.updatePayload({ price: e.target.value })}
                className='form-control integer-only'
                placeholder='必填'
                type='text'
                required
              />
            </LabeledInput>

            <LabeledInput label='書況說明'>
              <textarea
                value={props.payload.condition}
                onChange={e => props.updatePayload({ condition: e.target.value })}
                className='form-control'
                placeholder='必填'
                required
              />
            </LabeledInput>

            <LabeledInput label='聯絡方式'>
              <input
                value={props.payload.contact_way}
                onChange={e => props.updatePayload({ contact_way: e.target.value })}
                className='form-control '
                placeholder='必填 / 請填臉書網址或電子信箱'
                type='text'
                required
              />
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
            <button type='submit' className='btn btn-primary pull-right' onClick={props.onSubmit}>立即刊登</button>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default Form
