import React from 'react'
import styles from './style.scss'
class ProgressBar extends React.Component {
  getLength (goal, progress, past) {
    /*
    goal: the total length,
    progress: the length of this bar,
    past: the length of another bar
    */
    if (past >= goal) {
      return '0%'
    } else if (progress + past >= goal) {
      return ((goal - past) / goal) * 100 + '%'
    } else {
      return (progress / goal) * 100 + '%'
    }
  }
  render () {
    let goal = this.props.goal
    let passed = this.props.passed
    let current = this.props.current
    let barTopShift = '-15px'
    let secondBarLength = (this.props.switched) ? 0 : 1 // same effect as condition render to the second bar
    return (
      <div className={styles.progressBar}>
        <Bar myLength={this.getLength(goal, passed, 0)}
          barColor='linear-gradient(10deg, #0da1d4 0%, #1dd07e 100%)'
          borderRadius='3px 0px 0px 3px'
        />
        <Bar myLength={this.getLength(goal, current * secondBarLength, passed)}
          leftShift={this.getLength(goal, passed)}
          topShift={barTopShift}
          barColor='linear-gradient(10deg, #FFCF00,#E8A700,#FF9E00,#E87600,#FF6000)'
          borderRadius='0px 3px 3px 0px'
        />
      </div>
    )
  }
}

export default ProgressBar

const Bar = ({ myLength, leftShift = '0px', topShift = '0px', barColor, borderRadius }) => (
  <div className={styles.bar}
    style={{
      width: myLength,
      left: leftShift,
      top: topShift,
      backgroundImage: barColor,
      borderRadius: borderRadius
    }}
  />
)

export { Bar }
