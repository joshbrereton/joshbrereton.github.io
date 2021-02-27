// Fixing incorrect loops
// 1st loop: let output1;
//let i = 0;
//while (i < 2) {
   // output1 += `Part 1:${i}<br>`;
//}
//document.getElementById('display1').innerHTML = output1;
// Correct loop 1
let loopsOriginal = parseInt(document.GetElementById('loopsOriginal').value);
function oneLoop() {
let output1;
let i = 0;
while (i < 2) {
    output1 += 'part 1: ' + i + '<br>';
}
document.getElementById('display1').innerHTML = output1;
}