
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { getBulletins, deleteBulletin } from 'api/Controllers/bulletins'
import actions from 'api/Actions/Bulletins'
import { FETCHING_STATUS } from 'utilities/constants'

const mapStateToProps = (state) => ({
  bulletins: state.bulletins.index,
  bulletinDeleteStatus: state.bulletins.delete.status
})

const mapDispatchToProps = (dispatch) => ({
  fetchBulletins: (payload) => dispatch(getBulletins(payload)),
  deleteBulletin: (id) => {
    if (window.confirm('確定刪除此活動嗎?')) {
      dispatch(deleteBulletin(id))
    }
  },
  deleteBulletinReset: () => dispatch(actions.bulletins.delete.setStatus(FETCHING_STATUS.IDLE))
})

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchBulletins()
  }

  componentDidUpdate () {
    if (this.props.bulletinDeleteStatus === FETCHING_STATUS.DONE) {
      this.props.deleteBulletinReset()
      this.props.fetchBulletins()
    }
  }

  render () {
    return (
      <Bulletin
        type='bulletin'
        url={this.props.match.url}
        data={this.props.bulletins.data}
        onDelete={(id) => this.props.deleteBulletin(id)}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
