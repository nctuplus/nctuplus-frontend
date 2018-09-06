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

const debug = withProps(p => console.log(p))

export {
  convertTimeSlotsToString,
  base64encode,
  debug
}
