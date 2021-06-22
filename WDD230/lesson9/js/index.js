function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}
document.querySelector('#lastupdate').textContent = document.lastModified;
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // Just to see if this works on Console.
    const towns = jsonObject['towns'];
    const prestonSprings = towns.filter(towns => towns.name == 'Preston');
    prestonSprings.forEach(towns => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let h3 = document.createElement('h4');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h4');
        h2.innerHTML = "Town name: " + towns.name;
        p1.innerHTML = "Motto: " + towns.motto;
        h3.innerHTML = "Year Founded: " + towns.yearFounded;
        h4.innerHTML = "Population: " + towns.currentPopulation;
        h5.innerHTML = "Annual Rain Fall: " + towns.averageRainfall;
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(h5);

        document.querySelector('div.towninfo').appendChild(card);
})
  })
  fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // Just to see if this works on Console.
    const towns = jsonObject['towns'];
    const sodaSprings = towns.filter(towns => towns.name == 'Soda Springs');
    sodaSprings.forEach(towns => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let h3 = document.createElement('h4');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h4');
        h2.innerHTML = "Town name: " + towns.name;
        p1.innerHTML = "Motto: " + towns.motto;
        h3.innerHTML = "Year Founded: " + towns.yearFounded;
        h4.innerHTML = "Population: " + towns.currentPopulation;
        h5.innerHTML = "Annual Rain Fall: " + towns.averageRainfall;
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(h5);

        document.querySelector('div.towninfo2').appendChild(card);
})
  })
  fetch(requestURL)
.then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); // Just to see if this works on Console.
    const towns = jsonObject['towns'];
    const fishHaven = towns.filter(towns => towns.name == 'Fish Haven');
    fishHaven.forEach(towns => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let h3 = document.createElement('h4');
        let h4 = document.createElement('h4');
        let h5 = document.createElement('h4');
        h2.innerHTML = "Town name: " + towns.name;
        p1.innerHTML = "Motto: " + towns.motto;
        h3.innerHTML = "Year Founded: " + towns.yearFounded;
        h4.innerHTML = "Population: " + towns.currentPopulation;
        h5.innerHTML = "Annual Rain Fall: " + towns.averageRainfall;
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(h5);

        document.querySelector('div.towninfo3').appendChild(card);
})
  })