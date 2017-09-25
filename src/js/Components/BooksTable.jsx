
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Pagination from './Pagination'

const BooksTableItem = (props) => {
	let href = '/books/'+ String(props.id) 
	return (
	  <Col md={4} sm={6}>	
      <div className="thumbnail clickable table-item" >					
				<img alt="尚無圖片!" className="img-preview" src="https://plus.nctu.edu.tw/file_upload/book_covers/000/001/425/41B0GFp5UTL._SX397_BO1_204_203_200_.jpg?1505897988"  />
				<img alt="Soldout" className="img-soldout hidden" src="https://plus.nctu.edu.tw/assets/soldout-9d718fe0d0adb345999e84b7cfb3a7b1.png" />
				
				<div className="intro">
					<div className="text-center">
						<span className="title block">{props.book_name}</span>
						<span className="title block">{props.author}</span>
						<span className="block">課程: {props.course}</span>
						<span className="block">老師: {props.teacher}</span>
					</div>					
				</div>
				
				<div className="supplemental-info" >
					<font style={{ color: '#696969' }}>{props.date}</font>	
					<strong className="pull-right price">	
						<i className="fa fa-dollar" />{ props.price }
					</strong>
				</div>
			</div>
    </Col>
	)
}


const BooksTable = (props) => (
	<Col md={9}>
		<Row>{ props.children }</Row>
		<Row className="text-center"><Pagination/></Row>
	</Col>
)


export { BooksTable, BooksTableItem }

