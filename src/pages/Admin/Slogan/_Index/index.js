
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { getSlogans } from 'api/Controllers/slogans'

const mapStateToProps = (state) => ({
  slogans: state.slogans.index
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getSlogans())
})

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <Bulletin type='slogan' url={this.props.match.url} data={this.props.slogans.data} />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
