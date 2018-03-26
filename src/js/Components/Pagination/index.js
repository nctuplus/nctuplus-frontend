
import React from 'react'

const Pagination = ({ page, max_page, to }) => (
  <ul className='pagination inline-block'>
    { /* if page > 1: display 'First' and 'Prev' button */}
    { page > 1 ? <li className='clickable' onClick={() => to(1)}><span>First</span></li> : '' }
    { page > 1 ? <li className='clickable' onClick={() => to(page - 1)}><span>Prev</span></li> : '' }

    { /* if page > 1: display omit button ('...' button) */}
    { page > 3 ? <li className='disabled'><span>...</span></li> : '' }
    { /* display [page -2, page + 2] buttons */}
    {
      page > 2
      ? <li className='clickable' onClick={() => to(page - 2)}><span>{ page - 2 }</span></li> : ''
    }
    {
      page > 1
      ? <li className='clickable' onClick={() => to(page - 1)}><span>{ page - 1 }</span></li> : ''
    }
    <li className='clickable' className='active'><span>{ page }</span></li>
    {
      page < max_page
      ? <li className='clickable' onClick={() => to(page + 1)}><span>{ page + 1 }</span></li> : ''
    }
    {
      page < max_page - 1
      ? <li className='clickable' onClick={() => to(page + 2)}><span>{ page + 2 }</span></li> : ''
    }

    { /* if page < max_page - 2: display omit button ('...' button) */}
    { page < max_page - 2 ? <li className='disabled'><span>...</span></li> : '' }

    { /* if page < max_page: display 'Last' and 'Next' button */}
    { page < max_page ? <li className='clickable' onClick={() => to(page + 1)}><span>Next</span></li> : '' }
    { page < max_page ? <li className='clickable' onClick={() => to(max_page)}><span>Last</span></li> : '' }
  </ul>
)

export default Pagination
