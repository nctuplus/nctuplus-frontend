
import React from 'react'
import {
  HashRouter,
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

class Router extends React.Component {
  render () {
    return (
      <HashRouter>
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
            <Route exact path='/comments' component={Comments.Index} />
            <Route path='/comments/new' component={Comments.New} />
            <Route path='/comments/:id' component={Comments.Show} />
            <Route path='/comments/:id/edit' component={Comments.Edit} />

            {/* past exam route group */}
            <Route exact path='/past_exams' component={PastExams.Index} />
            <Route exact path='/past_exams/upload' component={PastExams.Upload} />
            <Route exact path='/past_exams/:id' component={PastExams.Index} />

            {/* book route group */}
            <Route exact path='/books' component={Books.Index} />
            <Route path='/books/new' component={Books.New} />
            <Route exact path='/books/:id' component={Books.Show} />
            <Route exact path='/books/:id/edit' component={Books.Edit} />

            {/* event route group */}
            <Route exact path='/events' component={Events.Index} />
            <Route path='/events/new' component={Events.New} />
            <Route exact path='/events/:id' component={Events.Show} />
            <Route exact path='/events/:id/edit' component={Events.Edit} />

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
      </HashRouter>
    )
  }
}

export default Router
