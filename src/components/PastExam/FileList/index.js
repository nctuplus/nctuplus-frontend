
import React from 'react'

const FileList = ({ children }) => (
  <table className='table table-light'>
    <thead>
      <tr className='table-light'>
        <th className='text-center'>下載次數</th>
        <th className='text-center'>檔名</th>
        <th className='text-center'>年度</th>
        <th className='text-center'>檔案說明</th>
        <th className='text-center'>大小</th>
        <th className='text-center'>提供者</th>
        <th className='text-center'>上傳時間</th>
        <th className='text-center'>動作</th>
      </tr>
    </thead>
    <tbody className='files' >
      { children || <tr ><td colSpan='8' className='text-center'>尚無檔案!</td></tr> }
    </tbody>
  </table>
)

export default FileList
