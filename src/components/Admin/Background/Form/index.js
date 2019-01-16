
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from 'pages/Layout'
import styles from './style.scss'

const Form = props => (
  <Layout>
    <div className='container pt-5'>
      <div className='row'>
        <div className='col-10 offset-1'>
          <form ref={props.formRef}>
            <div className='form-group'>
              <input
                ref={props.imageUploadRef}
                accept='image/*' type='file' hidden
                onChange={props.onFileUpload}
              />
              <div
                className={`text-center clickable  bg-white ${styles.uploadPicture} p-5`}
                onClick={() => props.imageUploadRef.current.click()}
              >
                {
                  props.uploadedImageUrl
                    ? <img src={props.uploadedImageUrl} className='img-fluid' />
                    : '點選以上傳,建議800x400以達最佳效果(需小於2MB)'
                }
              </div>
              <div className='text-center mt-3'>
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
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default Form
