
import React from 'react'
import { withRouter } from 'react-router'
import Bulletin from 'components/Admin/Bulletin'

const Index = props => (
  <Bulletin type='background' url={props.match.url} />
)

export default withRouter(Index)
