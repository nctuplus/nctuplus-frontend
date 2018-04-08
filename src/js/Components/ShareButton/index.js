
import React from 'react'
import {
  EntypoExport,
  EntypoPinterest,
  EntypoTwitter,
  EntypoFacebook,
  EntypoGoogleplus,
  EntypoPaperPlane
} from 'react-entypo'
import './style.scss'

class ShareButton extends React.Component {
  render () {
    return (
      <div>
        <div className='share-button'>
          <button className='btn btn-primary'><EntypoExport />分享</button>
          <div className='d-none'>
            <EntypoPinterest />
            <EntypoFacebook />
            <EntypoGoogleplus />
            <EntypoTwitter />
            <EntypoPaperPlane />
          </div>
        </div>
      </div>
    )
  }
}

export default ShareButton
