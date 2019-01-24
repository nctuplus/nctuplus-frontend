
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from 'pages/Layout'
import BulletinNavbar from 'components/Admin/BulletinNavbar'
import BulletinTable from 'components/Admin/BulletinTable'

const Button = {
  'bulletin': {
    url: '/admin/bulletin/new',
    title: '新增公告'
  },
  'slogan': {
    url: '/admin/slogan/new',
    title: '新增標語'
  },
  'background': {
    url: '/admin/background/new',
    title: '準備刊登'
  }
}

const Bulletin = props => (
  <Layout>
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-lg-2 col-md-12'>
          <BulletinNavbar url={props.url} />
        </div>
        <div className='col-lg-10 col-md-12'>
          <div className='row mb-3 justify-content-end'>
            <Link to={Button[props.type].url} className='col-lg-2 col-md-12'>
              <button className='btn btn-warning w-100'>{Button[props.type].title}</button>
            </Link>
          </div>
          <div className='row'>
            <div className='col-12 pr-0'>
              <BulletinTable type={props.type} data={props.data} onDelete={props.onDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Bulletin
