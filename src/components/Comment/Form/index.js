
import React from 'react'
import Layout from 'pages/Layout'
import { LabeledInput } from 'components/FormUtils'
import { ModalWrapper } from 'components/Modal'
import { ToastWrapper } from 'components/Toast'

class Form extends React.Component {
  checkStarColor (rating, ratingIndex, starIndex) {
    return (rating.charAt(ratingIndex) - '0') >= starIndex ? { color: '#ffdd55' } : { color: '#dddddd' }
  }

  render () {
    const { payload } = this.props
    return (
      <Layout scroll={false}>
        <ToastWrapper />
        <div className='container bg-white p-3 p-md-4'>
          <div className='row'>
            <div className='col-12 col-md-8 offset-md-2'>
              <h2 className='mt-3 mx-3'>{this.props.formType === 'new' ? '新增心得' : '編輯心得'}</h2>

              <div className='col-12 my-4'><hr /></div>

              <h4 className='mt-4 mx-3'>Step1.選擇適用課程</h4>
              <form>
                <LabeledInput label='適用課程'>
                  <div className='input-group'>
                    <input
                      value={this.props.courseSearchWord}
                      onChange={e => this.props.updateSearchWord(e.target.value)}
                      className='form-control'
                      placeholder='搜尋課名（交大專用）'
                      required
                    />
                    <div className='input-group-append'>
                      <button className='btn btn-default' onClick={this.props.onSearch}>搜尋</button>
                    </div>
                  </div>
                </LabeledInput>
              </form>
              <ModalWrapper />

              <h4 className='mt-4 mx-3'>Step2.輸入標題以及內容</h4>
              <form ref={this.props.formRef}>
                <LabeledInput label='標題'>
                  <input
                    value={payload.title}
                    onChange={e => this.props.updatePayload({ title: e.target.value })}
                    className='form-control'
                    placeholder='必填'
                    type='text'
                    required
                  />
                </LabeledInput>

                <LabeledInput label='內容'>
                  <textarea
                    value={payload.content}
                    onChange={e => this.props.updatePayload({ content: e.target.value })}
                    className='form-control'
                    placeholder='必填'
                    rows='10'
                    required
                  />
                </LabeledInput>

                <LabeledInput label='涼度'>
                  <span style={{ fontSize: '20px' }}>
                    {
                      [1, 2, 3, 4, 5].map((number, index) => (
                        <i
                          key={index}
                          className='fa fa-star mx-1'
                          style={this.checkStarColor(payload.rating, 0, number)}
                          onClick={e => this.props.updatePayload({ rating: this.props.replaceRating(payload.rating, 0, number) })}
                        />
                      ))
                    }
                  </span>
                </LabeledInput>

                <LabeledInput label='甜度'>
                  <span style={{ fontSize: '20px' }}>
                    {
                      [1, 2, 3, 4, 5].map((number, index) => (
                        <i
                          key={index}
                          className='fa fa-star mx-1'
                          style={this.checkStarColor(payload.rating, 1, number)}
                          onClick={e => this.props.updatePayload({ rating: this.props.replaceRating(payload.rating, 1, number) })}
                        />
                      ))
                    }
                  </span>
                </LabeledInput>

                <LabeledInput label='深度'>
                  <span style={{ fontSize: '20px' }}>
                    {
                      [1, 2, 3, 4, 5].map((number, index) => (
                        <i
                          key={index}
                          className='fa fa-star mx-1'
                          style={this.checkStarColor(payload.rating, 2, number)}
                          onClick={e => this.props.updatePayload({ rating: this.props.replaceRating(payload.rating, 2, number) })}
                        />
                      ))
                    }
                  </span>
                </LabeledInput>
              </form>

              <div className='col-md-12 text-right mt-4'>
                <div className='d-inline-block mx-1'>
                  <label>
                    <input
                      checked={payload.anonymity}
                      onChange={e => this.props.updatePayload({ anonymity: !payload.anonymity })}
                      className='mx-2'
                      type='checkbox'
                    />
                    匿名
                  </label>
                </div>
                <button className='btn btn-success btn-large mx-1'>預覽</button>
                <button type='submit' className='btn btn-primary btn-large mx-1' onClick={this.props.onSubmit}>送出</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Form
