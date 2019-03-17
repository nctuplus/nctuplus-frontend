
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Layout from 'pages/Layout'
import Show from 'pages/Comments/Show'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from 'components/Search'
import * as Comments from 'components/Comment'
import { InputWithButton } from 'components/FormUtils'
import Spinner from 'components/Spinner'
import { getComments, getCommentsLatestNews } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'

class Index extends React.Component {
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
    this.props.fetchLatestNews()
  }

  componentDidUpdate (prevProps) {
    let comments = this.props.comments
    // 從 /comments/:id 回到 /comments 也要重新fetch，因為在Router是用render不是component
    if (!this.props.show && prevProps.show) {
      this.props.fetchData({
        page: 1,
        q: {
          sort: {
            order: 'desc',
            by: 'created_at'
          }
        }
      })
      this.props.fetchLatestNews()
    }

    if (comments.page !== prevProps.comments.page || comments.filters !== prevProps.comments.filters) {
      this.props.fetchData({
        page: comments.page,
        q: {
          sort: {
            order: 'desc',
            by: 'created_at'
          },
          filters: {
            custom_search: comments.filters.search_by
          }
        }
      })
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  render () {
    return (
      <React.Fragment>
        <Layout>
          <div className='container pt-3'>
            <div className='row'>
              <div className='col-md-12 col-lg-3'>
                <SearchPanel>
                  <InputWithButton
                    placeholder='課名/老師/標題'
                    button_style='primary'
                    button_content={<i className='fa fa-search' />}
                    onClick={(value) => this.props.updateFilters({ search_by: value })}
                  />
                  <SearchPanelButtonGroup
                    new_title='新增文章'
                    new_link='/comments/new'
                    new_btn_type='info'
                    mine_title='我的文章'
                    mine_link='/comments/?mine=true'
                    mine_btn_type='primary'
                  />
                  <SearchPanelCollegeList />
                  <SearchPanelNewsFeed>
                    {
                      this.props.latestNews.data &&
                      this.props.latestNews.data.length
                        ? this.props.latestNews.data.map((comment, index) => (
                        // 這裡因為最新動態可能會有同一篇心得的新增和回覆，所以key不能用comment id
                          <SearchPanelNews
                            href={`/comments/${comment.id}`}
                            status={comment.status}
                            clickable
                            key={index}
                          >
                            { moment(comment.time).fromNow() }
                            { comment.anonymity ? '匿名' : comment.user.name }
                            { comment.status ? '回覆了' : '新增了' }
                            <strong>{ comment.course.name }</strong>
                            的文章-{ comment.title }
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
                <Comments.Table {...this.props.comments} updatePage={this.props.updatePage.bind(this)} />
              </div>
            </div>
          </div>
        </Layout>
        {this.props.show && <Show />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments.index,
  latestNews: state.comments.latestNews
})
const mapDispatchToProps = (dispatch) => ({
  fetchData: (payload) => dispatch(getComments(payload)),
  updatePage: (page) => dispatch(actions.comments.index.updatePage(page)),
  updateFilters: (filters) => dispatch(actions.comments.index.updateFilters(filters)),
  fetchLatestNews: () => dispatch(getCommentsLatestNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
