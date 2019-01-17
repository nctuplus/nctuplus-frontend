
import React from 'react'
import { connect } from 'react-redux'
import { fetchBulletins } from 'api/Actions/Bulletins'
import { withRouter } from 'react-router-dom'
import { lifecycle, compose } from 'recompose'

import Layout from 'pages/Layout'
import Cover from 'components/Cover'
import About from 'components/About'
import BulletinBoard from 'components/Bulletin'
import styles from './style.scss'
import coverStyles from 'components/Cover/style.scss'
import classNames from 'classnames';

const CoverImageUrls = [
  'https://plus.nctu.edu.tw/backgrounds/%E8%95%AD%E7%AB%8B%E5%93%81-1.jpg',
  'https://plus.nctu.edu.tw/backgrounds/%E9%BB%83%E5%A3%AB%E8%BB%92-1.jpg',
  'https://plus.nctu.edu.tw/backgrounds/%E9%99%B3%E6%B2%BF%E4%BB%BB-2.jpg',
  'https://plus.nctu.edu.tw/backgrounds/%E9%99%B3%E6%A3%95%E7%A5%88-1.jpg'
]

const Feature = withRouter(({ history, to, image, title, isNew, children }) => (
  <div className={`${styles.introItem} col-3 clickable`} onClick={() => history.push(to)}>
    <img className='img-fluid p-5' src={image} />
    <h4 className='mt-3'>{ title }</h4>
    { isNew && <span className={styles.introNewFeature}>NCTU+新功能!</span> }
    <div className='mb-5'>
      { children }
    </div>
  </div>
))

const mapStateToProps = (state) => ({
  bulletins: state.bulletins.all.data,
  fetchingStatus: state.bulletins.all.status
})
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchBulletins())
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount () { this.props.fetchData() } })
)

const Index = (props) => (
  <Layout>
    <Cover images={CoverImageUrls} >
      <div className={`container ${coverStyles.container} px-5`}>
        <div className='row w-100'>
          <div className='col-12 col-md-6 d-flex flex-column align-items-md-start align-items-center'>
            <h1>NCTU+</h1>
            <h3>交大智慧校園系統</h3>
            <h4>
              Brilliant College Life
            </h4>
            <BulletinBoard bulletins={props.bulletins} />
          </div>
          <div className={classNames('col-12 col-md-6 text-center mt-5', styles.sloganWrapper)}>
            <div className={`${styles.slogan} d-inline-block text-right`}>
              <pre className='text-white'>{ '手邊有用不到的教科書嗎？\n快登入使用二手書平台！' }</pre>
            </div>
          </div>
        </div>
      </div>
    </Cover>
    <div className='intro py-5 text-center bg-white'>
      <h2 className='m-5'>為什麼使用NCTU+?</h2>
      <div className='row w-75 mx-auto'>
        <Feature
          image='https://plus.nctu.edu.tw/assets/new-index/discuss-intro-ef6b3b595b441e1124d39fbac28936a6.png'
          title='全校課程心得'
          to='/comments'
        >
          選課前的好幫手，包羅歷年交大所有課程心得，舊文新文一次找齊，也包含課堂評價與歷屆成績，也歡迎同學一起討論。
        </Feature>
        <Feature
          image='https://plus.nctu.edu.tw/assets/new-index/book-intro-b4d6cf076e7390ec242d2d0881df2c92.png'
          title='二手書拍賣'
          to='/books'
        >
          原文書太貴買不下手？二手書難找又麻煩？NCTU+提供二手書交易平台，歡迎加入二手書買賣的行列
        </Feature>
        <Feature
          image='https://plus.nctu.edu.tw/assets/new-index/score-stat-intro-43382d8d1c5bbd18993c49a2f6e472c5.png'
          title='畢業學分計算'
          to='/user'
        >
          今年可以畢業嗎？令人苦惱的畢業學分計算一次完成，把握大學最後的時間！
        </Feature>
        <Feature
          image='https://plus.nctu.edu.tw/assets/new-index/event-intro-68738fcde6cdc672dd4c40a446bf0367.png'
          title='活動BAR！'
          isNew
          to='/events'
        >
          學校最近有什麼新活動？快來加入活動！建立屬於自己的活動BAR!
        </Feature>
      </div>
    </div>
    <About />
  </Layout>
)

export default enhance(Index)
