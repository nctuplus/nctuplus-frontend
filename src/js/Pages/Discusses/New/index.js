
import React from 'react'
import { PersonalRatingBar } from '../../../Components/Ratings'

class New extends React.Component {
  render () {
    return (
      <div className='discuss-detail page-wrapper'>
        <div className='container bg-white'>
          <div className='row'>
            <div className='col-9 offset-1'>
              <h1>新增文章</h1>

              <h4>Step1.選擇適用課程 - <span className='text-center' >/</span></h4>
              <div className='form-group'>
                <label className='col-2 text-right'>適用課程</label>
                <div className='col-10'>
                  <div className='input-group'>
                    <input className='form-control' placeholder='搜尋課名（交大專用）' />
                    <span className='input-group-btn'>
                      <button className='btn btn-default'>搜尋</button>
                    </span>
                  </div>
                </div>
              </div>

              <hr />

              <h4>Step2.輸入標題以及內容</h4>
              <div className='row form-group'>
                <label className='col-2 text-right'>標題</label>
                <div className='col-10'>
                  <input className='form-control' type='text' />
                </div>
              </div>
              <div className='row form-group'>
                <label className='col-2 text-right'>內容</label>
                <div className='col-10'>
                  <textarea className='form-control' rows='10' />
                </div>
              </div>
              <div className='offset-2'>
                <PersonalRatingBar>涼度</PersonalRatingBar>
                <PersonalRatingBar>甜度</PersonalRatingBar>
                <PersonalRatingBar>深度</PersonalRatingBar>
              </div>
              <div className='col-md-12 text-right'>
                <div className='checkbox inline-block'>
                  <label>
                    <input type='checkbox' /> 匿名
                  </label>
                </div>
                <button className='btn btn-success btn-large'>預覽</button>
                <button className='btn btn-primary btn-large'>送出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default New
