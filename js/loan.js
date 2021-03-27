/* Input: Receive Input from User
Processing: Calculate Monthly payment Loan with an Interest with the function: p =  ar / 1 − (1 + r) raised to 
the -nth power.
 Then calculate the payoff amount with the following function: 
 b = a(1 + r)raised d −  p ( (1 + r)raised d − 1 ) / r.
 Output: Output the payment per month Loan and the payoff amount at the end to the user.
*/
function doPayment() {
    let principal = parseFloat(document.getElementById('amountBorrowed').value);
    let annualRate = parseFloat(document.getElementById('annualInterestRate').value);
    let years = parseFloat(document.getElementById('numberOfYears').value);
    let periodsPerYear = parseFloat(document.getElementById('paymentsPerYear').value);
    let p = computePayment(principal, annualRate, years, periodsPerYear);
    document.getElementById('output').innerHTML = p;
}
function computePayment(principal, annualRate, years, periodsPerYear) {
let a = principal;
let r = annualRate / periodsPerYear
let n = years * periodsPerYear;
p = a * r / (1 - Math.pow(1 + r, -n));
return p.toFixed(2);
}
function doBalance() {
    let principal = parseFloat(document.getElementById('amountBorrowed').value);
    let annualRate = parseFloat(document.getElementById('annualInterestRate').value);
    let years = parseFloat(document.getElementById('numberOfYears').value);
    let periodsPerYear = parseFloat(document.getElementById('paymentsPerYear').value)
    let numberOfPaymentPaidToDate = parseFloat(document.getElementById('paymentsPaid').value);
    let b = computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate);
    document.getElementById('outputOne').innerHTML = b;
}
function computeBalance(principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate) {
let a = principal;
let d = numberOfPaymentPaidToDate;
let r = annualRate / periodsPerYear;
let n = years * 12;
let p = a * r / (1 - Math.pow(1 + r, -n));
let b = a * (Math.pow(1 + r, d)) - p * ((Math.pow(1 + r, d)) - 1) / r;
return b.toFixed(2);
}