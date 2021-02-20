// Notes Table
// Processing: receive input from the User Computer to see if the day is a weekday, weekend, or 1 of the 3 provided holidays
// Output: Output text of "Sleep in!" or "Get up!"
var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
    var message;
if (1 <= dayOfWeek && dayOfWeek <= 5) {
    message = 'Get Up!';
} 
else if (dayOfWeek == 6 || dayOfWeek == 0 || (month == 0 && dayOfMonth == 1) || (month == 11 && dayOfMonth == 25) || (month == 6 && dayOfMonth == 4)) {
    message = 'Sleep in!';
}
document.getElementById('output').innerHTML = '<strong>' + message + '</strong>';
