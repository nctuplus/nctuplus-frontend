
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { getBackgrounds, deleteBackground } from 'api/Controllers/backgrounds'
import actions from 'api/Actions/Backgrounds'
import { FETCHING_STATUS } from 'utilities/constants'

const mapStateToProps = (state) => ({
  backgrounds: state.backgrounds.index,
  backgroundDeleteStatus: state.backgrounds.delete.status
})

const mapDispatchToProps = (dispatch) => ({
  fetchBackgrounds: () => dispatch(getBackgrounds()),
  deleteBackground: (id) => {
    if (window.confirm('確定刪除此活動嗎?')) {
      dispatch(deleteBackground(id))
    }
  },
  deleteBackgroundReset: () => dispatch(actions.backgrounds.delete.setStatus(FETCHING_STATUS.IDLE))
})

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchBackgrounds()
  }

  componentDidUpdate () {
    if (this.props.backgroundDeleteStatus === FETCHING_STATUS.DONE) {
      this.props.deleteBackgroundReset()
      this.props.fetchBackgrounds()
    }
  }

  render () {
    return (
      <Bulletin
        type='background'
        url={this.props.match.url}
        data={this.props.backgrounds.data}
        onDelete={(id) => this.props.deleteBackground(id)}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
