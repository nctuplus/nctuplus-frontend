import { withProps } from 'recompose'

function base64encode (file) {
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

function queryBuilder (payload) {
  let query = '?'; let num = 0
  Object.entries(payload).forEach(([key, value]) => {
    if (key === 'q') {
      Object.entries(value).forEach(([key, value]) => {
        if (key === 'sort') {
          if ((++num) > 1) query += '&'
          query += `q[s]=${value['by']}+${value['order']}`
        }
      })
    } else {
      if ((++num) > 1) query += '&'
      query += `${key}=${value}`
    }
  })
  return query
}

function convertTimeSlotsToString (timeSlots) {
  return timeSlots
    ? Object
      .entries(timeSlots)
      .map(([key, value]) => key + value.join(''))
      .join('')
    : ''
}
function convertSemesterToString (semester) {
  let term = ''
  switch (semester.term) {
    case 0:
      term = '上'
      break
    case 1:
      term = '下'
      break
    case 2:
      term = '暑'
      break
  }
  return `${semester.year}${term}`
}

const debug = withProps(p => console.log(p))

export {
  convertTimeSlotsToString,
  convertSemesterToString,
  base64encode,
  queryBuilder,
  debug
}
