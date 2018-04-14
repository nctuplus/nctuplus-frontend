
import React from 'react'
import PageWrapper from '../../../Components/PageWrapper'
import './style.scss'

const TutorialStep = (props) => (
  <div className='mb-4 d-block bg-white'>
    <div className='title-block col-12 text-center'>
      <div className='text'>{ props.title }</div>
    </div>
    <div className='content px-4'>
      { props.children }
    </div>
  </div>
)

const Tutorial = (props) => (
  <PageWrapper className='tutorial'>
    <div className='container'>
      <div className='row'>
        <div className='group w-100'>模擬排課</div>
        <TutorialStep title='進入NCTU+首頁，進行登入動作'>
          NCTU+可同時挷定單一入口、Facebook、Google+帳號。
          <img alt='0' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/0-fa348106ae03772e4e952ce79a6ac0f5.png' />
        </TutorialStep>
        <TutorialStep title='進入模擬排課頁面'>
          <img alt='1' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/1-b4c7600a9964c800aafb02d3ed80ec70.png' />
        </TutorialStep>
        <TutorialStep title='參考交大的課程時間表'>
          可以查詢自己科系的必修及選修科目。<br />
          在課程時間表首頁可找到代表課堂時間(如: 2GH)及教室地點(如: EC315)的代碼參考表。
          <img alt='3' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/3-88b65b3d0cf257a8a5afaa6ab3f8babd.png' />
        </TutorialStep>
        <TutorialStep title='在NCTU+模擬排課中查詢欲選的課程'>
          舉凡課名、教授、時間等篩選條件皆可直接查詢。<br />
          按下"+"即可選中，在右方的課表中加入該課程。<br />
          按下"★"即收藏該課程。
          <img alt='4' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/4-6e0af60501f4e05b4669aaf97d208b1e.png' />
        </TutorialStep>
        <TutorialStep title='衝堂判定功能'>
          若選到與已選的課程時間重疊的話，則會出現「衝堂」警示。
          <img alt='5' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/5-8ccf38d266be36c5b904d15af56ba324.png' />
        </TutorialStep>
        <TutorialStep title='空堂排課功能'>
          若想在剩餘的空堂選一些通識或選修課程，可以在右方課表先選取可接受的時間，再按下"空堂"按鈕，輕鬆挑選不會衝堂的課程。
          <img alt='6' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/6-58d1ac24e25d01f2758f9ba37bf9d863.png' />
          <img alt='7' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/7-1641f90c789f5324ec0c9fcc63d4f41e.png' />
        </TutorialStep>
      </div>
      <div className='row'>
        <TutorialStep title='正式排課'>
          <img alt='8' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/8-6a5e120d669b6a39a783ff53ff72a859.png' />
          <img alt='9' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/9-8ac1206ed28835d2109c0ec331d29602.png' />
        </TutorialStep>
        <TutorialStep title='點選「課程加退選」→「課程加選」進行加選'>
          已經在NCTU+裡模擬排課過，正式選課時就能輕鬆無負擔。
          <img alt='10' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/10-d67eda18df6f30f96b96f3bdcc1aa508.png' />
        </TutorialStep>
        <TutorialStep title='查詢選課狀況'>
          選課後可以點選「確認選課狀況」→「查詢選課狀況」來查詢。
          <img alt='12' className='img-fluid' src='https://plus.nctu.edu.tw/assets/courses-tutorial/12-451701559108ac1ac3f5227fcc397508.png' />
        </TutorialStep>
      </div>
    </div>
  </PageWrapper>
)

export default Tutorial
