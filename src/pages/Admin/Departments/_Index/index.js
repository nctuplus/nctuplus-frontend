
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Layout from 'pages/Layout'
import DepartmentsTable from 'components/admin/DepartmentsTable'
import { fetchDepartments } from 'api/Actions/Departments'

const mapStateToProps = (state) => ({
  departments: state.departments.all
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchDepartments())
})

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <Layout>
        <div className='container pt-4'>
          <div className='row'>
            <div className='ml-auto'>
              <Link to='/admin/departments/new'>
                <button className='btn btn-warning'>新增系所</button>
              </Link>
            </div>
            <div className='col-12 pr-0 pt-3'>
              <DepartmentsTable data={this.props.departments.data} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
