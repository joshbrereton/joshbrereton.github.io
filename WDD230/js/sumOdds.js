// Notes Table:
// Input: Receive integer from the user.
// Processing: Add all odd numbers that fill up the integer given by User.
// Output: Output the answer to the addition of the integer with the odd numbers associated.
function oddNumbers() {
 let n = parseInt(document.getElementById('integer').value);
 let k;
let sumOdd = 0;
if (n % 2 == 0) {
    k = n / 2;
}
else {
    k = (n + 1) / 2;
}
for (let i = 1; i <= k; i++) {
  sumOdd = sumOdd + (2 * i  - 1);

}
document.getElementById('output').innerHTML = sumOdd;
}