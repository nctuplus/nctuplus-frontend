
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './style.scss'

class FormPreview extends React.PureComponent {
  constructor (props) {
    super(props)
    this.clickOnDimmer = this.clickOnDimmer.bind(this)
  }

  componentDidMount () {
    const documentWidth = document.documentElement.clientWidth
    const windowWidth = window.innerWidth
    const scrollBarWidth = windowWidth - documentWidth
    document.body.style.overflowY = 'hidden'
    document.body.style.paddingRight = `${scrollBarWidth}px`
  }

  componentWillUnmount () {
    document.body.style.overflowY = 'auto'
    document.body.style.paddingRight = '0'
  }

  clickOnDimmer (e) {
    this.props.previewClose()
  }

  render () {
    const { comment, currentUser } = this.props
    let userName = comment.anonymity ? '匿名' : currentUser && currentUser.name
    let courseAndTeacher = comment.course ? `${comment.course.name}/${comment.course.teachers.join(', ')}` : '/'
    let commentTitle = comment.title
    let commentContent = comment.content
    let courseID = comment.course.id

    return (
      <div className={styles.dimmer} onClick={this.clickOnDimmer}>
        <i className={`fas fa-times ${styles.exitBtn}`} />
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.post}>
            <div className={styles.card}>
              <div className={styles.header}>
                <img className={styles.userImg} alt='u_img' src='https://plus.nctu.edu.tw/assets/anonymous-bfbb219640bb7de2c9cb7fc1a7f4960e.jpg' height='40' width='40' />
                <div className={styles.info}>
                  <span className={styles.user}>{ userName }</span>
                </div>
                <div className={`text-secondary ${styles.cardSubtitle}`}>
                  <Link to={`/courses/${courseID}`}>{ courseAndTeacher }</Link>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{ commentTitle }</h3>
              <div className={styles.cardText}>{ commentContent }</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPreview)
