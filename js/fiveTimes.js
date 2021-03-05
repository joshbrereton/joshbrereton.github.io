/* Description table:
input: Have user know the times 5 table.
processing: 5 times table from 1 to 12.
Output: Output the 5 times table from 1 to 12 to User.*/
function fiveTimes() {
let sum = 5;
let output = '';
 for (let i = 0; i <= 12; i++) {
     let multiplier = sum * i;
     output += sum + " * " + i + " = " + multiplier + "<br>";
 }
 document.getElementById('output').innerHTML = output;
}