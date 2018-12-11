import React from 'react'
import styles from './style.scss'
class ProgressBar extends React.Component {
  getLength (goal, progress, past) {
    if (progress === 0) {
      console.log('XD')
      return '0.75%'
    } else if (past >= goal) {
      console.log('XDD')
      return '0%'
    } else if (progress + past >= goal) {
      console.log('XDDD')
      return ((goal - past) / goal) * 100 + '%'
    } else {
      console.log('XDDDD')
      return (progress / goal) * 100 + '%'
    }
  }
  render () {
    let goal = this.props.goal
    let passed = this.props.passed
    let current = this.props.current
    return (
      <div className={styles.progressBar}>
        <Bar myLength={this.getLength(goal, passed, 0)}
          leftShift='0px'
          topShift='0px'
          barColor='red'
        />
        {!this.props.switched &&
        <Bar myLength={this.getLength(goal, current, passed)}
          leftShift={this.getLength(goal, passed)}
          topShift='-25px'
          barColor='orange'
        />
        }
      </div>
    )
  }
}

export default ProgressBar

const Bar = ({ myLength, leftShift, topShift, barColor }) => (
  <div className={styles.bar}
    style={{
      width: myLength,
      left: leftShift,
      top: topShift,
      backgroundColor: barColor
    }}
  />
)

export { Bar }
