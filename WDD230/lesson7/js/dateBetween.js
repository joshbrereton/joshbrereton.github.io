function getNumberOfDays(start, end) {
var dayOne = new Date();
var dayTwo = new Date();
const oneDay = 1000 * 60 * 60 *24;
const diffInTime = date2.getTime() - date1.getTime();
const diffInDays = Math.round(diffInTime / oneDay);
document.querySelector('#lastUpdate').innerHTML = diffInTime;
}