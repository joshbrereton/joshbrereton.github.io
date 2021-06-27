const cityID= "5604473";
const appID = "45ac9e23784f02f53e40744e91fc810e";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${appID}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
     //console.log(jsObject);
    const temp = document.querySelector('#temperature');
    temp.textContent = jsObject.main.temp.toFixed(0);
    const currently = document.querySelector('#currently');
    const description = jsObject.weather[0].description;
    currently.innerHTML = description;
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', description);
    const wind = document.querySelector('#wind');
    wind.textContent = jsObject.wind.speed.toFixed(0);
    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.main.humidity;
});