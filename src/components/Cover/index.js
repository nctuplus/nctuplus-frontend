
import React from 'react'
import styles from './style.scss'

class Cover extends React.Component {
  render () {
    return (
      <div
        className={styles.cover}
        ref={cover => (this.cover = cover)}
        style={{
          background: `url('${this.props.images[0]}') no-repeat`,
          backgroundSize: 'cover'
        }}
      >
        { this.props.children }
      </div>
    )
  }
}

export default Cover
