
import React from 'react'
import Cover from 'components/Cover'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose, lifecycle } from 'recompose'
import * as mock from 'api/mock'
import { login } from 'api/controller'
import Layout from 'pages/Layout'
import './style.scss'
import coverStyles from 'components/Cover/style.scss'

const image = [
  'https://plus.nctu.edu.tw/assets/new-index/bg-login-ffb5ed42d0a4d4b1e40e29c273db0a4e.jpg'
]

const mapStateToProps = (state) => ({ currentUser: state.user.currentUser })
const mapStateToDispatch = (dispatch) => ({ login: data => dispatch(login(data)) })

const enhance = compose(
  connect(mapStateToProps, mapStateToDispatch),
  withRouter,
  lifecycle({
    componentDidMount () {
      const { currentUser, history } = this.props
      if (currentUser)history.goBack()
    },
    componentDidUpdate () {
      const { currentUser, history } = this.props
      if (currentUser)history.goBack()
    }
  })
)

const Login = ({ location, login }) => (
  <Layout className='mt-0'>
    <div className='login'>
      { location.state
        ? <div className='col-2 alert alert-warning'>請先登入，謝謝!</div>
        : ''
      }
      <Cover images={image} >
        <div className={`login-area ${coverStyles.container}`}>
          <div className='text-center'>
            <h1 className='text-white'>NCTU+</h1>
            <div className='m-3'>
              <small className='text-white'>是交大學生嗎？請用單一入口登入享用完整功能。</small>
            </div>
            <div className='w-25 m-auto'>
              <button
                className='btn btn-success btn-block'
                onClick={() => login(mock.login('admin'))}
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
  </Layout>
)

export default enhance(Login)
