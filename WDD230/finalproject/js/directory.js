

const request = 'saltlake.json';
fetch(request)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    for (let i = 0; i < businesses.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
     let p3 = document.createElement('p');

      h2.textContent = businesses[i].name;
      p1.innerHTML = businesses[i].phone;
      p2.innerHTML = businesses[i].email;
      p3.innerHTML = businesses[i].address;


      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);

      document.querySelector('div.cards').appendChild(card);
    }
  });

