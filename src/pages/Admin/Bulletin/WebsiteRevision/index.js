
import React from 'react'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'

const WebsiteRevision = props => (
  <Bulletin type='bulletin' url={props.match.url} />
)

export default withRouter(WebsiteRevision)
