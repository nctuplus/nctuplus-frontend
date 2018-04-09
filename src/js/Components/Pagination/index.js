
import React from 'react'
import classNames from 'classnames'

const PageItemLink = ({ onClick, children, active, disabled }) => (
  <li
    className={classNames('page-item', active && 'active', disabled && 'disabled')}
    onClick={onClick}
  >
    <a className='page-link'>{ children }</a>
  </li>
)

const Pagination = ({ page, maxPage, to }) => (
  <ul className='pagination justify-content-center'>
    { /* if page > 1: display 'First' and 'Prev' button */}
    { page > 1 && <PageItemLink onClick={() => to(1)} >First</PageItemLink> }
    { page > 1 && <PageItemLink onClick={() => to(page - 1)}>Prev</PageItemLink> }

    { /* if page > 1: display omit button ('...' button) */}
    { page > 3 && <PageItemLink disabled>...</PageItemLink> }
    { /* display [page -2, page + 2] buttons */}

    { page > 2 && <PageItemLink onClick={() => to(page - 2)}>{ page - 2 }</PageItemLink>}
    { page > 1 && <PageItemLink onClick={() => to(page - 1)}>{ page - 1 }</PageItemLink> }

    <PageItemLink active>{ page }</PageItemLink>

    { page < maxPage && <PageItemLink onClick={() => to(page + 1)}>{ page + 1 }</PageItemLink> }
    { page < maxPage - 1 && <PageItemLink onClick={() => to(page + 2)}>{ page + 2 }</PageItemLink> }

    { /* if page < maxPage - 2: display omit button ('...' button) */ }
    { page < maxPage - 2 && <PageItemLink disabled>...</PageItemLink> }

    { /* if page < maxPage: display 'Last' and 'Next' button */}
    { page < maxPage && <PageItemLink onClick={() => to(page + 1)}>Next</PageItemLink> }
    { page < maxPage && <PageItemLink onClick={() => to(maxPage)}>Last</PageItemLink> }
  </ul>
)

export default Pagination
