
import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import moment from 'moment'
import Layout from 'pages/Layout'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from 'components/Search'
import * as PastExam from 'components/PastExam'
import { InputWithButton } from 'components/FormUtils'
import Spinner from 'components/Spinner'
import actions from 'api/Actions/PastExams'
import { getPastExams, getPastExamsLatestNews } from 'api/Controllers/pastExams'

const mapStateToProps = (state) => ({
  pastExams: state.pastExams.index,
  college: state.searchPanel.college,
  latestNews: state.pastExams.latestNews
})
const mapDispatchToProps = (dispatch) => ({
  fetchData: (page) => dispatch(getPastExams(page)),
  updateFilters: (filters) => dispatch(actions.pastExams.index.updateFilters(filters)),
  updatePage: (page) => dispatch(actions.pastExams.index.updatePage(page)),
  fetchLatestNews: (payload) => dispatch(getPastExamsLatestNews(payload))
})

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount () {
      this.props.fetchData({
        page: 1,
        q: {
          sort: {
            order: 'desc',
            by: 'created_at'
          }
        }
      })
      this.props.fetchLatestNews({
        page: 1,
        q: {
          sort: {
            order: 'desc',
            by: 'created_at'
          }
        }
      })
    },
    componentDidUpdate (prevProps) {
      if (this.props.pastExams.page !== prevProps.pastExams.page ||
          this.props.pastExams.filter !== prevProps.pastExams.filter ||
          this.props.college !== prevProps.college) {
        this.props.fetchData({
          page: this.props.pastExams.page,
          q: {
            sort: {
              order: 'desc',
              by: 'created_at'
            },
            filters: {
              custom_search: this.props.pastExams.filter.search_by
            }
          }
        })
        this.props.fetchLatestNews({
          page: 1,
          q: {
            sort: {
              order: 'desc',
              by: 'created_at'
            }
          }
        })
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
      }
    }
  })
)

const Index = ({ pastExams, latestNews, updatePage, updateFilters }) => (
  <Layout>
    <div className='container pt-3'>
      <div className='row'>
        <div className='col-12 col-md-3'>
          <SearchPanel>
            <InputWithButton
              placeholder='課名/老師'
              button_style='primary'
              button_content={<i className='fa fa-search' />}
              onClick={(value) => updateFilters({ search_by: value })}
            />
            <SearchPanelButtonGroup
              new_title='上傳考古題'
              new_link='/past_exams/new'
              new_btn_type='info'
              mine_title='我的考古題'
              mine_link='/past_exams/?mine=true'
              mine_btn_type='primary'
            />
            <SearchPanelCollegeList />
            <SearchPanelNewsFeed >
              {
                latestNews.data && latestNews.data.length
                  ? latestNews.data
                    .slice(0, 10)
                    .map((pastExam, index) => (
                      <SearchPanelNews
                        href={`/past_exams/${pastExam.id}`}
                        key={pastExam.id}
                      >
                        { moment(pastExam.created_at).fromNow() }
                        { pastExam.uploader}
                        上傳了
                        <strong>{ pastExam.course.name }</strong>
                        的考古題
                      </SearchPanelNews>
                    ))
                  : <div className='text-center'>
                    <Spinner size={32} color='grey' />
                  </div>
              }
            </SearchPanelNewsFeed>
          </SearchPanel>
        </div>
        <div className='col-12'>
          <PastExam.Table {...pastExams} updatePage={updatePage} />
        </div>
      </div>
    </div>
  </Layout>
)

export default enhance(Index)
