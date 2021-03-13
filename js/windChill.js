/* Defining Table
Input: Receive the temperature and the Wind Speed from User.
Processing: Use the equation of Wind Chill to get the temperature as long as the temp is under 50 and wind 
speed is more than three: f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16.
output: Output the Temperature to the User.
*/
function doInputOutput () {
    temperature = parseFloat(document.getElementById('temperature').value);
    windSpeed = parseFloat(document.getElementById('windSpeed').value);
}