
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { compose, withState, lifecycle } from 'recompose'
import moment from 'moment'
import PageWrapper from 'components/PageWrapper'
import Preview from 'components/Event/Preview'
import { InputWithButton } from 'components/FormUtils'
import { fetchEvents } from 'redux/Actions/Events'
import './style.scss'

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

const NavFooter = (props) => (
  <div>
    <nav id='footer' className={props.visible ? 'slideIn' : 'slideOut'}>
      <div className='row'>
        <div className='col-sm-3 my-activity'>
          我的活動
        </div>
        <div className='col-md-9 my-activity-link'>
          {
            // @todo: user events
          }
        </div>
      </div>
    </nav>
  </div>
)

const mapStateToProps = (state) => ({ events: state.events.all })
const mapDispatchToProps = (dispatch) => ({ fetchData: (page) => dispatch(fetchEvents(page)) })

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withState('visible', 'setVisible', false),
  lifecycle({ componentDidMount: function () { this.props.fetchData() } })
)

const Index = enhance((props) =>
  <PageWrapper>
    <div className='container pt-3 event'>
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
            props.events.data
              .slice(0, 5)
              .map((event, index) =>
                <div key={index}>
                  <Link to={`/events/${event.id}`}>
                    <img
                      alt='banner'
                      height='300'
                      className='m-auto clickable'
                      src={`${SERVER_URL}${event.cover_image.url}`}
                    />
                  </Link>
                  <h3 className='text-center text-white title'>
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
          <button
            className='btn btn-info full-width'
            onClick={() => props.setVisible(visible => !visible)}
          >
            我的活動
          </button>
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
            .filter(event => moment().isBetween(event.begin_time, event.end_time))
            .map((event, index) => <Preview {...event} key={index} />)
        }
      </div>

      <div className='row event-block p-4 mb-3'>
        <div className='col-12'>
          <h1 className='my-3'>已結束活動</h1>
        </div>
        {
          props.events.data
            .filter(event => moment().isAfter(event.end_time))
            .map((event, index) => <Preview {...event} key={index} />)
        }
      </div>
    </div>

    <NavFooter visible={props.visible} />
  </PageWrapper>
)

export default Index
