
import React from 'react'
import Cover from '../../Components/Cover'
import { Intro, IntroItem } from '../../Components/Intro'
import About from '../../Components/About'
import BulletinBoard from '../../Components/Bulletin'
import './style.scss'

import { connect } from 'react-redux'
import { asyncFetchBulletins } from '../../Redux/Asyncs/Bulletins'

const CoverImageUrls = [
  'https://plus.nctu.edu.tw/backgrounds/%E8%95%AD%E7%AB%8B%E5%93%81-1.jpg',
  'https://plus.nctu.edu.tw/backgrounds/%E9%BB%83%E5%A3%AB%E8%BB%92-1.jpg',
  'https://plus.nctu.edu.tw/backgrounds/%E9%99%B3%E6%B2%BF%E4%BB%BB-2.jpg',
  'https://plus.nctu.edu.tw/backgrounds/%E9%99%B3%E6%A3%95%E7%A5%88-1.jpg'
]

class Index extends React.Component {
  constructor (props) {
    super(props)
    props.fetch_data()
  }
  render () {
    return (
      <div className='index'>
        <div className='page-wrapper'>
          <Cover images={CoverImageUrls} >
            <div className='container px-5'>
              <div className='row'>
                <div className='col-6'>
                  <h1>NCTU+</h1>
                  <h3>交大智慧校園系統</h3>
                  <h4 className='parallelogram2'>
                    Brilliant College Life
                  </h4>
                  <div className='w-100'>
                    <BulletinBoard bulletins={this.props.bulletins} />
                  </div>
                </div>
                <div className='col-6 text-center mt-5'>
                  <div className='slogan d-inline-block text-right'>
                    <pre>{ '手邊有用不到的教科書嗎？\n快登入使用二手書平台！' }</pre>
                  </div>
                </div>
              </div>
            </div>
          </Cover>
          <Intro title='為什麼使用NCTU+?'>
            <IntroItem
              image='https://plus.nctu.edu.tw/assets/new-index/discuss-intro-ef6b3b595b441e1124d39fbac28936a6.png'
              title='全校課程心得'
              is_new={false}
              to='/discusses'
            >
              選課前的好幫手，包羅歷年交大所有課程心得，舊文新文一次找齊，也包含課堂評價與歷屆成績，也歡迎同學一起討論。
            </IntroItem>
            <IntroItem
              image='https://plus.nctu.edu.tw/assets/new-index/book-intro-b4d6cf076e7390ec242d2d0881df2c92.png'
              title='二手書拍賣'
              is_new={false}
              to='/books'
            >
              原文書太貴買不下手？二手書難找又麻煩？NCTU+提供二手書交易平台，歡迎加入二手書買賣的行列
            </IntroItem>
            <IntroItem
              image='https://plus.nctu.edu.tw/assets/new-index/score-stat-intro-43382d8d1c5bbd18993c49a2f6e472c5.png'
              title='畢業學分計算'
              is_new={false}
              to='/user'
            >
              今年可以畢業嗎？令人苦惱的畢業學分計算一次完成，把握大學最後的時間！
            </IntroItem>
            <IntroItem
              image='https://plus.nctu.edu.tw/assets/new-index/event-intro-68738fcde6cdc672dd4c40a446bf0367.png'
              title='活動BAR！'
              is_new
              to='/events'
            >
              學校最近有什麼新活動？快來加入活動！建立屬於自己的活動BAR!
            </IntroItem>
          </Intro>
          <About />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  bulletins: state.bulletins.data,
  fetching_status: state.bulletins.status
})
const mapDispatchToProps = (dispatch) => ({
  fetch_data: () => dispatch(asyncFetchBulletins())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
