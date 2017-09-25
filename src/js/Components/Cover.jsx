

import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CoverSlogan = (props) => (
	<div className="slogan">
    <h2 className="text-center">{ props.children }</h2>
	</div>
)

const CoverWrapper = (props) => (
	<div className="container">
		<div className="wrapper" >
			{ props.children }
  	</div>
	</div>
)

export { CoverWrapper, CoverSlogan };


