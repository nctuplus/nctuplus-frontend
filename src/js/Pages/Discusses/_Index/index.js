
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
import { updateDiscussesPage } from '../../../Redux/Actions/Discusses'

const Index = (props) => (
  <div className='page-wrapper'>
    <div className='container'>
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
                props.recent_discusses.map((value, index) => (
                  <SearchPanelNews href={`/discusses/${value.id}`} key={index}>
                    { value.date }天前 { value.user } 新增了
                    <strong>{ value.course }</strong>
                    的文章-{ value.content }
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

const mapStateToProps = (state) => ({
  status: state.discusses.status,
  recent_discusses: state.discusses.recent_discusses,
  discusses: state.discusses.discusses
})
const mapDispatchToProps = (dispatch) => ({
  update_page: (page) => dispatch(updateDiscussesPage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
