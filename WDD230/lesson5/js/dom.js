document.querySelector('#lastupdate').textContent = document.lastModified;
const fav = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.list');
button.addEventListener('click', () => {
if (fav.value != '') {
    // create the elements in the list
 let li = document.createElement('li');
 let deletebutton = document.createElement('button');
    // change some properties  ... text content
 li.textContent = fav.value;
 deletebutton.textContent = '❌';
    // Add button to the li
li.append(deletebutton);
output.append(li);
deletebutton.addEventListener('click', function() {
output.removeChild(li);
fav.focus;
})
fav.value = '';
fav.focus;
}

})