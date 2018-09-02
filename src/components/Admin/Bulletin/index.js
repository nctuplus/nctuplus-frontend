
import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from 'components/PageWrapper'
import BulletinNavbar from 'components/Admin/BulletinNavbar'
import BulletinTable from 'components/Admin/BulletinTable'
import './style.scss'

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
  <PageWrapper>
    <div className='container pt-4'>
      <div className='row'>
        <div className='col-2'>
          <BulletinNavbar url={props.url} />
        </div>
        <div className='col-10'>
          <div className='row mb-3'>
            <div className='ml-auto' />
            <Link to={Button[props.type].url}>
              <button className='btn btn-warning'>{Button[props.type].title}</button>
            </Link>
          </div>
          <div className='row'>
            <div className='col-12 pr-0'>
              <BulletinTable type={props.type} data={props.data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
)

export default Bulletin
