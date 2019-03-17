
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
  if (!payload) return ''

  let num = 0
  let params = '?'
  let customSearchField = ''

  // 各個頁面的搜尋對應的ransack欄位
  switch (controller) {
    case 'Book':
      customSearchField = 'name_or_authors_cont'
      break
    case 'Course':
      customSearchField = ''
      break
    case 'Comment':
      customSearchField = 'title_or_permanent_course_name_or_teachers_name_cont'
      break
    case 'PastExam':
      customSearchField = 'permanent_course_name_or_teachers_name_cont'
      break
    case 'Event':
      customSearchField = 'title_or_location_or_organization_cont'
      break
    default:
      break
  }

  Object.entries(payload).forEach(([key, value]) => {
    if (key === 'q') { // for ransack parse
      Object.entries(value).forEach(([key, value]) => {
        if (key === 'sort') {
          if ((++num) > 1) params += '&'
          params += `q[s]=${value['by']}+${value['order']}`
        }
        if (key === 'filters') {
          Object.entries(value).forEach(([key, value]) => {
            if ((++num) > 1) params += '&'
            switch (key) {
              case 'custom_search': // 二手書、心得、考古題、活動吧等頁面的輸入搜尋
                params += `q[${customSearchField}]=${value}`
                break
              case 'class': // 二手書、心得、考古題等頁面的系/院分類
                params += `q[college_id_eq]=${value}`
                break
              case 'category': // 公布欄的最新消息和網站改版分類
                params += `q[category_eq]=${value}`
                break
              default:
                break
            }
          })
        }
      })
    } else { // for normal parameter
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
