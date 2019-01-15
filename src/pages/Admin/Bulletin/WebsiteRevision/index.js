
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { getBulletins } from 'api/Controllers/bulletins'

const mapStateToProps = (state) => ({
  bulletins: state.bulletins.index
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (category) => dispatch(getBulletins(category))
})

class WebsiteRevision extends React.Component {
  componentDidMount () {

  }

  render () {
    return (
      <Bulletin type='bulletin' url={this.props.match.url} data={this.props.bulletins.data} />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WebsiteRevision))
