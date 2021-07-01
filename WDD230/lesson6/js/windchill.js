let temperature = document.querySelector('#temperature');
let wind = document.querySelector('#wind');
let f = document.querySelector('#windchill');
if (temperature <= 50 && wind > 3) {
f = 35.74 + 0.6215 * (temperature) - 35.75 * Math.pow(wind, .16) + .4275 * temperature * Math.pow(wind, .16);
f = Math.round(f * 1) / 1;
document.querySelector('#windchill').innerHTML = f + '' + '&#8457';
}
else {
    document.querySelector('#windchill').innerHTML = 'N/A';
}