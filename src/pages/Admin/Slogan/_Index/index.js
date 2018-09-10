
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { fetchSlogans } from 'api/Actions/Slogans'

const mapStateToProps = (state) => ({
  slogans: state.slogans.all
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchSlogans())
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
