import React from 'react'
import Switch from 'react-toggle-switch'
class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      switched: false
    }
    this.toggleSwitch = this.toggleSwitch.bind(this)
  }

  toggleSwitch () {
    this.props.getSwitchState(this.state.switched)
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      }
    })
  };

  render () {
    return (
      <Switch onClick={this.toggleSwitch} on={this.state.switched} />
    )
  }
}

export default Toggle
