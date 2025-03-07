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
    `;
    document.getElementById('submit-button').addEventListener('click', () => checkAnswer(flashcard));
}

function checkAnswer(flashcard) {
    const userInput = document.getElementById('user-input').value.trim();
    const feedback = document.getElementById('feedback');
    if (userInput.toLowerCase() === flashcard.word.toLowerCase()) {
        feedback.textContent = 'Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = `Incorrect. The correct answer is: ${flashcard.article} ${flashcard.word} (${flashcard.plural})`;
        feedback.style.color = 'red';
    }
}

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showFlashcard(currentIndex);
});

// Initial display
showFlashcard(currentIndex);
