
import React from 'react'
import classNames from 'classnames'

class InputWithButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  render () {
    return (
      <div className={classNames('input-group', this.props.className)}>
        <input
          className='form-control'
          placeholder={this.props.placeholder}
          type='text'
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <div className='input-group-append'>
          <button
            className={`btn btn-${this.props.button_style}`}
            onClick={() => this.props.onClick(this.state.value)}
          >
            { this.props.button_content }
          </button>
        </div>
      </div>
    )
  }
}

const LabeledInput = (props) => (
  <div className='form-group'>
    <div className='row'>
      <label className='col-2 text-right align-self-center'>{ props.label }</label>
      <div className='col-10'>
        {props.children}
      </div>
    </div>
  </div>
)

export { LabeledInput, InputWithButton }
