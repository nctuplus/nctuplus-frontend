
import React from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from 'components/Pagination'
import Spinner from 'components/Spinner'
import styles from './style.scss'

const CommentsCard = withRouter((props) => (
  <div className={`clickable card ${styles.card}`}>
    <div className='card-body'>
      <div className={styles.header}>
        <div className={`${styles.user}`}><i className='fas fa-user-circle mr-2' />{ props.anonymity ? '匿名' : props.user.name }</div>
        <div className={` text-muted ${styles.time}`}>{ props.created_at && props.created_at.substr(0, 10) }</div>
        <div className={`text-secondary ${styles.cardSubtitle}`}>
          { props.course && props.course.name }
            /
          { props.course &&
              props.course.teachers.length
            ? <React.Fragment>
              { props.course.teachers[0] }
              { props.course.teachers.slice(1).map((name) => `,${name}`) }
            </React.Fragment>
            : 'N/A'
          }
        </div>
      </div>
      <h5 className={styles.cardTitle}>{props.title}</h5>
      <div className={`text-muted ${styles.cardText}`}>{props.content}</div>

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
          : <div>
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
