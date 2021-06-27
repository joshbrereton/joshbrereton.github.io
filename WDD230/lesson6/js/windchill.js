let temperature = parseFloat(document.querySelector('#temperature').innerHTML);
let speed = parseFloat(document.querySelector('#wind').innerHTML);
let f = computeWindChill(temperature, speed);
document.getElementById('windchill').innerHTML = f;
function computeWindChill(temperature, speed) {
let f;
let s = speed;
let t = temperature;
if (t <= 50 && s > 3) {
f = 35.74 + 0.6215 * (t) - 35.75 * Math.pow(s, .16) + .4275 * t * Math.pow(s, .16);
f = Math.round(f * 1) / 1;
return f;
}
else {
    f = N/A;
    return f;
}

} 
