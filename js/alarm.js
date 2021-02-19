 var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
    var message;
if (1 <= dayOfWeek && dayOfWeek <= 5) {
    message = 'Get Up!';
} else if ((6 == dayOfWeek || dayOfWeek == 0) && (month == 0 && dayOfWeek == 1) && (month == 6 && dayOfWeek == 4) && (month == 11 && dayOfWeek == 25)) {
    message = 'Sleep in!';
}
document.getElementById('output').innerHTML = message;
