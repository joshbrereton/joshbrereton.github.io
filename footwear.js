// Input: Receive the input of one of the 4 weather selections from User.
// Processing: Depending on the answer given by user, compute the answer to the correct selection of Footwear.
// Output: Output the correct footwear for the weather condition.
function weatherConverter() {
    let weather = document.getElementById('weather').value;
    let message;
    if (weather == 'hot') {
        message = "Sandles";
    }
    else if (weather == 'rain') {
        message = "Galoshes";
    }
    else if (weather == 'snow') {
        message = "Boots";
    }
    else if (weather == 'unknown') 
        message = "Shoes"
    }
 document.getElementById('output').innerHTML = 'your proper footwear is ' + message;