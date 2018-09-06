
import React from 'react'
import { connect } from 'react-redux'
import PageWrapper from 'components/PageWrapper'
import { InputWithButton } from 'components/FormUtils'
import UsersTable from 'components/Admin/UsersTable'
import { fetchUsers, updateUsersPage, resetUsersPage } from 'redux/Actions/Users'

const mapStateToProps = (state) => ({
  users: state.users
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (page) => dispatch(fetchUsers(page)),
  updatePage: (page) => dispatch(updateUsersPage(page)),
  resetPage: () => dispatch(resetUsersPage())
})

class Users extends React.Component {
  componentDidMount () {
    this.props.fetchData(1)
  }

  componentDidUpdate (prevProps) {
    if (this.props.users.page !== prevProps.users.page) {
      this.props.fetchData(this.props.users.page)
    }
  }

  componentWillUnmount () {
    this.props.resetPage()
  }

  render () {
    return (
      <PageWrapper>
        <div className='container pt-4'>
          <div className='row'>
            <div className='col-4 offset-3'>
              <InputWithButton
                placeholder='搜尋使用者'
                button_style='primary'
                button_content='搜尋'
              />
            </div>
            <div className='col-2'>
              <button className='btn btn-success'>系級統計</button>
            </div>
            <div className='col-12 pt-4'>
              <UsersTable {...this.props.users} updatePage={this.props.updatePage.bind(this)} />
            </div>
          </div>
        </div>
      </PageWrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
