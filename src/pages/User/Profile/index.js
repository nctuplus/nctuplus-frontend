import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

const Profile = ({ currentUser }) => (
  <div className='row m-2 mt-4'>
    <div className='col-6 bg-white'>
      課表的部分
    </div>
    <div className='col-6'>
      <Card user={currentUser} />
    </div>

    {/* <div className='m-0 m-md-2 p-3' >
        <Analysis user={currentUser} />
      </div> */}

    {/* <div className='m-0 m-md-2'>
        <CreditTable user={currentUser} />
      </div> */}

    {/* <div className='col-12 col-lg-6'>
      <div className='m-0 m-md-1 bg-white'>
        <Timetable />
      </div>
    </div> */}
  </div>
)
const mapStateToProps = state => ({ currentUser: state.user.currentUser })

export default connect(mapStateToProps)(Profile)
