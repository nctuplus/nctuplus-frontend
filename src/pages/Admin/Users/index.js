
import React from 'react'
import { connect } from 'react-redux'
import Layout from 'pages/Layout'
import { InputWithButton } from 'components/FormUtils'
import UsersTable from 'components/Admin/UsersTable'
import { fetchUsers } from 'api/Controllers/users'
import actions from 'api/Actions/Users'

const mapStateToProps = (state) => ({
  users: state.users.index
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (payload) => dispatch(fetchUsers(payload)),
  updatePage: (page) => dispatch(actions.users.index.updatePage(page)),
  updateFilters: (filters) => dispatch(actions.users.index.updateFilters(filters))
})

class Users extends React.Component {
  componentDidMount () {
    this.props.fetchData({
      page: 1
    })
  }

  componentDidUpdate (prevProps) {
    let { users } = this.props
    if (users.page !== prevProps.users.page || users.filters !== prevProps.users.filters) {
      this.props.fetchData({
        page: this.props.users.page,
        q: {
          filters: {
            custom_search: users.filters.search_by
          }
        }
      })
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  render () {
    return (
      <Layout>
        <div className='container pt-4'>
          <div className='row'>
            <div className='col-4 offset-3'>
              <InputWithButton
                placeholder='搜尋使用者'
                button_style='primary'
                button_content='搜尋'
                onClick={(value) => this.props.updateFilters({ search_by: value })}
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
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
