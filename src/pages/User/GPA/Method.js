import React from 'react'
import styles from './Method.scss'
class Method extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      picked: false,
      country: '美國',
      school: 'UCLA',
      department: '資工系'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState(state => ({
      picked: !state.picked
    }))
    console.log(this.state.picked)
  }
  render () {
    return (
      this.state.picked
        ? <button className={styles.rowPicked} >
          {this.state.country + this.state.school + this.state.department}
          <i className='fa fa-plus ml-auto p-3' />
        </button>
        : <button className={styles.row} onClick={this.handleClick}>
          {this.state.country + this.state.school + this.state.department}
          <i className='fa fa-plus ml-auto p-3' />
        </button>
    )
  }
}

export default Method
