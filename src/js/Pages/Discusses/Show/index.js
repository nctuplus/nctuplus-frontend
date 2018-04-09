
import React from 'react'
import { Comment, SubComment } from '../../../Components/Comment'

class Show extends React.Component {
  render () {
    return (
      <div className='page-wrapper discuss-detail' >
        <div className='container'>
          <div className='col-10 offset-1 bg-white'>
            <Comment
              enable_reply
              title='社會學'
              date='2016/06/30 23:08'
              user_link='https://www.facebook.com/463545620515814'
              user_image='https://graph.facebook.com/463545620515814/picture?type=large&amp;redirect=true&amp;width=140&amp;height=140'
              reply={
                <SubComment
                  date='2015/11/19 19:42'
                  user_link='https://www.facebook.com/923934061033151'
                  user_image='https://graph.facebook.com/923934061033151/picture?type=large&redirect=true&width=140&height=140'
                >
                  hi~
                </SubComment>
              }
            >
              老師本人上課很有趣，也很有自己的看法
              考試出題很活，分數不容易拿，上課要認真的才有機會全部都會寫
            </Comment>
          </div>
        </div>
      </div>
    )
  }
}

export default Show
