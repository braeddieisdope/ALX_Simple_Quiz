// Define a function named checkAnswer.
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4";

    // Retrieve the User’s Answer
    // Select the checked radio button by its name attribute 'name="quiz"'
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = '';
    if (selectedRadio) {
        userAnswer = selectedRadio.value;
    }

    // Get the feedback paragraph element
    const feedbackElement = document.getElementById('feedback');

    // Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        // If correct, update feedback text
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        // If incorrect or no answer selected, update feedback text
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add an Event Listener to the Submit Button
// Select the “Submit Answer” button by its ID
const submitButton = document.getElementById('submit-answer');

// Add a click event listener, passing in the checkAnswer function
submitButton.addEventListener('click', checkAnswer);