const cityId = "5604473";
const appId = "45ac9e23784f02f53e40744e91fc810e";
const apiUR = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${appId}`;
fetch(apiUR)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject)
let day = 0;
dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
//console.log(fiveDayForecast);
fiveDayForecast.forEach(x => {
    let d = new Date(x.dt_txt);
    console.log(d);
   document.getElementById(`dayofweek${day+1}`).textContent = dayOfWeek[d.getDay()];
   document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
   const imagesrc = 'https://openweathermap.org/img/w/ + "jsObject.weather[0].icon" + "day+1".png'
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', description)
   day++
})
});