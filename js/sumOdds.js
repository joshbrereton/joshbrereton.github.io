// Notes Table:
// Input: Receive integer from the user.
// Processing: Add all odd numbers that fill up the integer given by User.
// Output: Output the answer to the addition of the integer with the odd numbers associated.
let n = parseInt(document.getElementById('integer').value);
let sumOdd = 0;
function oddNumbers() {
for (let i = 1; i <= n / 2; i++) {
    sumOdd = sumOdd + (2 * i - 1 );
}
document.getElementById('output').innerHTML = sumOdd;
}