
import React from 'react'
import classNames from 'classnames'
import styles from './style.scss'

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
          onKeyDown={(e) => { if (e.keyCode === 13) { this.props.onClick(this.state.value) } }}
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
      <label className='col-4 col-md-3 col-lg-2 text-md-right align-self-center m-0'>{ props.label }</label>
      <div className='col-12 col-md-9 col-lg-10'>
        {props.children}
      </div>
    </div>
  </div>
)

class SemesterDropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      option: '107下',
      show: false
    }
    this.onClick = this.onClick.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  // 把預設的選項更新到上層component的filter
  componentDidMount () {
    const { option } = this.state
    this.props.updateSearchFilter({
      year: parseInt(option.substr(0, 3), 10),
      term: option.charAt(4) === '上' ? 0 : 1
    })
  }

  onClick (event) {
    event.preventDefault()
    this.setState({
      show: !this.state.show
    })
  }

  onSelect (option) {
    this.props.updateSearchFilter({
      year: parseInt(option.substr(0, 3), 10),
      term: option.charAt(4) === '上' ? 0 : 1
    })

    this.setState({
      option: option,
      show: false
    })
  }

  render () {
    const options = ['107下', '107上', '106下', '106上', '105下', '105上', '104下', '104上', '103下', '103上', '99下']
    return (
      <div className='dropdown'>
        <button className='btn btn-default dropdown-toggle' onClick={this.onClick}>{this.state.option}</button>
        <div className={classNames('dropdown-menu', styles.dropdownMenu, this.state.show && 'show')}>
          {
            options.map(option => (
              <div
                className={classNames('dropdown-item', styles.dropdownItem)}
                onClick={() => this.onSelect(option)}
                key={option}
              >
                {option}
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export { LabeledInput, InputWithButton, SemesterDropdown }
