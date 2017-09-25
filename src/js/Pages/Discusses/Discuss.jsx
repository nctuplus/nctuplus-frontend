
import React from 'react'
import {Col, Row} from 'react-bootstrap'
import { 
	Search,
	SearchPanel, 
	SearchPanelButtonGroup,
	SearchPanelCollegeList,
	SearchPanelNews, 
	SearchPanelNewsFeed
} from '../../Components/Search'
import Pagination from '../../Components/Pagination'
import { DiscussesTable, DiscussesTableRow } from '../../Components/DiscussesTable'


class Discuss extends React.Component {
	constructor (props){
		super(props)
	}
	render(){
		return (
			<div className="page-wrapper">
				<div className="container">
					<SearchPanel>
						<Search />
						<SearchPanelButtonGroup 
							new_title="新增文章"
							new_link="/discusses/new"
							new_btn_type="info"
							mine_title="我的文章"
							mine_link="/discusses/?mine=true"
							mine_btn_type="primary"
						/>
						<SearchPanelCollegeList />
						<SearchPanelNewsFeed >
							{
								new Array(10).fill(0).map((value, index) => (
									<SearchPanelNews href="/discusses/123" key={index}>
										6天前 匿名 新增了 <strong>組合語言與系統程式</strong>的文章-老師很認真
									</SearchPanelNews>
									)
								)					
							}
						</SearchPanelNewsFeed>
					</SearchPanel>
					<DiscussesTable>
						{
							new Array(25).fill(0).map((value, index) => (
								<DiscussesTableRow
									id={777}
									key={index}
									course="組合語言與系統程式"
									teacher="黃世強"
									title="老師很認真"
									user="匿名"
									user_id="1898906487000541"
									update_time="2017-09-13 19:54"
								/>
								)
							)
						}
					</DiscussesTable>
				</div>
			</div>
		)
	}
}

export default Discuss