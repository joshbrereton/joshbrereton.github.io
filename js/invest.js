/* input: Receive input from User on the Principal, Number of Years, Period per Year, and the rate.
Processing: f = a (1 + r) to the nth power
Output: Output the Future invested number.
*/
function doFV() {
    let principal = parseFloat(document.getElementById('principal').value);
    let periodsPerYear = parseFloat(document.getElementById('periodsPerYear').value);
    let years = parseFloat(document.getElementById('years').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let f = computeFutureValue(principal, annualRate, years, periodsPerYear);
    document.getElementById('output').innerHTML = '$' + f;
}
    function computeFutureValue(principal, annualRate, years, periodsPerYear) {
        let a = principal;
        let r = annualRate / 12;
        let n = years * 12;
        let f = a * Math.pow(1 + r, n);
        f = Math.round(f * 100) / 100;
        return f;
    }