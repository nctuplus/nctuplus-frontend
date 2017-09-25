

import React from 'react';
import { 
	BrowserRouter, 
	Route,
	Switch, 
	Link
} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Dropdown, DropdownItem } from './Components/Dropdown'

import Index from './Pages/Index'
import Tutorial from './Pages/Courses/Tutorial'
import Course from './Pages/Courses/Course'
import Simulation from './Pages/Courses/Simulation'
import CourseDetail from './Pages/Courses/CourseDetail'
import Discuss from './Pages/Discusses/Discuss'
import EditDiscuss from './Pages/Discusses/EditDiscuss'
import DiscussDetail from './Pages/Discusses/DiscussDetail'
import PastExam from './Pages/PastExams/PastExam'
import UploadPastExam from './Pages/PastExams/UploadPastExam'
import Book from './Pages/Books/Book'
import EditBook from './Pages/Books/EditBook'
import BookDetail from './Pages/Books/BookDetail'
import Event from './Pages/Events/Event'
import EditEvent from './Pages/Events/EditEvent'
import EventDetail from './Pages/Events/EventDetail'
import User from './Pages/Users/User'
import UserEdit from './Pages/Users/UserEdit'
import UserImport from './Pages/Users/UserImport'
import UserGPA from './Pages/Users/UserGPA'
import UserCoursesMap from './Pages/Users/UserCoursesMap'
import UserStaticTable from './Pages/Users/UserStaticTable'
import UserCourses from './Pages/Users/UserCourses'
import UserCollections from './Pages/Users/UserCollections'
import NewComer from './Pages/NewComer'
import PageNotFound from './Pages/PageNotFound'
import Login from './Pages/Login'




class RootRouter extends React.Component {
	render(){
		return (
			<BrowserRouter>
				<div>
					{/* shared navbar. */}
					<Navbar />

					{/* page routes */}
					<Switch>
		        <Route exact path='/' component={Index} />

		        <Route exact path='/login' component={Login} />

		        <Route exact path='/courses' component={Course} />
		        <Route path='/courses/tutorial' component={Tutorial} />
		        <Route path='/courses/simulation' component={Simulation} />
		        <Route path='/courses/:id' component={CourseDetail} />

		        <Route exact path='/discusses' component={Discuss} />
		        <Route path='/discusses/new' component={EditDiscuss} />
		        <Route path='/discusses/:id' component={DiscussDetail} />
		        <Route path='/discusses/:id/edit' component={EditDiscuss} />

		        <Route exact path='/past_exams' component={PastExam} />
		        <Route path='/past_exams/upload' component={UploadPastExam} />
		        <Route path='/past_exams/:id' component={PastExam} />

		        <Route exact path='/books' component={Book} />
		        <Route path='/books/new' component={EditBook} />
		        <Route path='/books/:id' component={BookDetail} />
		        <Route path='/books/:id/edit' component={EditBook} />

		        <Route exact path='/events' component={Event} />
		        <Route path='/events/new' component={EditEvent} />
		        <Route path='/events/:id' component={EventDetail} />
		        <Route path='/events/:id/edit' component={EditEvent} />

		        <Route exact path='/user' component={User} />
		        <Route path='/user/edit' component={UserEdit} />
		        <Route path='/user/import' component={UserImport} />
		        <Route path='/user/gpa' component={UserGPA} />
		        <Route path='/user/courses_map/:id' component={UserCoursesMap} />
		        <Route path='/user/static_table' component={UserStaticTable} />
		        <Route path='/user/courses' component={UserCourses} />
		        <Route path='/user/collcetions' component={UserCollections} />

		        <Route component={PageNotFound}/>
        	</Switch>
			    <Route path='/newcomer' component={NewComer} />
        	
					{/* shared footer. */}
	        <Footer />
        </div>
			</BrowserRouter>
		)
	}
}

export default RootRouter
