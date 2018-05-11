
import React from 'react'
import Modal from '../Modal'
import './style.scss'

const ShareModal = (props) => {
  let shareURL = `https://plus.nctu.edu.tw/%23${props.userHashID}` // urlencoding: # --> %23
  return (
    <Modal close={props.close}>
      <div className='modal-header'>
        <h5 className='modal-title'>分享</h5>
      </div>
      <div className='modal-body'>
        <a className='btn' href={`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`} target='_blank'><i className='fa fa-facebook-square' /></a>
        <a className='btn' href={`https://plus.google.com/share?url=${shareURL}`} target='_blank'><i className='fa fa-google-plus-square' /></a>
        <a className='btn' href={`https://twitter.com/home?status=${shareURL}`} target='_blank'><i className='fa fa-twitter-square' /></a>
        <hr />
        <p className='input-group'>
          <span id='shareURL' className='input-group-prepend input-group-text mr-3'>{`https://plus.nctu.edu.tw/#${props.userHashID}`}</span>
          <span className='btn'><i className='fa fa-copy' /></span>
        </p>
      </div>
    </Modal>
  )
}

const ShareButton = () => (
  <div>
    <button className='btn btn-primary'>
      <i className='fa fa-export' />分享
    </button>
    {/* <ShareModal /> */}
  </div>
)

export {ShareModal, ShareButton}
