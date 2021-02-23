// Notes Table
// input: Receive the input from the user of the day of the Week and also the Sales Subtotal
// Processing: Compute the sales total from the day of the Week (Tuesday and Wednesday above 50 dollars gives a 10 % discount) and add the sales tax with the sales rate to produce the total.
// Output: Outpute the sales total
let dayOfWeek = new Date().getDay();
let total;
function compute() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    if (50 < subtotal && (dayOfWeek == 2 || dayOfWeek == 3)) {
        total = subtotal * .9;
    }
    else {
        total = subtotal;
    }
    totalTax = total * 1.06;
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    totalTax = Math.round(totalTax * multiplier) / multiplier;
    document.getElementById('output').innerHTML = totalTax;
}