
import React from 'react'
import Modal from 'components/Modal'
import styles from './style.scss'

import { connect } from 'react-redux'

import Hashids from 'hashids'

function getHash (userID, semesterID) {
  let hashids = new Hashids('nctuplusisgood5566', 8)
  return hashids.encode(userID, semesterID)
}

const mapStateToProps = (state) => ({
  userID: state.user.userID
})

const ShareModal = connect(mapStateToProps)((props) => {
  console.log(props)
  let hash = getHash(props.userID, props.semesterID)
  let shareURL = `https://plus.nctu.edu.tw/shares/${hash}`
  return (
    <Modal close={props.close}>
      <div className='modal-header'>
        <h5 className='modal-title'>分享</h5>
      </div>
      <div className={`modal-body ${styles.modalBody}`}>
        <a className='btn' href={`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`} target='_blank'><i className={`fa fa-facebook-square ${styles.facebook}`} /></a>
        <a className='btn' href={`https://plus.google.com/share?url=${shareURL}`} target='_blank'><i className={`fa fa-google-plus-square ${styles.google}`} /></a>
        <a className='btn' href={`https://twitter.com/home?status=${shareURL}`} target='_blank'><i className={`fa fa-twitter-square ${styles.twitter}`} /></a>
        <hr />
        <p className='input-group'>
          <span id='shareURL' className='input-group-prepend input-group-text mr-3'>{`https://plus.nctu.edu.tw/shares/${hash}`}</span>
          <span className='btn'><i className={`fa fa-copy ${styles.copy}`} /></span>
        </p>
      </div>
    </Modal>
  )
})

const ShareButton = () => (
  <div>
    <button className='btn btn-primary'>
      <i className='fa fa-export' />分享
    </button>
    {/* <ShareModal /> */}
  </div>
)

export {ShareModal, ShareButton}
