
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'
import { fetchBulletins } from 'redux/Actions/Bulletins'

const mapStateToProps = (state) => ({
  bulletins: state.bulletins.all
})

const mapDispatchToProps = (dispatch) => ({
  fetchData: (type) => dispatch(fetchBulletins(type))
})

class Index extends React.Component {
  componentDidMount () {
    this.props.fetchData('all')
  }

  render () {
    return (
      <Bulletin type='bulletin' url={this.props.match.url} data={this.props.bulletins.data} />
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
