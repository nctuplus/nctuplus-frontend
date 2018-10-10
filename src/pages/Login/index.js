
import React from 'react'
import Cover from 'components/Cover'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose, lifecycle } from 'recompose'
import * as mock from 'api/mock'
import { login } from 'api/Controllers/user'
import Layout from 'pages/Layout'
import styles from './style.scss'
import coverStyles from 'components/Cover/style.scss'
import { toast, ToastWrapper } from 'components/Toast'

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

class Login extends React.Component {
  componentDidMount () {
    if (this.props.location.state) {
      toast('請先登入，謝謝!', { type: 'warning' })
    }
  }
  render () {
    const { login } = this.props
    return (
      <Layout className='mt-0'>
        <ToastWrapper />
        <div className={styles.login}>
          <Cover images={image} >
            <div className={`${styles.loginArea} container ${coverStyles.container}`}>
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
                  <button className={`btn ${styles.btnFb} w-50`}>
                    Facebook登入
                  </button>
                  <button className={`btn ${styles.btnGoogle} w-50`}>
                    Google登入
                  </button>
                </div>
              </div>
            </div>
          </Cover>
        </div>
      </Layout>
    )
  }
}

export default enhance(Login)
