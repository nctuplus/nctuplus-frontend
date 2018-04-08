
import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { InputWithButton } from '../../../Components/FormUtils'
import { EventBlock, EventPreview, EVENT_STATUS } from '../../../Components/Event'
import './style.scss'

const carouselEvents = [
  {
    image: 'https://plus.nctu.edu.tw/file_upload/event_covers/000/000/098/banner_with_text.jpg?1506697033',
    id: 98,
    description: '2018交大藝趣節徵才面試報名'
  },
  {
    image: 'https://plus.nctu.edu.tw/file_upload/event_covers/000/000/098/banner_with_text.jpg?1506697033',
    id: 98,
    description: '2018交大藝趣節徵才面試報名'
  },
  {
    image: 'https://plus.nctu.edu.tw/file_upload/event_covers/000/000/098/banner_with_text.jpg?1506697033',
    id: 98,
    description: '2018交大藝趣節徵才面試報名'
  }
]

const CustomArrowLeft = (props) => (
  <div className='custom-arrow custom-arrow-left text-white' onClick={props.onClick}>
    <span className='glyphicon glyphicon-chevron-left' />
  </div>
)
const CustomArrowRight = (props) => (
  <div className='custom-arrow custom-arrow-right text-white' onClick={props.onClick}>
    <span className='glyphicon glyphicon-chevron-right' />
  </div>
)

class Index extends React.Component {
  render () {
    return (
      <div className='page-wrapper event'>
        <div className='container'>
          <div className='slider-wrapper'>
            <Slider
              infinite
              autoplay
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              pauseOnHover
              prevArrow={<CustomArrowLeft />}
              nextArrow={<CustomArrowRight />}

            >
              {
                carouselEvents.map((event, index) =>
                  <div key={index}>
                    <Link to={/events/ + event.id}>
                      <img
                        alt='banner'
                        height='300'
                        className='margin-auto clickable'
                        src={event.image}
                      />
                    </Link>
                    <h3 className='text-center text-white'>
                      { event.description }
                    </h3>
                  </div>
                )
              }
            </Slider>
          </div>
          <div className='row'>
            <div className='form-wrapper'>
              <div className='row'>
                <div className='control-wrapper col-6 col-sm-3 col-md-2'>
                  <Link to='/events/new' className='flat-link'>
                    <button className='btn btn-info full-width'>新增活動</button>
                  </Link>
                </div>
                <div className='control-wrapper col-6 col-sm-3 col-md-2'>
                  <button className='btn btn-info full-width'>我的活動</button>
                </div>
                <div className='control-wrapper col-12 col-sm-6 col-md-8'>
                  <InputWithButton
                    placeholder='輸入活動名稱/地點/組織'
                    button_style='primary'
                    button_content={<i className='fa fa-search' />}
                  />
                </div>
              </div>
            </div>
          </div>
          <EventBlock title='近期活動'>
            <EventPreview
              date='進行中'
              status={EVENT_STATUS.IN_PROGRESS}
              title='2018交大藝趣節徵才面試報名'
              organizer='藝趣節團隊'
              location='交通大學綜合一館'
              poster='https://plus.nctu.edu.tw/file_upload/event_covers/000/000/098/banner_with_text.jpg?1506697033'
            />
          </EventBlock>
          <EventBlock title='已結束活動'>
            <EventPreview
              date='進行中'
              status={EVENT_STATUS.IN_PROGRESS}
              title='2018交大藝趣節徵才面試報名'
              organizer='藝趣節團隊'
              location='交通大學綜合一館'
              poster='https://plus.nctu.edu.tw/file_upload/event_covers/000/000/098/banner_with_text.jpg?1506697033'
            />
            <EventPreview
              date='進行中'
              status={EVENT_STATUS.IN_PROGRESS}
              title='2018交大藝趣節徵才面試報名'
              organizer='藝趣節團隊'
              location='交通大學綜合一館'
              poster='https://plus.nctu.edu.tw/file_upload/event_covers/000/000/098/banner_with_text.jpg?1506697033'
            />
            <EventPreview
              date='進行中'
              status={EVENT_STATUS.IN_PROGRESS}
              title='2018交大藝趣節徵才面試報名'
              organizer='藝趣節團隊'
              location='交通大學綜合一館'
              poster='https://plus.nctu.edu.tw/file_upload/event_covers/000/000/098/banner_with_text.jpg?1506697033'
            />
            <EventPreview
              date='進行中'
              status={EVENT_STATUS.IN_PROGRESS}
              title='2018交大藝趣節徵才面試報名'
              organizer='藝趣節團隊'
              location='交通大學綜合一館'
              poster='https://plus.nctu.edu.tw/file_upload/event_covers/000/000/098/banner_with_text.jpg?1506697033'
            />
            <EventPreview
              date='進行中'
              status={EVENT_STATUS.IN_PROGRESS}
              title='2018交大藝趣節徵才面試報名'
              organizer='藝趣節團隊'
              location='交通大學綜合一館'
              poster='https://plus.nctu.edu.tw/file_upload/event_covers/000/000/098/banner_with_text.jpg?1506697033'
            />
          </EventBlock>

        </div>
      </div>
    )
  }
}

export default Index
