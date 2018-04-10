
import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { InputWithButton } from '../../../Components/FormUtils'
import { EventPreview } from '../../../Components/Event'
import './style.scss'

import { connect } from 'react-redux'
import { fetchEvents } from '../../../Redux/Actions/Events'

const CustomArrowLeft = (props) => (
  <div className='custom-arrow custom-arrow-left text-white' onClick={props.onClick}>
    <span className='fa fa-chevron-left' />
  </div>
)
const CustomArrowRight = (props) => (
  <div className='custom-arrow custom-arrow-right text-white' onClick={props.onClick}>
    <span className='fa fa-chevron-right' />
  </div>
)

const Index = (props) => {
  props.events.status || props.fetch_data()
  return (
    <div className='page-wrapper event'>
      <div className='container pt-3'>
        <div className='m-1'>
          <Slider
            infinite
            autoplay
            speed={1000}
            slidesToShow={1}
            slidesToScroll={1}
            pauseOnHover
            prevArrow={<CustomArrowLeft />}
            nextArrow={<CustomArrowRight />}
          >
            {
              props.events.data.map((event, index) =>
                <div key={index}>
                  <Link to={/events/ + event.id}>
                    <img
                      alt='banner'
                      height='300'
                      className='m-auto clickable'
                      src={event.poster}
                    />
                  </Link>
                  <h3 className='text-center text-white'>
                    {event.title}
                  </h3>
                </div>
              )
            }
          </Slider>
        </div>
        <div className='row form-wrapper p-3'>
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

        <div className='row event-block p-4 mb-3'>
          <div className='col-12'>
            <h1 className='my-3'>近期活動</h1>
          </div>
          {
            props.events.data
            .map((event, index) => (<EventPreview {... event} key={index} />))
          }
        </div>

        <div className='row event-block p-4 mb-3'>
          <div className='col-12'>
            <h1 className='my-3'>已結束活動</h1>
          </div>
          {
            props.events.data
            .map((event, index) => (<EventPreview {... event} key={index} />))
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({ events: state.events })
const mapDispatchToProps = (dispatch) => ({
  fetch_data: () => dispatch(fetchEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
