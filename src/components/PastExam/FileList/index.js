
import React from 'react'
import filesize from 'filesize'

const FileList = props => (
  <table className='table table-bordered table-light'>
    <thead>
      <tr>
        <th className='text-center'>檔名</th>
        <th className='text-center'>檔案說明</th>
        <th className='text-center'>大小</th>
      </tr>
    </thead>
    <tbody>
      {
        props.fileInfo
          ? <tr >
            <td className='text-center'>{ props.fileInfo.name }</td>
            <td className='text-center'>
              <input
                value={props.payload.description}
                onChange={e => props.updatePayload({ description: e.target.value })}
                className='form-control'
                type='text'
              />
            </td>
            <td className='text-center'>{ filesize(props.fileInfo.size) }</td>
          </tr>
          : <tr ><td colSpan='3' className='text-center'>尚無檔案!</td></tr>
      }
    </tbody>
  </table>
)

export default FileList
