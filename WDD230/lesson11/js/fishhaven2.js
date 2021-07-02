const cityId = "5585010";
const appId = "45ac9e23784f02f53e40744e91fc810e";
const apiUR = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=imperial&appid=${appId}`;
fetch(apiUR)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject)
dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
//console.log(fiveDayForecast);
fiveDayForecast.forEach(x => {
    let d = new Date(x.dt*1000);
    //console.log(d);
    const div = document.querySelector('.cover');
    const container = document.createElement('div');
    container.className = "container";
    const holder = document.createElement('div');
    holder.className = "dayofweek";
    holder.innerText = dayOfWeek[d.getDay()];
    const iconHolder = document.createElement('div');
    const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
    iconHolder.innerHTML = `<p>${x.main.temp.toFixed(0)}&#8457 </p><img src = "${imagesrc}" alt = "Icon Forecast 5 day">`; 
    container.appendChild(holder);
    container.appendChild(iconHolder);
    div.appendChild(container);

})
});