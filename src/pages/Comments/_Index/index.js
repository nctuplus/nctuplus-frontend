
import React from 'react'
import { connect } from 'react-redux'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from 'components/Search'
import Layout from 'pages/Layout'
import * as Comments from 'components/Comment'
import { InputWithButton } from 'components/FormUtils'
import Spinner from 'components/Spinner'
import { getComments, getCommentsLatestNews } from 'api/Controllers/comments'
import actions from 'api/Actions/Comments'

class Index extends React.Component {
  componentDidMount () {
    let comments = this.props.comments
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
    this.props.fetchLatestNews({
      page: 1,
      q: {
        sort: {
          order: 'desc',
          by: 'created_at'
        }
      }
    })
  }

  componentDidUpdate (prevProps) {
    let comments = this.props.comments
    if (comments.page !== prevProps.comments.page || comments.filters !== prevProps.comments.filters) {
      this.props.fetchData({
        page: comments.page,
        q: {
          filters: {
            custom_search: comments.filters.search_by
          }
        }
      })
    }
  }

  componentWillUnmount () {
    this.props.updatePage(1)
    this.props.updateFilters({ search_by: '' })
  }

  render () {
    return (
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
                    this.props.latestNews.data.length
                      ? this.props.latestNews.data.slice(0, 10).map((comment, index) => (
                        <SearchPanelNews href={`/comments/${comment.id}`} key={comment.id}>
                          {
                            /* get diff of date */
                            Math.ceil((Date.now() - Date.parse(comment.created_at)) / 864000000)
                          }
                          天前 { comment.user.name } 新增了
                          <strong>{ comment.course.course_name }</strong>
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
            <div className='col-md-12 col-lg-9'>
              <Comments.Table {...this.props.comments} updatePage={this.props.updatePage.bind(this)} />
            </div>
          </div>
        </div>
      </Layout>
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
  fetchLatestNews: (payload) => dispatch(getCommentsLatestNews(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
