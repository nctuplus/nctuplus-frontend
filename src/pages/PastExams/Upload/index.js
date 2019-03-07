
import React from 'react'
import Layout from 'pages/Layout'
import * as PastExam from 'components/PastExam'
import SearchList from 'components/Course/SearchList'
import { modal, ModalWrapper } from 'components/Modal'

class Upload extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: '',
      payload: {
        description: '',
        file: null,
        courses: []
      }
    }
    this.searchCourse = this.searchCourse.bind(this)
  }
  addSearchCourse (course) {
    let newCourses = this.state.payload.courses
    newCourses.push(course)
    this.setState({ payload: { ...this.state.payload, courses: newCourses } })
  }
  removeSearchCourse (id) {
    let newCourses = this.state.payload.courses
    newCourses = newCourses.filter(e => e.course_id !== id)
    this.setState({ payload: { ...this.state.payload, courses: newCourses } })
  }
  findSearchCourse (id) {
    let index = this.state.payload.courses.findIndex(e => e.course_id === id)
    return index !== -1
  }
  searchCourse () {
    if (this.state.keyword) {
      modal(
        <SearchList
          searchWord={this.state.keyword}
          addSearchCourse={(course) => this.addSearchCourse(course)}
          removeSearchCourse={(id) => this.removeSearchCourse(id)}
          findSearchCourse={(id) => this.findSearchCourse(id)}
        />
      )
    }
  }
  render () {
    return (
      <Layout>
        <ModalWrapper />
        <div className='container bg-white p-4'>
          <h5>Step1.選擇適用課程 - <span className='text-center' /></h5>
          <div className='input-group my-5'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>適用課程</span>
            </div>
            <input
              className='form-control'
              placeholder='搜尋課名（交大專用）'
              value={this.state.keyword}
              onChange={(e) => this.setState({ keyword: e.target.value })}
              onKeyDown={(e) => { if (e.keyCode === 13) { this.searchCourse() } }}
            />
            <span className='input-group-append'>
              <button className='btn btn-outline-secondary' onClick={this.searchCourse}>搜尋</button>
            </span>
          </div>
          {
            this.state.payload.courses.map(
              (course, i) =>
                <span className='badge badge-secondary mx-2' key={i}>{course.course_name}</span>
            )
          }
          <hr />
          <h5>Step2.上傳檔案及填寫說明</h5>
          <PastExam.FileList />
          <hr />
          <PastExam.Upload disabled />
        </div>
      </Layout>
    )
  }
}

export default Upload
