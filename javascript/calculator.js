// Input: Receive the input of the first and second number, with the arithmetic symbol and the answer
// Processing: Compute the correct answer given the input from the user
// Output: Output if the user is correct or not
function calculator () {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let answer = parseFloat(document.getElementById('answer').value);
    let problem = (document.getElementById('problem').value);
    let correctAnswer;
    switch (problem) {
      case '+':
      correctAnswer = number1 + number2;
      break;
      case '-':
      correctAnswer = number1 - number2;
        break;
        case '/':
        correctAnswer = number1 / number2;
        break;
        case '*':
        correctAnswer = number1 * number2;
        break;
    }
      let message;
         if (correctAnswer == 'answer') {
          message = "Correct! 🏆";
        }
          else {
            message = "incorrect 😢";
        }
        document.getElementById('output').innerHTML = message;
 }