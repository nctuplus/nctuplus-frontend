
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
import { PastExamsTable, PastExamsTableRow } from '../../Components/PastExamsTable'


class PastExam extends React.Component {
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
							new_title="上傳考古題"
							new_link="/past_exam/upload"
							new_btn_type="info"
							mine_title="我的考古題"
							mine_link="/past_exam/?mine=true"
							mine_btn_type="primary"
						/>
						<SearchPanelCollegeList />
						<SearchPanelNewsFeed >
							{
								new Array(10).fill(0).map((value) => (
									<SearchPanelNews href="/past_exam/123" >
										24 天前 Guanxing Wu上傳了 基礎程式設計的考古題
									</SearchPanelNews>
									)
								)					
							}
						</SearchPanelNewsFeed>
					</SearchPanel>
					<PastExamsTable>
						{
							new Array(25).fill(0).map(value => (
								<PastExamsTableRow
									id={777}
									course="邏輯與思維"
									semester="100上"
									teacher="趙敏芝"
									filename="12463902_935600039865938_1080332131_n.jpg"
									title="老師很認真"
									user="匿名"
								/>
								)
							)
						}
					</PastExamsTable>
				</div>
			</div>
		)
	}
}

export default PastExam