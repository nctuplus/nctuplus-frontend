
import React from 'react'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from 'components/Search'
import Layout from 'pages/Layout'
import * as PastExam from 'components/PastExam'
import { InputWithButton } from 'components/FormUtils'
import Spinner from 'components/Spinner'

import { connect } from 'react-redux'
import pastExamsActions from 'api/Actions/PastExams'
import { compose, lifecycle } from 'recompose'
import moment from 'moment'

const mapStateToProps = (state) => ({ pastExams: state.pastExams })
const mapDispatchToProps = (dispatch) => ({
  fetchData: (page) => dispatch(pastExamsActions.index.fetch(page)),
  updatePage: (page) => dispatch(pastExamsActions.index.updatePage(page))
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount () { this.props.fetchData() } })
)

const Index = ({ pastExams, updatePage }) => (
  <Layout>
    {console.log(pastExams)}
    <div className='container pt-3'>
      <div className='row'>
        <div className='col-12 col-md-3'>
          <SearchPanel>
            <InputWithButton
              placeholder='課名/老師/檔名'
              button_style='primary'
              button_content={<i className='fa fa-search' />}
            />
            <SearchPanelButtonGroup
              new_title='上傳考古題'
              new_link='/past_exams/upload'
              new_btn_type='info'
              mine_title='我的考古題'
              mine_link='/past_exams/?mine=true'
              mine_btn_type='primary'
            />
            <SearchPanelCollegeList />
            <SearchPanelNewsFeed >
              {
                pastExams.data.length
                  ? pastExams.data
                    .slice(0, 10)
                    .map((pastExam, index) => (
                      <SearchPanelNews
                        href={`/past_exams/${pastExam.id}`}
                        key={index}
                      >
                        { moment(pastExam.updated_at).fromNow() }
                        { pastExam.uploader.name}
                          上傳了
                        <strong>{ pastExam.course.permanent_course.name }</strong>
                          的考古題
                      </SearchPanelNews>
                    )
                    )
                  : <div className='text-center'>
                    <Spinner size={32} color='grey' />
                  </div>
              }
            </SearchPanelNewsFeed>
          </SearchPanel>
        </div>
        <div className='col-12 col-md-9'>
          <PastExam.Table {...pastExams} updatePage={updatePage} />
        </div>
      </div>
    </div>
  </Layout>
)

export default enhance(Index)
