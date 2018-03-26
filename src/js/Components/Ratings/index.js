
import React from 'react'
import { Link } from 'react-router-dom'
import CircularProgressbar from 'react-circular-progressbar'
import { EntypoStarOutlined } from 'react-entypo'
import './style.scss'

class PersonalRatingBar extends React.Component {
  render () {
    return (
      <div className='rating-bar'>
        <label>{this.props.children}</label>
        <span>
          <EntypoStarOutlined />
          <EntypoStarOutlined />
          <EntypoStarOutlined />
          <EntypoStarOutlined />
          <EntypoStarOutlined />
        </span>
      </div>
    )
  }
}

class PersonalRating extends React.Component {
  render () {
    return (
      <div className='personal-rating' >
        <span className='inline-block my-rating'>我的評分
          <small className='hidden'>
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
  <div>
    <span className='rating inline-block'>
      <CircularProgressbar
        percentage={props.loading}
        initialAnimation
      />
      <span className='text-center block people' >涼度({ props.loading_people }人)</span>
    </span>
    <span className='rating inline-block'>
      <CircularProgressbar
        className='green'
        percentage={props.easiness}
        initialAnimation
      />
      <span className='text-center block people' >甜度({ props.easiness_people }人)</span>

    </span>
    <span className='rating inline-block'>
      <CircularProgressbar
        className='orange'
        percentage={props.depth}
        initialAnimation
      />
      <span className='text-center block people' >深度({ props.depth_people }人)</span>
    </span>
  </div>
)

export { PersonalRating, PersonalRatingBar, Ratings }
