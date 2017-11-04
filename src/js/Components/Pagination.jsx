
import React from 'react'

const Pagination = ({ page, max_page, to }) => (
  <ul className='pagination inline-block'>
    { page > 1 ? <li onClick={ () => to(1) }><span>First</span></li> : '' }
    { page > 1 ? <li onClick={ () => to(page - 1) }><span>Prev</span></li> : '' }

    { page > 3 ? <li className='disabled'><span>...</span></li> : '' }
    
    { 
      page > 2 
      ? <li onClick={ () => to(page - 2) }><span>{ page - 2 }</span></li> : '' 
    }
    { 
      page > 1 
      ? <li onClick={ () => to(page - 1) }><span>{ page - 1 }</span></li> : '' 
    }
    <li className='active'><span>{ page }</span></li> 
    { 
      page < max_page 
      ? <li onClick={ () => to(page + 1) }><span>{ page + 1 }</span></li> : '' 
    }
    { 
      page < max_page - 1
      ? <li onClick={ () => to(page + 1) }><span>{ page + 2 }</span></li> : '' 
    }
    
    { page < max_page - 2 ? <li className='disabled'><span>...</span></li> : '' }
    
    { page < max_page ? <li onClick={ () => to(page + 1) }><span>Next</span></li> : '' }
    { page < max_page ? <li onClick={ () => to(max_page) }><span>Last</span></li> : '' }
  </ul>
)


export default Pagination
