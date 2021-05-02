// Input: Receive the input of one of the 4 weather selections from User.
// Processing: Depending on the answer given by user, compute the answer to the correct selection of Footwear.
// Output: Output the correct footwear for the weather condition.
function weatherConverter() {
    let message;
    let weather = document.getElementById('weather').value;
    switch (weather) {
        case "hot":
            message = "Sandles";
            break;
        case "rain":
            message = "Galoshes";
            break;
        case "snow":
            message = "Boots";
            break;
        case "unknown":
            message = "Shoes";
            break;
    }
    document.getElementById('output').innerHTML = "The right footwear is " + message;
}