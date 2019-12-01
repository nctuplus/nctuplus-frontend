import React from 'react'
import'./style.scss'

class CalendarBody extends React.Component{
    render () {
        return (
          <div class="cldbody">
            Dec
            <ul class="cldOutline">
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li>六</li>
                <li>日</li>
            </ul>
          </div>
        )
      }
}

export default CalendarBody