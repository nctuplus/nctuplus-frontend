
import React from 'react'
import FullWidthCover from '../../Components/FullWidthCover'
import './style.scss'

const image = [
  'https://plus.nctu.edu.tw/assets/new-index/bg-login-ffb5ed42d0a4d4b1e40e29c273db0a4e.jpg'
]

class Login extends React.Component {
  render () {
    return (
      <div className='login'>
        <FullWidthCover images={image} />
        <div className='login-area container'>
          <div className='text-center'>
            <h1 className='text-white'>NCTU+</h1>
            <div>
              <h6 className='text-white'>是交大學生嗎？請用單一入口登入享用完整功能。</h6>
            </div>
            <div>
              <button className='btn-e3'>
                交大單一入口登入
              </button>
              <h6 className='text-white'>or</h6>
              <button className='btn-fb'>
                Facebook登入
              </button>
              <button className='btn-google'>
                Google登入
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
