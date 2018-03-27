
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
import * as Discusses from './Pages/Discusses'
import * as PastExams from './Pages/PastExams'
import * as Books from './Pages/Books'
import * as Events from './Pages/Events'
import CourseMap from './Pages/CourseMap'
import { UserNavigation } from './Components/User'
import * as Users from './Pages/Users'
import * as Scores from './Pages/Scores'

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
            <Route exact path='/courses' component={Courses.Index} />
            <Route path='/courses/tutorial' component={Courses.Tutorial} />
            <Route path='/courses/simulation' component={Courses.Simulation} />
            <Route path='/courses/:id' component={Courses.Show} />

            {/* discuss route group */}
            <Route exact path='/discusses' component={Discusses.Index} />
            <Route path='/discusses/new' component={Discusses.New} />
            <Route path='/discusses/:id' component={Discusses.Show} />
            <Route path='/discusses/:id/edit' component={Discusses.Edit} />

            {/* past exam route group */}
            <Route exact path='/past_exams' component={PastExams.Index} />
            <Route path='/past_exams/upload' component={PastExams.Upload} />
            <Route path='/past_exams/:id' component={PastExams.Index} />

            {/* book route group */}
            <Route exact path='/books' component={Books.Index} />
            <Route path='/books/new' component={Books.New} />
            <Route path='/books/:id' component={Books.Show} />
            <Route path='/books/:id/edit' component={Books.Edit} />

            {/* event route group */}
            <Route exact path='/events' component={Events.Index} />
            <Route path='/events/new' component={Events.New} />
            <Route path='/events/:id' component={Events.Show} />
            <Route path='/events/:id/edit' component={Events.Edit} />

            {/* course map */}
            <Route path='/course_maps/:id' component={CourseMap} />

            {/* score route group */}
            <Route path='/scores/import' component={Scores.Import} />
            <Route path='/scores/gpa' component={Scores.GPA} />

            {/* user route group */}
            <Route exact path='/user' render={() => <Redirect to='/user/profile' />} />
            <Route exact path='/user/static_table' component={Users.StaticTable} />
            <Route path='/user' render={() => (
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
  }
}

export default Router
