import React from 'react'
import { connect } from 'react-redux'
import Graph from './Graph'
const GPA = ({ currentUser }) => (
  <div className='row m-2 mt-3'>
    {/* <Selection></Selection> */}
    <Graph />
  </div>
)
const mapStateToProps = state => ({ currentUser: state.user.currentUser })
export default connect(mapStateToProps)(GPA)
