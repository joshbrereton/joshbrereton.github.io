let last;
if (localStorage.getItem('date') !== null) {
    last = new Date(localStorage.getItem('date')); }
    else {
        last = new Date();
        localStorage.setItem('date', String(last));
    }
    document.getElementById('dayssince').innerHTML = String(last);
    
let now = new Date();

const oneDay = 1000 * 60 * 60 * 24;
const milliseconds = now - last;

// Calculating the time difference between two dates
//const diffInTime = date2.getTime() - date1.getTime();

// Calculating the no. of days between two dates
//const diffInDays = Math.round(diffInTime / oneDay);

document.getElementById('dayssince').innerHTML = Math.trunc(milliseconds / oneDay) + '' + 'days ago';

localStorage.setItem('date', String(now));
