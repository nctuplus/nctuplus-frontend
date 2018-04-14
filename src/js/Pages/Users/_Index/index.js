
import React from 'react'
import PageWrapper from '../../../Components/PageWrapper'
import './style.scss'

const _Index = (props) => (
  <PageWrapper>
    <div className='container pt-3'>
      { props.children }
    </div>
  </PageWrapper>
)

export default _Index
