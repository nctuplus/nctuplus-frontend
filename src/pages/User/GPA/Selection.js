
import classNames from 'classnames'
import React from 'react'
import styles from './Selection.scss'
import Method from './Method'
class Selection extends React.Component {
  render () {
    return (
      <div className={classNames(styles.container, 'col-3 text-center')}>
        <input type='text' placeholder='國家/系所' className={classNames('mt-4', styles.input)} />
        <button type='submit' className={styles.searchBtn}><i className='fa fa-search' /></button>
        <h4 className='my-4'>GPA熱門計算方法</h4>
        <Method />
        <Method />
        <Method />
        <Method />
        <Method />
        <Method />
        <Method />
        <Method />
        <Method />
      </div>
    )
  }
}

export default Selection
