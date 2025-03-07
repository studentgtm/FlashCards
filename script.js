const flashcards = [
    { article: 'der', word: 'Konsonant', plural: 'Konsonanten', translation: 'souhláska' },
    // Add more words here
];

let currentIndex = 0;

function showFlashcard(index) {
    const flashcardContainer = document.getElementById('flashcard-container');
    const flashcard = flashcards[index];
    flashcardContainer.innerHTML = `
        <p><strong>${flashcard.article} ${flashcard.word}</strong> (${flashcard.plural})</p>
        <p>${flashcard.translation}</p>
    `;
}

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showFlashcard(currentIndex);
});

showFlashcard(currentIndex);
