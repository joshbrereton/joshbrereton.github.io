     /*  Defining Table
     Input: input number in Pounds
     Processing: Convert the number of Pounds into Kilograms (1 Pound=".453592")
     Output: Display the answer in Kilograms
    */
   function pToK() {
        // Read Pounds input from User
        let poundsNumber = parseFloat(document.getElementById('poundsNumber').value);
        // Processing Pounds to Kilograms
        let kilograms = poundsNumber * .453592;
        let digits = 1;
        let multiplier = Math.pow(10,digits);
        kilograms = Math.round(kilograms * multiplier) / multiplier;
        // Output answer in Kilograms
        document.getElementById('output').innerHTML = kilograms + " " + 'Kilograms';
   }