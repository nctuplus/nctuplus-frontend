import React from 'react'
import { connect } from 'react-redux'
import Graph from './Graph'
const GPA = ({ currentUser }) => (
  <div className='container'>
    <div className='row m-4'>
      {/* <Selection></Selection> */}
      <Graph />
    </div>
  </div>
)
const mapStateToProps = state => ({ currentUser: state.user.currentUser })
export default connect(mapStateToProps)(GPA)
