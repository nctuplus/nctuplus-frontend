
import React from 'react'
import { Row, Col } from 'react-bootstrap'

const About = (props) => (
	<section className="about">
		<div className="container">
			<Row>
				<Col lg={12} sm={12} className="text-center">
					<h2>About NCTU+ </h2>
					<img 
						alt="Logo22" 
						className="col-lg-4 col-md-5 col-sm-6 text-center logo" 
						src="https://plus.nctu.edu.tw/assets/logo22-aa2cbf8a416ebd64859993acc6c97feb.png" 
					/>
					<Col lg={8} md={7} sm={6} className="text-left"> 
						NCTU+是一個交大非官方的資訊組織，有鑑於目前校園系統仍有許多改善空間，我們從改寫校園系統開始，擴展出許多更便利、更友善且更美觀的服務。<br/>
						我們一方面向校方請求開放Data及API，另一方面聆聽同學們的需求並不斷發想新的點子，我們不僅純粹的coding，我們希望結合行銷、設計、工程等不同領域的人才，不斷地進步使平台變的更好。
					</Col>
				</Col>
			</Row>
		</div>
	</section>

)

export default About