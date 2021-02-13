// Input: Receive the input of one of the 4 weather selections from User.
// Processing: Depending on the answer given by user, compute the answer to the correct selection of Footwear.
// Output: Output the correct footwear for the weather condition.
function weatherConverter() {
    let weatherSelect = document.getElementById('weatherSelect').value;
    let message;
    if (weatherSelect == 'hot') {
        message = "Sandles";
    }
    else if (weatherSelect == 'rain') {
        message = "Galoshes";
    }
    else if (weatherSelect == 'snow') {
        message = "Boots";
    }
    else if (weatherSelect == 'unknown') 
        message = "Shoes"
    }
 document.getElementById('output').innerHTML = 'your proper footwear is ' + message;
}