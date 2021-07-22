document.getElementById('lastupdate').textContent = document.lastModified;
function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}
const appID = "45ac9e23784f02f53e40744e91fc810e";
const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=40.76&lon=-111.89&exclude=hourly&units=imperial&appid=${appID}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
      
     console.log(jsObject);
     const temp = document.querySelector('#temperature');
    temp.textContent = jsObject.current.temp.toFixed(0);
    const currently = document.querySelector('#currently');
    currently.textContent = jsObject.current.weather[0].description;
    const wind = document.querySelector('#wind');
    wind.textContent = jsObject.current.wind_speed.toFixed(0);
    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.current.humidity;
    const gettemp = document.querySelector('#gettemp');
    gettemp.textContent = jsObject.daily[1].temp.day.toFixed(0);
    const gettemp1 = document.querySelector('#gettemp1');
    gettemp1.textContent = jsObject.daily[2].temp.day.toFixed(0);
    const gettemp2 = document.querySelector('#gettemp2');
    gettemp2.textContent = jsObject.daily[3].temp.day.toFixed(0);

  });