
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
import * as Courses from './Pages/Courses'
import * as Comments from './Pages/Comments'
import * as PastExams from './Pages/PastExams'
import * as Books from './Pages/Books'
import * as Events from './Pages/Events'
import CourseMap from './Pages/CourseMap'
import { UserNavigation } from './Components/User'
import * as Users from './Pages/Users'
import * as Scores from './Pages/Scores'

import PageNotFound from './Pages/PageNotFound'
import Login from './Pages/Login'

const loggedIn = () => true // window.getCookie('_nctuplus_session')

const loginOnly = (Component) => {
  if (loggedIn()) return () => <Component />
  else return () => <Redirect to='/login' />
}

const Router = () => (
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
        <Route exact path='/courses' component={Courses.Index} />
        <Route path='/courses/tutorial' component={Courses.Tutorial} />
        <Route path='/courses/simulation' render={loginOnly(Courses.Simulation)} />
        <Route path='/courses/:id' component={Courses.Show} />

        {/* discuss route group */}
        <Route exact path='/comments' component={Comments.Index} />
        <Route path='/comments/new' render={loginOnly(Comments.New)} />
        <Route path='/comments/:id' component={Comments.Show} />
        <Route path='/comments/:id/edit' render={loginOnly(Comments.Edit)} />

        {/* past exam route group */}
        <Route exact path='/past_exams' component={PastExams.Index} />
        <Route exact path='/past_exams/upload' render={loginOnly(PastExams.Upload)} />
        <Route exact path='/past_exams/:id' render={loginOnly(PastExams.Index)} />

        {/* book route group */}
        <Route exact path='/books' component={Books.Index} />
        <Route path='/books/new' render={loginOnly(Books.New)} />
        <Route exact path='/books/:id' render={Books.Show} />
        <Route exact path='/books/:id/edit' render={loginOnly(Books.Edit)} />

        {/* event route group */}
        <Route exact path='/events' component={Events.Index} />
        <Route path='/events/new' render={loginOnly(Events.New)} />
        <Route exact path='/events/:id' component={Events.Show} />
        <Route exact path='/events/:id/edit' render={loginOnly(Events.Edit)} />

        {/* course map */}
        <Route path='/course_maps/:id' render={loginOnly(CourseMap)} />

        {/* score route group */}
        <Route path='/scores/import' render={loginOnly(Scores.Import)} />
        <Route path='/scores/gpa' render={loginOnly(Scores.GPA)} />

        {/* user route group */}
        <Route exact path='/user' render={() => <Redirect to='/user/profile' />} />
        <Route exact path='/user/static_table' component={Users.StaticTable} />
        <Route path='/user' render={loginOnly(
          <Users.Index>
            <Route path='/user/:url?' component={UserNavigation} />

            <Route path='/user/profile' component={Users.Profile} />
            <Route path='/user/edit' component={Users.Edit} />
            <Route path='/user/courses' component={Users.Courses} />
            <Route path='/user/collections' component={Users.Collections} />
          </Users.Index>
        )} />

        {/* 404 not found */}
        <Route component={PageNotFound} />
      </Switch>

      {/* shared footer. */}
      <Route path='/:url?' component={Footer} />
    </div>
  </BrowserRouter>
)


export default Router
