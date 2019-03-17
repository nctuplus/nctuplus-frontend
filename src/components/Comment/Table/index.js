
import React from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from 'components/Pagination'
import Spinner from 'components/Spinner'
import styles from './style.scss'

const CommentsCard = withRouter((props) => (
  <div className={`clickable card ${styles.card}`} onClick={() => props.history.push(`/comments/${props.id}`)}>
    <div className='card-body'>
      <div className={styles.header}>
        <img className={styles.userImg} alt='u_img' src='https://plus.nctu.edu.tw/assets/anonymous-bfbb219640bb7de2c9cb7fc1a7f4960e.jpg' height='40' width='40' />
        <div className={styles.info}>
          <span className={`${styles.user}`}>{ props.anonymity ? '匿名' : props.user.name }</span>
          <span className={` text-muted ${styles.time}`}>{ props.created_at && props.created_at.substr(0, 10) }</span>
        </div>
        <div className={`text-secondary ${styles.cardSubtitle}`}>
          { props.course && props.course.name }
          /
          {
            props.course && props.course.teachers &&
            props.course.teachers.join(', ')
          }
        </div>
      </div>
      <h5 className={styles.cardTitle}>{props.title}</h5>
      <div className={`text-muted ${styles.cardText}`}>{props.content}</div>
      <div className='text-secondary mt-3'>
        <div>
          <i className='far fa-comment-alt' /> {props.reply.length}
        </div>
      </div>
    </div>
  </div>
))

const CommentsTable = (props) => (
  <div>
    <div className='container mb-3'>
      {
        props.data.length
          ? props.data.map((comment) => (
            <CommentsCard key={comment.id} {...comment} />
          ))
          : <div className='text-center'>
            <Spinner size={48} color='grey' />
          </div>
      }
    </div>
    <div className='text-center'>
      <Pagination page={props.page} maxPage={props.maxPage} to={props.updatePage} />
    </div>
  </div>
)

export default CommentsTable
