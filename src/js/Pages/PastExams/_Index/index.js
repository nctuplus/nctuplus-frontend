
import React from 'react'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from '../../../Components/Search'
import { PastExamsTable } from '../../../Components/PastExamsTable'
import { InputWithButton } from '../../../Components/FormUtils'

import { connect } from 'react-redux'
import { updatePastExamsPage, fetchPastExams } from '../../../Redux/Actions/PastExams'

const Index = (props) => {
  props.pastExams.status || props.fetch_data()
  return (
    <div className='page-wrapper'>
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
                  props.pastExams.data.slice(0, 10).map((pastExam, index) => (
                    <SearchPanelNews href={`/past_exams/${pastExam.id}`} key={index}>
                      {
                        /* get diff of date */
                        Math.ceil((Date.now() - Date.parse(pastExam.updated_at)) / 864000000)
                      }
                      天前 { pastExam.user.name } 上傳了
                      <strong>{ pastExam.course }</strong>
                      的考古題
                    </SearchPanelNews>
                    )
                  )
                }
              </SearchPanelNewsFeed>
            </SearchPanel>
          </div>
          <div className='col-12 col-md-9'>
            <PastExamsTable {...props.pastExams} update_page={props.update_page} />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pastExams: state.pastExams
})
const mapDispatchToProps = (dispatch) => ({
  fetch_data: (page) => dispatch(fetchPastExams(page)),
  update_page: (page) => dispatch(updatePastExamsPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
