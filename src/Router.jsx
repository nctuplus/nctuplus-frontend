
import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import { validateToken } from 'api/controller'

import Index from 'pages/Index'
import * as Admin from 'pages/Admin'
import * as Courses from 'pages/Courses'
import * as Comments from 'pages/Comments'
import * as PastExams from 'pages/PastExams'
import * as Books from 'pages/Books'
import * as Events from 'pages/Events'
import CourseMap from 'pages/CourseMap'
import { UserNavigation } from 'components/User'
import * as User from 'pages/User'
import * as Scores from 'pages/Scores'

import PageNotFound from 'pages/PageNotFound'
import Login from 'pages/Login'
import { lifecycle, compose } from 'recompose'

const loggedIn = () => true // window.getCookie('_nctuplus_session')

const loginOnly = (Component) => {
  if (loggedIn()) return () => <Component />
  else return () => <Redirect to='/login' />
}

const enhance = compose(
  connect(() => ({}), dispatch => ({ validateToken: () => dispatch(validateToken()) })),
  lifecycle({ componentDidMount () { this.props.validateToken() } })
)

const Router = enhance(() => (
  <BrowserRouter>
    {/* page routes */}
    <Switch>

      {/* index route group */}
      <Route exact path='/' component={Index} />
      <Route exact path='/login' component={Login} />

      {/* admin bulletin route group */}
      <Route exact path='/admin/bulletin' render={loginOnly(Admin.Bulletin.Index)} />
      <Route path='/admin/bulletin/latest_news' render={loginOnly(Admin.Bulletin.LatestNews)} />
      <Route path='/admin/bulletin/website_revision' render={loginOnly(Admin.Bulletin.WebsiteRevision)} />
      <Route path='/admin/bulletin/new' render={loginOnly(Admin.Bulletin.New)} />
      <Route path='/admin/bulletin/:id/edit' render={loginOnly(Admin.Bulletin.Edit)} />

      {/* admin slogan route group */}
      <Route exact path='/admin/slogan' render={loginOnly(Admin.Slogan.Index)} />
      <Route path='/admin/slogan/new' render={loginOnly(Admin.Slogan.New)} />
      <Route path='/admin/slogan/:id/edit' render={loginOnly(Admin.Slogan.Edit)} />

      {/* admin background route group */}
      <Route exact path='/admin/background' render={loginOnly(Admin.Background.Index)} />

      {/* admin user route */}
      <Route path='/admin/users' render={loginOnly(Admin.Users)} />

      {/* admin department route group */}
      <Route exact path='/admin/departments' render={loginOnly(Admin.Departments.Index)} />
      <Route path='/admin/departments/new' render={loginOnly(Admin.Departments.New)} />
      <Route path='/admin/departments/:id/edit' render={loginOnly(Admin.Departments.Edit)} />

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
      <Route exact path='/user/static_table' component={User.StaticTable} />
      <Route path='/user' render={loginOnly(() =>
        <User.Index>
          <Route path='/user/:url?' component={UserNavigation} />

          <Route path='/user/profile' component={User.Profile} />
          <Route path='/user/edit' component={User.Edit} />
          <Route path='/user/courses' component={User.Courses} />
          <Route path='/user/collections' component={User.Collections} />
        </User.Index>
      )} />

      {/* 404 not found */}
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
))

export default Router
