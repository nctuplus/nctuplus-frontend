
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import {
	Search,
	SearchPanel, 
	SearchPanelButtonGroup,
	SearchPanelCollegeList,
	SearchPanelNews, 
	SearchPanelNewsFeed
} from '../../Components/Search'
import { BooksTable, BooksTableItem } from '../../Components/BooksTable'

class Book extends React.Component {
	constructor (props){
		super(props)
	}
	render(){
		return (
			<div className="page-wrapper books">
				<div className="container">
					<SearchPanel>
						<Search />
						<SearchPanelButtonGroup 
							new_title="新增商品"
							new_link="/books/new"
							new_btn_type="success"
							mine_title="我的商品"
							mine_link="/books/?mine=true"
							mine_btn_type="primary"
						/>
						<Row className="text-center" style={{ paddingBottom: 10 }} >
							<h4 className="text-center search-panel-title">排序</h4>
							<div className="btn-group filter-group" >
					      <Link className="sort_link btn btn-default" to="/books?q%5Bs%5D=price+asc">價錢</Link>
					      <Link className="sort_link btn btn-default btn-primary" to="/books?q%5Bs%5D=created_at+asc">日期 ▼</Link>
					    </div>
				    </Row>
						<SearchPanelCollegeList />
						<SearchPanelNewsFeed >
							{
								new Array(10).fill(0).map((value, index) => (
									<SearchPanelNews href="/books/123" key={index}>
										1小時前 售出了 Pathways (3A): Listening, speaking & critical thinking
									</SearchPanelNews>
								))					
							}
						</SearchPanelNewsFeed>
					</SearchPanel>
					<BooksTable>
						{
							new Array(15).fill(0).map((value, index) => (
								<BooksTableItem
									key={index}
									book_name="University Chemistry" 
									author="Brian B.Liard"
									course="化學 (一)"
									teacher="李大偉"
									date="2017/09/20 16:59"
									price={800}
								/>
							))
						}
					</BooksTable>
				</div>
			</div>
		)
	}
}

export default Book