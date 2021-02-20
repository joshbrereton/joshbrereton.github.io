// Notes Table
// input: Receive the input from the user of the day of the Week and also the Sales Subtotal
// Processing: Compute the sales total from the day of the Week (Tuesday and Wednesday above 50 dollars gives a 10 % discount) and add the sales tax with the sales rate to produce the total.
// Output: Outpute the sales total
 var dayOfWeek = new Date().getDay();
 var subtotal = parseFloat(document.getElementById('subtotal').value);
 var salesTax = .06;
 var discount = .1;
 var sales = subtotal * discount
 var message;
 function SalesRate () {
    if (dayOfWeek == 1 || dayOfWeek == 2 && (subtotal > 50)) {
        message= (subtotal - sales) * salesTax;
    }
    else {
        message = (subtotal * salesTax) + subtotal;
    }
    document.getElementById('output').innerHTML = "Your Sales total is $" + message;
 }