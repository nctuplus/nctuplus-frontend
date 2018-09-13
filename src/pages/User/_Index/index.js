
import React from 'react'
import Layout from 'pages/Layout'

const _Index = (props) => (
  <Layout>
    <div className='container pt-3'>
      { props.children }
    </div>
  </Layout>
)

export default _Index
