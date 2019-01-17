
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { getBulletins } from 'api/Controllers/bulletins'

const mapStateToProps = (state) => ({
  bulletins: state.bulletins.index
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (payload) => dispatch(getBulletins(payload))
})

class LatestNews extends React.Component {
  componentDidMount () {
    this.props.fetchData({
      q: {
        filters: {
          category: 0
        }
      }
    })
  }

  render () {
    return (
      <Bulletin type='bulletin' url={this.props.match.url} data={this.props.bulletins.data} />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LatestNews))
