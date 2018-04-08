
import React from 'react'

const Pagination = ({ page, maxPage, to }) => (
  <ul className='pagination d-inline-block'>
    { /* if page > 1: display 'First' and 'Prev' button */}
    { page > 1 && <li className='page-item' onClick={() => to(1)}><span>First</span></li> }
    { page > 1 && <li className='page-item' onClick={() => to(page - 1)}><span>Prev</span></li> }

    { /* if page > 1: display omit button ('...' button) */}
    { page > 3 && <li className='page-item disabled'><span>...</span></li> }
    { /* display [page -2, page + 2] buttons */}
    {
      page > 2 &&
      <li className='page-item' onClick={() => to(page - 2)}><span>{ page - 2 }</span></li>
    }
    {
      page > 1 &&
      <li className='page-item' onClick={() => to(page - 1)}><span>{ page - 1 }</span></li>
    }
    <li className='page-item active'><span>{ page }</span></li>
    {
      page < maxPage &&
      <li className='page-item' onClick={() => to(page + 1)}><span>{ page + 1 }</span></li>
    }
    {
      page < maxPage - 1 &&
      <li className='page-item' onClick={() => to(page + 2)}><span>{ page + 2 }</span></li>
    }

    { /* if page < maxPage - 2: display omit button ('...' button) */ }
    { page < maxPage - 2 && <li className='page-item disabled'><span>...</span></li> }

    { /* if page < maxPage: display 'Last' and 'Next' button */}
    { page < maxPage && <li className='page-item' onClick={() => to(page + 1)}><span>Next</span></li> }
    { page < maxPage && <li className='page-item' onClick={() => to(maxPage)}><span>Last</span></li> }
  </ul>
)

export default Pagination
