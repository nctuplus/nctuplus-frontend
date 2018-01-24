import React from 'react'

const Bulletin = (props) => (
  <span>
    <span className='inline-block ellipsis title'>{ props.title }</span>
    <span className='inline-block date'>{ props.updated_at.substr(0, 10) }</span>
    <br />
  </span>
)

const TAB_UPDATE_LOG = 0
const TAB_NEWS = 1

class BulletinBoard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { tab: TAB_UPDATE_LOG }
  }
  render () {
    return (
      <div className='bulletin-board'>
        <hr />
        <div className='tabs'>
          <button
            className={this.state.tab === TAB_UPDATE_LOG ? 'active' : ''}
            onClick={() => this.setState({ tab: TAB_UPDATE_LOG })}
          >
            網站改版
          </button>
          <button
            className={this.state.tab === TAB_NEWS ? 'active' : ''}
            onClick={() => this.setState({ tab: TAB_NEWS })}
          >
            最新消息
          </button>
        </div>
        <div className='bulletins'>
          {
            this.props.bulletins
            ? this.props.bulletins.map((bulletin, index) => {
              if (bulletin.type === this.state.tab) { return <Bulletin {...bulletin} key={index} /> }
            }) : ''
          }
        </div>
      </div>
    )
  }
}

export default BulletinBoard
