import React from 'react'
//import CalendarBody from '../../components/Calendar/CalendarBody.js'
import './Cldtst.scss'
      
    function renderDate() {
        var dt = new Date();
        dt.setDate(1);
        var day = dt.getDay();
        var today = new Date();
        var endDate = new Date(
            dt.getFullYear(),
            dt.getMonth() + 1,
            0
        ).getDate();

        var prevDate = new Date(
            dt.getFullYear(),
            dt.getMonth(),
            0
        ).getDate();
        var months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
        document.getElementById("month").innerHTML = months[dt.getMonth()];
        document.getElementById("date_str").innerHTML = dt.toDateString();
        var cells = "";
        for (var x = day; x > 0; x--) {
            cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
        }
        console.log(day);
        for (var i = 1; i <= endDate; i++) {
            if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
            else
                cells += "<div>" + i + "</div>";
        }
        document.getElementsByClassName("days")[0].innerHTML = cells;


    function moveDate(para) {
        if(para == "prev") {
            dt.setMonth(dt.getMonth() - 1);
        } else if(para == 'next') {
            dt.setMonth(dt.getMonth() + 1);
        }
        renderDate();
    }
}

class Calendar_tst extends React.Component{
    render () {
        return (
                <body onload="renderDate()">
                    <div class="wrapper">
                        <div class="calendar">
                            <div class="month">
                                <div class="prev" onclick="moveDate('prev')">
                                    <span>&#10094;</span>
                                </div>
                                <div>
                                    <h2 id="month"></h2>
                                    <p id="date_str"></p>
                                </div>
                                <div class="next" onclick="moveDate('next')">
                                    <span>&#10095;</span>
                                </div>
                            </div>
                            <div class="weekdays">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                            </div>
                            <div class="days">

                            </div>
                        </div>
                    </div>
            
                </body>
        )
      }
}

export default Calendar_tst