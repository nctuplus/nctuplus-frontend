
import React from 'react'
import { Transition } from 'react-transition-group'
import './style.scss'

const duration = 1000

class Cover extends React.Component {
  constructor (props) {
    super(props)
    this.state = { in: true, index: 0 }
    this.changeBackground = this.changeBackground.bind(this)
  }
  changeBackground () {
    // repeatedly change index
    const state = this.state
    const props = this.props
    console.log(state)
    this.setState({ index: (state.index + 1) % props.images.length, in: false })
  }
  render () {
    let url = this.props.images[this.state.index]
    return (
      <Transition
        in={this.state.in}
        timeout={duration}
        onEntered={() => setTimeout(this.changeBackground, 3000)}
        onExited={() => this.setState({ in: true })}
        appear
      >
        {
          (status) => (
            <div
              className='cover'
              ref={cover => (this.cover = cover)}
              style={{
                transition: `all ${duration}ms ease`,
                background: (status === 'entered') ? `url("${url}")` : 'black'
              }}
            >
              { this.props.children }
            </div>
          )
        }
      </Transition>
    )
  }
}

export default Cover
