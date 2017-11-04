
import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

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
import CourseMap from './Pages/CourseMap'
import { UserNavigation } from './Components/User'
import User from './Pages/Users/User'
import UserEdit from './Pages/Users/UserEdit'
import UserProfile from './Pages/Users/UserProfile'
import UserStaticTable from './Pages/Users/UserStaticTable'
import UserCourses from './Pages/Users/UserCourses'
import UserCollections from './Pages/Users/UserCollections'
import ScoreImport from './Pages/Scores/ScoreImport'
import ScoreGPA from './Pages/Scores/ScoreGPA'

import PageNotFound from './Pages/PageNotFound'
import Login from './Pages/Login'

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          {/* shared navbar. */}
          <Route path='/:url?' component={Navbar} />

          {/* page routes */}
          <Switch>

            {/* index route group */}
            <Route exact path='/' component={Index} />
            <Route exact path='/login' component={Login} />

            {/* course route group */}
            <Route exact path='/courses' component={Course} />
            <Route path='/courses/tutorial' component={Tutorial} />
            <Route path='/courses/simulation' component={Simulation} />
            <Route path='/courses/:id' component={CourseDetail} />

            {/* discuss route group */}
            <Route exact path='/discusses' component={Discuss} />
            <Route path='/discusses/new' component={EditDiscuss} />
            <Route path='/discusses/:id' component={DiscussDetail} />
            <Route path='/discusses/:id/edit' component={EditDiscuss} />

            {/* past exam route group */}
            <Route exact path='/past_exams' component={PastExam} />
            <Route path='/past_exams/upload' component={UploadPastExam} />
            <Route path='/past_exams/:id' component={PastExam} />

            {/* book route group */}
            <Route exact path='/books' component={Book} />
            <Route path='/books/new' component={EditBook} />
            <Route path='/books/:id' component={BookDetail} />
            <Route path='/books/:id/edit' component={EditBook} />

            {/* event route group */}
            <Route exact path='/events' component={Event} />
            <Route path='/events/new' component={EditEvent} />
            <Route path='/events/:id' component={EventDetail} />
            <Route path='/events/:id/edit' component={EditEvent} />

            {/* course map */}
            <Route path='/course_maps/:id' component={CourseMap} />

            {/* score route group */}
            <Route path='/scores/import' component={ScoreImport} />
            <Route path='/scores/gpa' component={ScoreGPA} />

            {/* user route group */}
            <Route path='/user/static_table' component={UserStaticTable} />
            <Route exact path='/user' render={() => <Redirect to='/user/profile' />} />
            <Route path='/user' render={() => (
              <User>
                <Route path='/user/:url?' component={UserNavigation} />

                <Route path='/user/profile' component={UserProfile} />
                <Route path='/user/edit' component={UserEdit} />
                <Route path='/user/courses' component={UserCourses} />
                <Route path='/user/collections' component={UserCollections} />
              </User>
            )} />

            {/* 404 not found */}
            <Route component={PageNotFound} />
          </Switch>

          {/* shared footer. */}
          <Route path='/:url?' component={Footer} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
