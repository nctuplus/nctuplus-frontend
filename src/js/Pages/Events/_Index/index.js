
import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import { InputWithButton } from '../../../Components/FormUtils'
import { EventBlock, EventPreview, EVENT_STATUS } from '../../../Components/Event'
import './style.scss'

const carousel_events = [
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
                carousel_events.map((event, index) =>
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
          <Row>
            <div className='form-wrapper'>
              <Row>
                <Col md={2} sm={3} xs={6} className='control-wrapper'>
                  <Link to='/events/new' className='flat-link'>
                    <Button bsStyle='info' className='block full-width'>新增活動</Button>
                  </Link>
                </Col>
                <Col md={2} sm={3} xs={6} className='control-wrapper'>
                  <Button bsStyle='success' className='block full-width'>我的活動</Button>
                </Col>
                <Col md={8} sm={6} xs={12} className='control-wrapper'>
                  <InputWithButton
                    placeholder='輸入活動名稱/地點/組織'
                    button_style='primary'
                    button_content={<i className='fa fa-search' />}
                  />
                </Col>
              </Row>
            </div>
          </Row>
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
