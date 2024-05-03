
const nameDays = [ 'Mon','Tue','Wed','Thu','Fri','Sat','Sun' ];
const nameMonths = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Nov','Dec' ];

const setValueToDom = (value, selector) => {
    document.getElementById(selector).textContent = value;
    document.getElementById(selector).innerText = value;
}

function updateTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let period = 'AM';

    if(hour > 12) {
        hour = hour - 12;
        period = 'PM';
    } else if(hour == 0) {
        hour = 12;
    }
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    setValueToDom(hour, 'hour');
    setValueToDom(minute, 'minute');
    setValueToDom(second, 'second');
    setValueToDom(period, 'period');

    let dayOfWeek = date.getDay();
    let dayOfMonth = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    setValueToDom(nameDays[dayOfWeek-1], 'dayOfWeek');
    setValueToDom(nameMonths[month], 'month');
    setValueToDom(dayOfMonth, 'dayOfMonth');
    setValueToDom(year, 'year');

    setTimeout(updateTime, 1000);
}

updateTime();