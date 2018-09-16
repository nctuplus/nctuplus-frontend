
import React from 'react'

const Analysis = ({ user }) => (
  <div className='row bg-white'>
    <div className='col-4 p-1 text-center'>
      歷年平均分數
      <h4 className='bold'>{ user.average_grade }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      總排名
      <h4 className='bold'>{ user.is_graduated }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      距離畢業
      <h4 className='bold'>{ user.graduate_countdown } 天</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      本學期學分
      <h4 className='bold'>{ user.credits_this_semaster }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      已修學分
      <h4 className='bold'>{ user.all_credits }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      畢業學分
      <h4 className='bold'>{ user.graduate_credits }</h4>
    </div>
  </div>
)

export default Analysis
