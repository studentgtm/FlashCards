const flashcards = [
    { article: 'der', word: 'Konsonant', plural: 'Konsonanten', translation: 'souhláska' },
    // Add more words here
];

let currentIndex = 0;

function showFlashcard(index) {
    const flashcardContainer = document.getElementById('flashcard-container');
    const flashcard = flashcards[index];
    flashcardContainer.innerHTML = `
        <p>${flashcard.translation}</p>
        <input type="text" id="user-input" placeholder="Type the German word">
        <button id="submit-button">Submit</button>
        <p id="feedback"></p>
        <button id="show-answer-button" style="display:none;">Show Answer</button>
    `;
    document.getElementById('submit-button').addEventListener('click', () => checkAnswer(flashcard));
    document.getElementById('show-answer-button').addEventListener('click', () => showAnswer(flashcard));
}

function checkAnswer(flashcard) {
    const userInput = document.getElementById('user-input').value.trim();
    const feedback = document.getElementById('feedback');
    const showAnswerButton = document.getElementById('show-answer-button');
    if (userInput.toLowerCase() === flashcard.word.toLowerCase()) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
        showAnswerButton.style.display = 'none';
    } else {
        feedback.textContent = 'Incorrect.';
        feedback.style.color = 'red';
        showAnswerButton.style.display = 'inline';
    }
}

function showAnswer(flashcard) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = `The correct answer is: ${flashcard.article} ${flashcard.word} (${flashcard.plural})`;
    feedback.style.color = 'blue';
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % flashcards.length;
        showFlashcard(currentIndex);
    }, 5000);
}

showFlashcard(currentIndex);
