
import React from 'react'
import { Link } from 'react-router-dom'
import CircularProgressbar from 'react-circular-progressbar'
import './style.scss'

class PersonalRatingBar extends React.Component {
  render () {
    return (
      <div className='rating-bar'>
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
      <div className='personal-rating' >
        <span className='d-inline-block my-rating'>我的評分
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

const Ratings = (props) => (
  <div className='d-flex'>
    <div className='rating col'>
      <CircularProgressbar
        percentage={props.loading}
        initialAnimation
      />
      <div className='people text-center' >涼度({ props.loading_people }人)</div>
    </div>
    <div className='rating col'>
      <CircularProgressbar
        className='green'
        percentage={props.easiness}
        initialAnimation
      />
      <div className='people text-center' >甜度({ props.easiness_people }人)</div>

    </div>
    <div className='rating col'>
      <CircularProgressbar
        className='orange'
        percentage={props.depth}
        initialAnimation
      />
      <div className='people text-center' >深度({ props.depth_people }人)</div>
    </div>
  </div>
)

export { PersonalRating, PersonalRatingBar, Ratings }
