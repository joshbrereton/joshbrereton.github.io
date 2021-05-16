function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}
let daynames = [
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];
let months = [
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
];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fullDate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
document.getElementById('currentDate').textContent = fullDate;