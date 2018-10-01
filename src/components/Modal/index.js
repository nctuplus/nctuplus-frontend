/*
  modal([react component])
  Usage:
    Put <ModalWrapper/> before you call modal()
    Just simply use onClick={() => modal(<jsx/>)}
*/
import React from 'react'
import classNames from 'classnames'
import styles from './style.scss'

const getter = {
  func: [],
  add (callback) {
    this.func.push(callback)
    return this
  },
  remove () {
    this.func = []
    return this
  }
}

const Modal = (props) => (
  <div className={classNames('modal-dialog', 'modal-dialog-centered')} >
    <div 
      className={classNames('modal-content', 'border-0', 'rounded-0', styles.modalContent)}
      onClick={e => e.stopPropagation()}
    >
      {props.children}
    </div>
  </div>
)

class ModalWrapper extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      modal: null
    }
    this.addModal = this.addModal.bind(this)
    this.removeModal = this.removeModal.bind(this)
  }
  componentDidMount () {
    getter
      .add(this.addModal)
      .add(this.removeModal)
  }
  componentWillUnmount () {
    this.setState = () => {}
    getter.remove()
  }
  addModal (content) {
    document.body.style.overflowY = 'hidden'
    this.setState({open: true, modal: content})
  }
  removeModal () {
    document.body.style.overflowY = 'auto'
    this.setState({open: false})
  }
  render () {
    return (
      <div className={classNames('modal', this.state.open ? 'd-block' : 'd-none', this.state.open && styles.modalBG)} onClick={this.removeModal}>
        {
          this.state.open &&
            <Modal>
              {this.state.modal}
            </Modal>
        }
      </div>
    )
  }
}

const modal = (content) => {
  getter.func[0](content)
}

export {ModalWrapper, Modal, modal}
