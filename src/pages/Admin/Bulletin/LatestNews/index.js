
import React from 'react'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'

const LatestNews = props => (
  <Bulletin type='bulletin' url={props.match.url} />
)

export default withRouter(LatestNews)
