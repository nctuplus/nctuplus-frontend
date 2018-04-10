
import React from 'react'
import {
  SearchPanel,
  SearchPanelButtonGroup,
  SearchPanelCollegeList,
  SearchPanelNews,
  SearchPanelNewsFeed
} from '../../../Components/Search'
import { DiscussesTable } from '../../../Components/DiscussesTable'
import { InputWithButton } from '../../../Components/FormUtils'

import { connect } from 'react-redux'
import { updateDiscussesPage, fetchDiscusses } from '../../../Redux/Actions/Discusses'

const Index = (props) => {
  props.discusses.status || props.fetch_data()
  return (
    <div className='page-wrapper'>
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
                new_link='/discusses/new'
                new_btn_type='info'
                mine_title='我的文章'
                mine_link='/discusses/?mine=true'
                mine_btn_type='primary'
              />
              <SearchPanelCollegeList />
              <SearchPanelNewsFeed>
                {
                  props.discusses.data.slice(0, 10).map((discuss, index) => (
                    <SearchPanelNews href={`/discusses/${discuss.id}`} key={index}>
                      {
                        /* get diff of date */
                        Math.ceil((Date.now() - Date.parse(discuss.updated_at)) / 864000000)
                      }
                      天前 { discuss.user.name } 新增了
                      <strong>{ discuss.course }</strong>
                      的文章-{ discuss.title }
                    </SearchPanelNews>
                    )
                  )
                }
              </SearchPanelNewsFeed>
            </SearchPanel>
          </div>
          <div className='col-12 col-md-9'>
            <DiscussesTable {...props.discusses} update_page={props.update_page} />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  discusses: state.discusses
})
const mapDispatchToProps = (dispatch) => ({
  fetch_data: () => dispatch(fetchDiscusses()),
  update_page: (page) => dispatch(updateDiscussesPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
