
import React from 'react'
import { Link } from 'react-router-dom'
// import CircularProgressbar from 'react-circular-progressbar'
import styles from './style.scss'
import StarRatings from 'react-star-ratings'

class PersonalRatingBar extends React.Component {
  render () {
    return (
      <div className={styles.ratingBar}>
        <label className='mx-2'>{this.props.children}</label>
        <span>
          <i className='fa fa-star-o mx-1' />
          <i className='fa fa-star-o mx-1' />
          <i className='fa fa-star-o mx-1' />
          <i className='fa fa-star-o mx-1' />
          <i className='fa fa-star-o mx-1' />
        </span>
      </div>
    )
  }
}

class PersonalRating extends React.Component {
  render () {
    return (
      <div className={styles.personalRating} >
        <span className={`d-inline-block ${styles.myRating}`}>
          我的評分
          <small className='d-none'>
            使用此功能請先<Link className='flat-link' to='/login'>登入</Link>
          </small>
        </span>
        <div>
          <PersonalRatingBar>涼度</PersonalRatingBar>
          <PersonalRatingBar>甜度</PersonalRatingBar>
          <PersonalRatingBar>深度</PersonalRatingBar>
        </div>
      </div>
    )
  }
}

const StarRatingWithScore = (props) => {
  const color = props.color || '#f0a90d'
  return (
    <div className={styles.starRating}>
      <span style={{ color: color }}>{props.score}</span>
      <StarRatings
        rating={props.score}
        starRatedColor={color}
        numberOfStars={5}
        name='rating'
        starDimension='15px'
        starSpacing='2px'
        svgIconPath='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'
      />
    </div>
  )
}

const Ratings = (props) => {
  const rating = props.rating || [{}, {}, {}]
  return (
    <div className='d-flex'>
      <div className={`${styles.rating}`}>
        <StarRatingWithScore score={rating[0].stars || 0} color='#1BE7FF' />
        <div className={`${styles.people} text-center`}>涼度({ rating[0].people || 0 }人)</div>
      </div>
      <div className={`${styles.rating}`}>
        <StarRatingWithScore score={rating[1].stars || 0} color='#6EEB83' />
        <div className={`${styles.people} text-center`}>甜度({ rating[1].people || 0 }人)</div>

      </div>
      <div className={`${styles.rating}`}>
        <StarRatingWithScore score={rating[2].stars || 0} color='#FDCA40' />
        <div className={`${styles.people} text-center`}>深度({ rating[2].people || 0 }人)</div>
      </div>
    </div>
  )
}

export { PersonalRating, PersonalRatingBar, Ratings }
