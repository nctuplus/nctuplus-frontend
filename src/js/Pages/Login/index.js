
import React from 'react'
import Cover from '../../Components/Cover'
import './style.scss'

const image = [
  'https://plus.nctu.edu.tw/assets/new-index/bg-login-ffb5ed42d0a4d4b1e40e29c273db0a4e.jpg'
]

const Login = (props) => (
  <div className='login'>
    <Cover images={image} >
      <div className='login-area container'>
        <div className='text-center'>
          <h1 className='text-white'>NCTU+</h1>
          <div className='m-3'>
            <small className='text-white'>是交大學生嗎？請用單一入口登入享用完整功能。</small>
          </div>
          <div className='w-25 m-auto'>
            <button
              className='btn btn-success btn-block'
              onClick={() => (window.location.href = 'http://plus.nctu.me/api/v1/auth/nctu')}
            >
              交大單一入口登入
            </button>
            <h6 className='text-white m-3'>or</h6>
            <button className='btn btn-fb w-50'>
              Facebook登入
            </button>
            <button className='btn btn-google w-50'>
              Google登入
            </button>
          </div>
        </div>
      </div>
    </Cover>
  </div>
)

export default Login
