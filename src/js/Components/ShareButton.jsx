
import React from 'react'
import { Button } from 'react-bootstrap'
import {
  EntypoExport,
  EntypoPinterest,
  EntypoTwitter,
  EntypoFacebook,
  EntypoGoogleplus,
  EntypoPaperPlane
} from 'react-entypo'

class ShareButton extends React.Component {
  render () {
    return (
      <div>
        <div className='share-button'>
          <Button bsStyle='primary'><EntypoExport />分享</Button>
          <div className='hidden'>
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
