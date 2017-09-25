
import React from 'react'
import { Button } from 'react-bootstrap'
import { 
	EntypoExport, 
	EntypoPinterest, 
	EntypoTwitter, 
	EntypoFacebook,
	EntypoGoogleplus, 
	EntypoPaperPlane
} from 'react-entypo'

class ShareButton extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div>
				<div className="share-course sharer-0">
					<Button bsStyle="primary"><EntypoExport style={{ fontSize: 18 }}/>分享</Button>
					<div className="hidden">
						<EntypoPinterest />
						<EntypoFacebook />
						<EntypoGoogleplus/>
						<EntypoTwitter/>
						<EntypoPaperPlane/>
					</div>
				</div>
			</div>
		)
	}
}

export default ShareButton

