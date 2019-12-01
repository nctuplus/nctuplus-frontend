
import { hot } from 'react-hot-loader/root'
import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'
import { lifecycle, compose } from 'recompose'
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
import { validateToken } from 'api/Controllers/user'
import Calender from 'pages/Test/Calendar'

const mapStateToProps = state => ({ currentUser: state.user.currentUser })
const mapDispatchToProps = dispatch => ({ validateToken: () => dispatch(validateToken()) })

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({ componentDidMount () { this.props.validateToken() } })
)

const Router = enhance(({ currentUser }) => {
  const checkOrRedirect = (user, check) => (Component) => {
    if (check(user)) return () => <Component />
    else {
      return () => (
        <Redirect to={{
          pathname: '/login',
          state: { redirected: true }
        }} />
      )
    }
  }
  const loginOnly = checkOrRedirect(currentUser, user => user)
  const adminOnly = checkOrRedirect(currentUser, user => user && user.role === 1)

  return (
    <BrowserRouter>
      {/* page routes */}
      <Switch>

        {/* index route group */}
        <Route exact path='/' component={Index} />
        <Route exact path='/login' component={Login} />

        {/* admin bulletin route group */}
        <Route exact path='/admin/bulletin' component={adminOnly(Admin.Bulletin.Index)} />
        <Route path='/admin/bulletin/latest_news' component={adminOnly(Admin.Bulletin.LatestNews)} />
        <Route path='/admin/bulletin/website_revision' component={adminOnly(Admin.Bulletin.WebsiteRevision)} />
        <Route path='/admin/bulletin/new' component={adminOnly(Admin.Bulletin.New)} />
        <Route path='/admin/bulletin/:id/edit' component={adminOnly(Admin.Bulletin.Edit)} />

        {/* admin slogan route group */}
        <Route exact path='/admin/slogan' component={adminOnly(Admin.Slogan.Index)} />
        <Route path='/admin/slogan/new' component={adminOnly(Admin.Slogan.New)} />
        <Route path='/admin/slogan/:id/edit' component={adminOnly(Admin.Slogan.Edit)} />

        {/* admin background route group */}
        <Route exact path='/admin/background' component={adminOnly(Admin.Background.Index)} />
        <Route path='/admin/background/new' component={adminOnly(Admin.Background.New)} />

        {/* admin user route */}
        <Route path='/admin/users' component={adminOnly(Admin.Users)} />

        {/* admin statistics route */}
        <Route path='/admin/statistics' component={Admin.Statistics} />

        {/* admin department route group */}
        <Route exact path='/admin/departments' component={adminOnly(Admin.Departments.Index)} />
        <Route path='/admin/departments/new' component={adminOnly(Admin.Departments.New)} />
        <Route path='/admin/departments/:id/edit' component={adminOnly(Admin.Departments.Edit)} />

        {/* admin course_map route group */}
        <Route exact path='/admin/course_maps' component={adminOnly(Admin.CourseMaps.Index)} />
        <Route path='/admin/course_maps/new' component={adminOnly(Admin.CourseMaps.New)} />
        <Route path='/admin/course_maps/:id/edit' component={adminOnly(Admin.CourseMaps.Edit)} />

        {/* course route group */}
        <Route exact path='/courses' component={Courses.Index} />
        <Route path='/courses/tutorial' component={Courses.Tutorial} />
        <Route path='/courses/simulation' component={loginOnly(Courses.Simulation)} />
        <Route path='/courses/:id' component={Courses.Show} />

        {/* discuss route group */}
        <Route exact path='/comments' render={() => <Comments.Index />} />
        <Route path='/comments/new' component={loginOnly(Comments.New)} />
        <Route exact path='/comments/:id' render={() => <Comments.Index show />} />
        <Route exact path='/comments/:id/edit' component={loginOnly(Comments.Edit)} />

        {/* past exam route group */}
        <Route exact path='/past_exams' component={PastExams.Index} />
        <Route exact path='/past_exams/new' component={loginOnly(PastExams.New)} />
        <Route exact path='/past_exams/:id' component={loginOnly(PastExams.Index)} />

        {/* book route group */}
        <Route exact path='/books' component={Books.Index} />
        <Route path='/books/new' component={loginOnly(Books.New)} />
        <Route exact path='/books/:id' component={Books.Show} />
        <Route exact path='/books/:id/edit' component={loginOnly(Books.Edit)} />

        {/* event route group */}
        <Route exact path='/events' component={Events.Index} />
        <Route path='/events/new' component={loginOnly(Events.New)} />
        <Route exact path='/events/:id' component={Events.Show} />
        <Route exact path='/events/:id/edit' component={loginOnly(Events.Edit)} />

        {/* course map */}
        <Route path='/course_maps/:id' component={loginOnly(CourseMap)} />

        {/* score route group */}
        <Route path='/scores/import' component={loginOnly(Scores.Import)} />
        <Route path='/scores/gpa' component={loginOnly(Scores.GPA)} />

        {/* user route group */}
        <Route exact path='/user' component={() => <Redirect to='/user/profile' />} />
        <Route exact path='/user/static_table' component={User.StaticTable} />
        <Route path='/user' component={loginOnly(() =>
          <User.Index>
            <Route path='/user/:url?' component={UserNavigation} />
            <Route path='/user/profile' component={User.Profile} />
            <Route path='/user/edit' component={User.Edit} />
            <Route path='/user/courses' component={User.Courses} />
            <Route path='/user/collections' component={User.Collections} />
            <Route path='/user/GPA' component={User.GPA} />
          </User.Index>
        )} />

        {/* test page calendar */}
        <Route path='/test' component={loginOnly(Calender)} />

        {/* 404 not found */}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
})

export default hot(Router)
