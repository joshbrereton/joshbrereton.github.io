function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}
document.querySelector('#lastupdate').textContent = document.lastModified;
let d = new Date();
if (d.getDay() == 5) {
    document.querySelector('aside').style.display = "block";
}