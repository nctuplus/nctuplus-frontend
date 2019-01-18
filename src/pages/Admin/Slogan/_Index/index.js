
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { getSlogans, deleteSlogan } from 'api/Controllers/slogans'
import actions from 'api/Actions/Slogans'
import { FETCHING_STATUS } from 'utilities/constants'

const mapStateToProps = (state) => ({
  slogans: state.slogans.index,
  sloganDeleteStatus: state.slogans.delete.status
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getSlogans()),
  deleteSlogan: (id) => {
    if (window.confirm('確定刪除此活動嗎?')) {
      dispatch(deleteSlogan(id))
    }
  },
  deleteSloganReset: () => dispatch(actions.slogans.delete.setStatus(FETCHING_STATUS.IDLE))
})

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }

  componentDidUpdate () {
    if (this.props.sloganDeleteStatus === FETCHING_STATUS.DONE) {
      this.props.deleteSloganReset()
      this.props.fetchData()
    }
  }

  render () {
    return (
      <Bulletin
        type='slogan'
        url={this.props.match.url}
        data={this.props.slogans.data}
        onDelete={(id) => this.props.deleteSlogan(id)}
      />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
