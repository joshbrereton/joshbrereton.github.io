const cityID= "5585010";
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
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.log(jsonObject);
      const event2 = document.querySelector('#event2');
      event2.textContent = jsonObject.towns[2].events[0];
      const another4 = document.querySelector('#another4');
      another4.textContent = jsonObject.towns[2].events[1];
      const another5 = document.querySelector('#another5');
      another5.textContent = jsonObject.towns[2].events[2];
      const another6 = document.querySelector('#another6');
      another6.textContent = jsonObject.towns[2].events[3];
  })