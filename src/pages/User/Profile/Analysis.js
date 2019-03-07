
import React from 'react'

const Analysis = ({ user }) => (
  <div className='row bg-white'>
    <div className='col-4 p-1 text-center'>
      歷年平均分數
      <h4 className='bold'>{ user.avg_score }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      總排名
      <h4 className='bold'>{ user.rank }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      距離畢業
      <h4 className='bold'>{ user.graduate_day } 天</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      本學期學分
      <h4 className='bold'>{ user.now_credit }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      已修學分
      <h4 className='bold'>{ user.past_credit }</h4>
    </div>
    <div className='col-4 p-1 text-center'>
      畢業學分
      <h4 className='bold'>{ user.need_credit }</h4>
    </div>
  </div>
)

export default Analysis
