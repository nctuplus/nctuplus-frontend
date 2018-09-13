
import React from 'react'
import Spinner from 'components/Spinner'
import styles from './style.scss'

const Bulletin = (props) => (
  <span>
    <span className={`d-inline-block ellipsis ${styles.title}`}>{ props.title }</span>
    <span className={`d-inline-block ${styles.date}`}>{ props.updated_at.substr(0, 10) }</span>
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
      <div className={styles.bulletinBoard}>
        <hr />
        <div className={styles.tabs}>
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
        <div className={styles.bulletins}>
          {
            this.props.bulletins.length
              ? this.props.bulletins
                .filter(bulletin => bulletin.type === this.state.tab)
                .map((bulletin, index) => (<Bulletin {...bulletin} key={index} />))
              : <div className='text-center'>
                <Spinner size={24} color='white' />
              </div>
          }
        </div>
      </div>
    )
  }
}

export default BulletinBoard
