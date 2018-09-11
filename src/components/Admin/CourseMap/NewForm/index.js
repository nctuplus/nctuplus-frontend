
import React from 'react'
import Layout from 'pages/Layout'

const Form = props => (
  <Layout>
    <div className='container pt-3'>
      <div className='row'>
        <div className='col-12'>
          <div className='card border-primary'>
            <div className='card-header bg-primary text-white'>建立課程地圖</div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-6 offset-2'>
                  <h2>新增課程地圖</h2>
                  <form>
                    <div className='form-group'>
                      <div className='row align-items-center'>
                        <div className='col-3 text-right'>
                          <label>標題</label>
                        </div>
                        <div className='col-9'>
                          <input className='form-control' />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='row align-items-center'>
                        <div className='col-3 text-right'>
                          <label>適用系所</label>
                        </div>
                        <div className='col-9'>
                          <select className='form-control' />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='row align-items-center'>
                        <div className='col-3 text-right'>
                          <label>適用年度</label>
                        </div>
                        <div className='col-9'>
                          <select className='form-control' />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='row align-items-center'>
                        <div className='col-3 text-right'>
                          <label>複製現有</label>
                        </div>
                        <div className='col-9'>
                          <select className='form-control' />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='row align-items-center'>
                        <div className='col-3 text-right'>
                          <label>簡介</label>
                        </div>
                        <div className='col-9'>
                          <textarea className='form-control' />
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='row'>
                        <div className='col-12 text-right'>
                          <button className='btn btn-primary'>下一步</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Form
