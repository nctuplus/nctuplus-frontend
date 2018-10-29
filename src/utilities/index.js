import { withProps } from 'recompose'

function base64encode (file) {
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}

function queryBuilder (payload, controller) {
  let num = 0
  let params = '?'
  let customSearchField = ''

  switch (controller) {
    case 'Book':
      customSearchField = 'name_or_authors_cont'
      break
    case 'Course':
      customSearchField = ''
      break
    case 'Comment':
      customSearchField = ''
      break
    case 'PastExam':
      customSearchField = ''
      break
    case 'Event':
      customSearchField = 'title_or_location_or_organization_cont'
      break
    default:
      break
  }

  Object.entries(payload).forEach(([key, value]) => {
    if (key === 'q') {
      Object.entries(value).forEach(([key, value]) => {
        if (key === 'sort') {
          if ((++num) > 1) params += '&'
          params += `q[s]=${value['by']}+${value['order']}`
        } else {
          Object.entries(value).forEach(([key, value]) => {
            if (key === 'custom_search') {
              if ((++num) > 1) params += '&'
              params += `q[${customSearchField}]=${value}`
            } else if (key === 'class') {
              if ((++num) > 1) params += '&'
              params += `q[college_id_eq]=${value}`
            }
          })
        }
      })
    } else {
      if ((++num) > 1) params += '&'
      params += `${key}=${value}`
    }
  })
  return params
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
