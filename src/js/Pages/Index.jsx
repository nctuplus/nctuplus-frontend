

import React from 'react'
import FullWidthCover from '../Components/FullWidthCover'
import { Intro, IntroItem } from '../Components/Intro'
import About from '../Components/About'
import { CoverWrapper, CoverSlogan } from '../Components/Cover'
import BulletinBoard from '../Components/Bulletin'




const CoverImageUrls = [
	'https://plus.nctu.edu.tw/backgrounds/%E8%95%AD%E7%AB%8B%E5%93%81-1.jpg',
	'https://plus.nctu.edu.tw/backgrounds/%E9%BB%83%E5%A3%AB%E8%BB%92-1.jpg',
	'https://plus.nctu.edu.tw/backgrounds/%E9%99%B3%E6%B2%BF%E4%BB%BB-2.jpg',
	'https://plus.nctu.edu.tw/backgrounds/%E9%99%B3%E6%A3%95%E7%A5%88-1.jpg'
]

const IntroItems = [
  {
    image: 'https://plus.nctu.edu.tw/assets/new-index/discuss-intro-ef6b3b595b441e1124d39fbac28936a6.png',
    title: '全校課程心得',
    content: '選課前的好幫手，包羅歷年交大所有課程心得，舊文新文一次找齊，也包含課堂評價與歷屆成績，也歡迎同學一起討論。',
    is_new: false,
    to: '/discusses' 
  },
  {
    image: 'https://plus.nctu.edu.tw/assets/new-index/book-intro-b4d6cf076e7390ec242d2d0881df2c92.png',
    title: '二手書拍賣',
    content: '原文書太貴買不下手？二手書難找又麻煩？NCTU+提供二手書交易平台，歡迎加入二手書買賣的行列',
    is_new: false,
    to: '/books' 
  },
  {
    image: 'https://plus.nctu.edu.tw/assets/new-index/score-stat-intro-43382d8d1c5bbd18993c49a2f6e472c5.png',
    title: '畢業學分計算',
    content: '今年可以畢業嗎？令人苦惱的畢業學分計算一次完成，把握大學最後的時間！',
    is_new: false,
    to: '/books' 
  },
  {
    image: 'https://plus.nctu.edu.tw/assets/new-index/event-intro-68738fcde6cdc672dd4c40a446bf0367.png',
    title: '活動bar',
    content: '學校最近有什麼新活動？快來加入活動！建立屬於自己的活動BAR!',
    is_new: true,
    to: '/events' 
  },
]

const slogans = [
  '手邊有用不到的教科書嗎？<br/>快登入使用二手書平台！'
]

class Index extends React.Component {
  render() {
    return (
    	<div className="index">
    		<FullWidthCover images={CoverImageUrls} >
          <CoverWrapper>
            <h1>NCTU+</h1>
            <h3>交大智慧校園系統</h3>
            <h4 className="parallelogram2">
              Brilliant College Life
            </h4>
            <BulletinBoard />
            <CoverSlogan >{slogans[0]}</CoverSlogan>
          </CoverWrapper>
        </FullWidthCover>
        <Intro title="為什麼使用NCTU+?">
          {
            IntroItems.map((v, idx) => 
              <IntroItem 
                image={v.image} 
                title={v.title}
                to={v.to} 
                is_new={v.is_new}
                key={idx} 
              >
                {v.content}
              </IntroItem>
            )
          }
        </Intro>
        <About />
    	</div>
    )
  }
}

export default Index
