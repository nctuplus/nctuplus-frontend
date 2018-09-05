
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import PageWrapper from '../../../../Components/PageWrapper'
import DepartmentsTable from '../../../../Components/admin/DepartmentsTable'
import { fetchDepartments } from '../../../../Redux/Actions/Departments'

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
      <PageWrapper>
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
      </PageWrapper>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
