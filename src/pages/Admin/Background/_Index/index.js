
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { getBackgrounds } from 'api/Controllers/backgrounds'

const mapStateToProps = (state) => ({
  backgrounds: state.backgrounds.index
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getBackgrounds())
})

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchData()
  }

  render () {
    return (
      <Bulletin type='background' url={this.props.match.url} data={this.props.backgrounds.data} />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
