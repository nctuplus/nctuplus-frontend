
import React from 'react'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from 'components/Search'
import PageWrapper from 'components/PageWrapper'
import { CommentsTable } from 'components/CommentsTable'
import { InputWithButton } from 'components/FormUtils'
import Spinner from 'components/Spinner'

import { connect } from 'react-redux'
import { updateCommentsPage, fetchComments } from 'api/Actions/Comments'

const Index = (props) => {
  props.comments.status || props.fetch_data()
  return (
    <PageWrapper>
      <div className='container pt-3'>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <SearchPanel>
              <InputWithButton
                placeholder='課名/老師/標題'
                button_style='primary'
                button_content={<i className='fa fa-search' />}
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
                  props.comments.data.length
                    ? props.comments.data.slice(0, 10).map((comment, index) => (
                      <SearchPanelNews href={`/comments/${comment.id}`} key={index}>
                        {
                          /* get diff of date */
                          Math.ceil((Date.now() - Date.parse(comment.updated_at)) / 864000000)
                        }
                        天前 { comment.user.name } 新增了
                        <strong>{ comment.course }</strong>
                        的文章-{ comment.title }
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
            <CommentsTable {...props.comments} update_page={props.update_page} />
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

const mapStateToProps = (state) => ({
  comments: state.comments.all
})
const mapDispatchToProps = (dispatch) => ({
  fetch_data: (page) => dispatch(fetchComments(page)),
  update_page: (page) => dispatch(updateCommentsPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
