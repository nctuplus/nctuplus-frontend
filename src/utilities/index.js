import { withProps } from 'recompose'

function base64encode (file) {
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
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
  debug
}
