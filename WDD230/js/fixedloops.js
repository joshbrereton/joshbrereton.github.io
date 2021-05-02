// Fixing incorrect loops
// 1st loop: let output1;
//let i = 0;
//while (i < 2) {
   // output1 += `Part 1:${i}<br>`;
//}
//document.getElementById('display1').innerHTML = output1;
// Correct loop 1

function first() {
let output1 = '';
for (let i = 0; i < 2; i++) {
    output1 = output1 + 'part 1: ' + i + '<br>';
}
document.getElementById('display1').innerHTML = output1;
}

// 2nd Loop: var output2;
//for (let j = 0; j > 3; j++) {
 // if (j !== 2) {
   // output2 += `Part 2:${j}, `;
 // }
 // else {
  //  output2 += `Part 2:${j}`;
 // }  
//}
//document.getElementById('display2').textContent = output2;
function second() {
var output2 = '';
for (let j = 0; j < 3; j++) {
  if (j !== 2) {
    output2 += `Part 2:${j}, `;
  }
  else {
    output2 += `Part 2:${j}`;
  }  
}
document.getElementById('display2').textContent = output2;
}
// Loop 3 Example
//let output3;
//for (let k = 0, k < 4, k++) {
 // output3 += k + " ";
//}
//document.getElementById('display3').textContent = output3;
let output3 = '';
function third() {
    
for (let k = 0; k < 4; k++) {
  output3 += k + " ";
}
document.getElementById('display3').textContent = output3;
}
// Loop 4 Example
//let balance = 1000;
//const rate = .10;
//let n = 30;
//for (let s = 0; s < n; s++)
    //interest = balance * rate;
   // balance += interest;
//document.getElementById('display4').textContent = balance;
function fourth() {
let balance = 1000;
const rate = .10;
let n = 30;
for (let s = 1; s < n; s++) {
    interest = balance * rate;
    balance += interest;
    let digits = 2;
    let multiplier = Math.pow(100,digits);
   balance = Math.round(balance * multiplier) / multiplier;
}
document.getElementById('display4').textContent = balance;
}