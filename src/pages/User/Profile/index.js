
import React from 'react'
import Timetable from 'components/Timetable'
import { connect } from 'react-redux'
import Card from './Card'
import Analysis from './Analysis'
import CreditTable from './CreditTable'

const Profile = ({ currentUser }) => (
  <div className='row mt-2'>
    <div className='col-12 col-lg-6'>

      <div className='m-0 m-md-2'>
        <Card user={currentUser} />
      </div>

      <div className='m-0 m-md-2 p-3' >
        <Analysis user={currentUser} />
      </div>

      <div className='m-0 m-md-2'>
        <CreditTable user={currentUser} />
      </div>
    </div>
    <div className='col-12 col-lg-6'>
      <div className='m-0 m-md-1 bg-white'>
        <Timetable />
      </div>
    </div>
  </div>
)
const mapStateToProps = state => ({ currentUser: state.user.currentUser })

export default connect(mapStateToProps)(Profile)
