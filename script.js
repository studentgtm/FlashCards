const flashcards = [
    { article: 'der', word: 'Konsonant', plural: 'Konsonanten', translation: 'souhláska', wordclass: 'sustantive' },
    { article: 'der', word: 'Laut', plural: 'Laute', translation: 'hláska', wordclass: 'sustantive' },
    { word: 'aussprechen', translation: 'vyslovit', wordclass: 'verb' },
    { article: 'die', word: 'Aussprache', plural: 'Aussprache', translation: 'výslovnost', wordclass: 'sustantive' },
    { word: 'klingen', translation: 'znít', wordclass: 'verb' },
    { word: 'gehören', translation: 'patřit', wordclass: 'verb' },
    { word: 'nehmen', translation: 'brát', wordclass: 'verb' },
    { word: 'freundlich', translation: 'přátelský', wordclass: 'adjective' },
    { word: 'zufrieden', translation: 'spokojený', wordclass: 'adjective' },
    { word: 'nachdenken über', translation: 'přemýslet nad', wordclass: 'verb' },
    { word: 'gute Laune haben', translation: 'mít dobrou náladu', wordclass: 'phrase' },
    { word: 'sich an etwas errinern', translation: 'vzpomenout si na něco', wordclass: 'phrase' },
    { word: 'insgesamt', translation: 'dohromady', wordclass: 'adverb' },
    { word: 'loben', translation: 'pochválit', wordclass: 'verb' },
    { word: 'feige', translation: 'zbabělý', wordclass: 'adjective' },
    { article: 'das', word: 'Wörterbuch', plural: 'Wörterbücher', translation: 'slovník', wordclass: 'sustantive' },
    { article: 'das', word: 'Vokabelheft', plural: 'Vokabelhefte', translation: 'slovníček', wordclass: 'sustantive' },
    { word: 'geizig', translation: 'lakomý', wordclass: 'adjective' },
    { word: 'verwöhnt', translation: 'rozmazlený', wordclass: 'adjective' },
    { word: 'schimpfen', translation: 'nadávat', wordclass: 'verb' },
    { word: 'erfahren', translation: 'dovědět se', wordclass: 'verb' },
    { word: 'kennenlernen', translation: 'seznámit se s', wordclass: 'verb' },
    { word: 'kennen', translation: 'znát', wordclass: 'verb' },
    { word: 'erleben', translation: 'prožít', wordclass: 'verb' },
    { article: 'die', word: 'Mütze', plural: 'Mützen', translation: 'čepice', wordclass: 'sustantive' },
    { word: 'vermuten', translation: 'předpokládat', wordclass: 'verb' },
    { word: 'ständig', translation: 'neustálý', wordclass: 'adjective' },
    { word: 'meckern', translation: 'stěžovat si', wordclass: 'verb' },
    { word: 'dagegen sein', translation: 'být proti', wordclass: 'phrase' },
    { word: 'erlauben', translation: 'dovolit', wordclass: 'verb' },
    { word: 'sich ärgern über', translation: 'zlobit se kvuli něčemu', wordclass: 'phrase' },
    { word: 'ehrlich', translation: 'upřímný', wordclass: 'adjective' },
    { word: 'ähnlich', translation: 'podobný', wordclass: 'adjective' },
    { article: 'die', word: 'Haut', plural: 'Häute', translation: 'kůže', wordclass: 'sustantive' },
    { word: 'beschreiben', translation: 'popsat', wordclass: 'verb' },
    { article: 'der', word: 'Beruf', plural: 'Berufe', translation: 'zaměstnání', wordclass: 'sustantive' },
    { article: 'das', word: 'Mädchen', plural: 'Mädchen', translation: 'holka', wordclass: 'sustantive' },
    { word: 'bestimmt', translation: 'určitě', wordclass: 'adverb' },
    { word: 'treffen', translation: 'potkat', wordclass: 'verb' },
    { word: 'tragen', translation: 'nosit na sobě', wordclass: 'verb' },
    { word: 'schmecken', translation: 'chutnat', wordclass: 'verb' },
    { word: 'nie', translation: 'nikdy', wordclass: 'adverb' },
    { word: 'verschiedene', translation: 'různé', wordclass: 'adjective' },
    { article: 'das', word: 'Vorurteil', plural: 'Vorurteile', translation: 'předsudek', wordclass: 'sustantive' },
    { article: 'der', word: 'Satz', plural: 'Sätze', translation: 'věta', wordclass: 'sustantive' },
    { word: 'sich bewegen', translation: 'pohybovat se', wordclass: 'verb' },
    { article: 'die', word: 'Bewegung', plural: 'Bewegungen', translation: 'pohyb', wordclass: 'sustantive' },
    { word: 'meistens', translation: 'většinou', wordclass: 'adverb' },
    { word: 'am meisten', translation: 'nejvíce', wordclass: 'adverb' },
    { word: 'manchmal', translation: 'občas', wordclass: 'adverb' },
    { word: 'laufen', translation: 'běhat', wordclass: 'verb' },
    { word: 'rennen', translation: 'utíkat', wordclass: 'verb' },
    { article: 'die', word: 'Brille', plural: 'Brillen', translation: 'brýle', wordclass: 'sustantive' },
    { article: 'der', word: 'Streber', plural: 'Streber', translation: 'šprtka', wordclass: 'sustantive' },
    { word: 'erkennen', translation: 'poznat', wordclass: 'verb' },
    { word: 'hässlich', translation: 'ošklivý', wordclass: 'adjective' },
    { word: 'kaum', translation: 'sotva', wordclass: 'adverb' }
];

let currentCard = {};
let correctAnswers = [];
let incorrectAnswers = [];
let currentIndex = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayCard() {
    if (currentIndex >= flashcards.length) {
        showResults();
        return;
    }

    currentCard = flashcards[currentIndex];
    const flashcardDiv = document.getElementById('flashcard');
    const articleContainer = document.getElementById('article-container');
    const pluralContainer = document.getElementById('plural-container');
    const userInput = document.getElementById('user-input');

    // Clear input fields
    document.getElementById('user-input').value = "";
    document.getElementById('user-article').value = "";
    document.getElementById('user-plural').value = "";

    if (currentCard.wordclass === 'sustantive') {
        articleContainer.style.display = 'block';
        pluralContainer.style.display = 'block';
        userInput.placeholder = 'Word';
    } else {
        articleContainer.style.display = 'none';
        pluralContainer.style.display = 'none';
        userInput.placeholder = 'German Translation';
    }

    flashcardDiv.textContent = currentCard.translation;
    document.getElementById('submit-btn').style.display = 'inline';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('exit-btn').style.display = 'inline';
    document.getElementById('retry-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'inline';
}

function normalizeInput(input) {
    return input
        .replace(/ae/g, 'ä')
        .replace(/oe/g, 'ö')
        .replace(/ue/g, 'ü');
}

function checkAnswer() {
    const userInput = normalizeInput(document.getElementById('user-input').value.trim());
    const userArticle = normalizeInput(document.getElementById('user-article').value.trim());
    const userPlural = normalizeInput(document.getElementById('user-plural').value.trim());
    const correctAnswer = currentCard.word;
    const correctArticle = currentCard.article ? currentCard.article : '';
    const correctPlural = currentCard.plural ? currentCard.plural : '';
    const resultDiv = document.getElementById('result');

    let isCorrect = userInput === correctAnswer;
    if (currentCard.wordclass === 'sustantive') {
        isCorrect = isCorrect && userArticle === correctArticle && userPlural === correctPlural;
    }

    if (isCorrect) {
        resultDiv.innerHTML = "<span class='correct'>Correct!</span>";
        correctAnswers.push(currentCard);
        document.getElementById('retry-btn').style.display = 'none';
    } else {
        resultDiv.innerHTML = "<span class='incorrect'>Incorrect.</span>";
        const correctAnswerDiv = document.createElement('div');
        correctAnswerDiv.innerHTML = `The correct answer is <b>${correctArticle} ${correctAnswer}</b> ${correctPlural}.`;
        resultDiv.appendChild(correctAnswerDiv);
        incorrectAnswers.push(currentCard);
        document.getElementById('retry-btn').style.display = 'inline';
    }

    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline';
}

function showResults() {
    document.getElementById('flashcard-container').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
}

function showCorrectAnswers() {
    const correctAnswersDiv = document.getElementById('correct-answers');
    correctAnswersDiv.innerHTML = '<h3>Correct Answers</h3>';
    correctAnswers.forEach(answer => {
        const answerDiv = document.createElement('div');
        answerDiv.textContent = `${answer.article ? answer.article + ' ' : ''}${answer.word} (${answer.translation})`;
        correctAnswersDiv.appendChild(answerDiv);
    });
    correctAnswersDiv.style.display = 'block';
}

function showIncorrectAnswers() {
    const incorrectAnswersDiv = document.getElementById('incorrect-answers');
    incorrectAnswersDiv.innerHTML = '<h3>Incorrect Answers</h3>';
    incorrectAnswers.forEach(answer => {
        const answerDiv = document.createElement('div');
        answerDiv.textContent = `${answer.article ? answer.article + ' ' : ''}${answer.word} (${answer.translation})`;
        incorrectAnswersDiv.appendChild(answerDiv);
    });
    incorrectAnswersDiv.style.display = 'block';
}

function retryIncorrectAnswers() {
    flashcards.length = 0;
    flashcards.push(...incorrectAnswers);
    incorrectAnswers.length = 0;
    correctAnswers.length = 0;
    currentIndex = 0;
    shuffle(flashcards);
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('flashcard-container').style.display = 'block';
    displayCard();
}

function restartTest() {
    currentIndex = 0;
    correctAnswers = [];
    incorrectAnswers = [];
    shuffle(flashcards);
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('flashcard-container').style.display = 'block';
    displayCard();
}

function exitToWelcomeScreen() {
    document.getElementById('flashcard-container').style.display = 'none';
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('mc-quiz-container').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
    currentIndex = 0;
    correctAnswers = [];
    incorrectAnswers = [];
}

function addNewWord(event) {
    event.preventDefault();
    const newArticle = document.getElementById('new-article').value.trim();
    const newWord = document.getElementById('new-word').value.trim();
    const newPlural = document.getElementById('new-plural').value.trim();
    const newTranslation = document.getElementById('new-translation').value.trim();
    const newWordclass = document.getElementById('new-wordclass').value;

    const newFlashcard = {
        article: newArticle || undefined,
        word: newWord,
        plural: newPlural || undefined,
        translation: newTranslation,
        wordclass: newWordclass
    };

    flashcards.push(newFlashcard);

    // Clear the form
    document.getElementById('add-word-form').reset();
}

function startMCQuiz() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('mc-quiz-container').style.display = 'block';
    shuffle(flashcards);
    displayMCQuestion();
}

function displayMCQuestion() {
    if (currentIndex >= flashcards.length) {
        showResults();
        return;
    }

    currentCard = flashcards[currentIndex];
    const questionDiv = document.getElementById('mc-question');
    const optionsDiv = document.getElementById('mc-options');

    questionDiv.textContent = currentCard.translation;
    optionsDiv.innerHTML = '';

    const options = [currentCard.word];
    while (options.length < 4) {
        const randomCard = flashcards[Math.floor(Math.random() * flashcards.length)];
        if (!options.includes(randomCard.word)) {
            options.push(randomCard.word);
        }
    }

    shuffle(options);

    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => {
            if (option === currentCard.word) {
                optionButton.style.backgroundColor = 'green';
                correctAnswers.push(currentCard);
                document.getElementById('mc-next-btn').style.display = 'inline';
                document.getElementById('mc-retry-btn').style.display = 'none';

                // Display the complete word including the article and plural in cursive
                const correctAnswerDiv = document.createElement('div');
                correctAnswerDiv.innerHTML = `<i>${currentCard.article ? currentCard.article + ' ' : ''}${currentCard.word} ${currentCard.plural ? '(' + currentCard.plural + ')' : ''}</i>`;
                optionsDiv.appendChild(correctAnswerDiv);
            } else {
                optionButton.style.backgroundColor = 'red';
                incorrectAnswers.push(currentCard);
                document.getElementById('mc-next-btn').style.display = 'none';
                document.getElementById('mc-retry-btn').style.display = 'inline';
            }
            document.querySelectorAll('#mc-options button').forEach(btn => {
                btn.disabled = true;
            });
        });
        optionsDiv.appendChild(optionButton);
    });

    document.getElementById('mc-next-btn').style.display = 'none';
    document.getElementById('mc-retry-btn').style.display = 'none';
}

// Add event listener for the Dictionary button
document.getElementById('mc-dictionary-btn').addEventListener('click', () => {
    const dictionaryUrl = `https://slovnik.seznam.cz/preklad/nemecky_cesky/${currentCard.word}`;
    window.open(dictionaryUrl, '_blank');
});

document.getElementById('start-test-btn').addEventListener('click', () => {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('flashcard-container').style.display = 'block';
    shuffle(flashcards);
    displayCard();
});

document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('next-btn').addEventListener('click', () => {
    document.getElementById('result').textContent = "";
    currentIndex++;
    displayCard();
});

document.getElementById('retry-btn').addEventListener('click', () => {
    document.getElementById('result').textContent = "";
    displayCard();
});

document.getElementById('exit-btn').addEventListener('click', exitToWelcomeScreen);
document.getElementById('exit-results-btn').addEventListener('click', exitToWelcomeScreen);
document.getElementById('show-correct-btn').addEventListener('click', showCorrectAnswers);
document.getElementById('show-incorrect-btn').addEventListener('click', showIncorrectAnswers);
document.getElementById('retry-incorrect-btn').addEventListener('click', retryIncorrectAnswers);
document.getElementById('restart-btn').addEventListener('click', restartTest);
document.getElementById('restart-results-btn').addEventListener('click', restartTest);
document.getElementById('add-word-form').addEventListener('submit', addNewWord);
document.getElementById('start-mc-quiz-btn').addEventListener('click', startMCQuiz);
document.getElementById('mc-next-btn').addEventListener('click', () => {
    currentIndex++;
    displayMCQuestion();
});
document.getElementById('mc-exit-btn').addEventListener('click', exitToWelcomeScreen);
document.getElementById('mc-retry-btn').addEventListener('click', displayMCQuestion);

// Initialize the first card
displayCard();
// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for the Dictionary button
    document.getElementById('mc-dictionary-btn').addEventListener('click', () => {
        const dictionaryUrl = `https://slovnik.seznam.cz/preklad/nemecky_cesky/${currentCard.word}`;
        window.open(dictionaryUrl, '_blank');
    });

    document.getElementById('start-test-btn').addEventListener('click', () => {
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('flashcard-container').style.display = 'block';
        shuffle(flashcards);
        displayCard();
    });

    document.getElementById('submit-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-btn').addEventListener('click', () => {
        document.getElementById('result').textContent = "";
        currentIndex++;
        displayCard();
    });

    document.getElementById('retry-btn').addEventListener('click', () => {
        document.getElementById('result').textContent = "";
        displayCard();
    });

    document.getElementById('exit-btn').addEventListener('click', exitToWelcomeScreen);
    document.getElementById('exit-results-btn').addEventListener('click', exitToWelcomeScreen);
    document.getElementById('show-correct-btn').addEventListener('click', showCorrectAnswers);
    document.getElementById('show-incorrect-btn').addEventListener('click', showIncorrectAnswers);
    document.getElementById('retry-incorrect-btn').addEventListener('click', retryIncorrectAnswers);
    document.getElementById('restart-btn').addEventListener('click', restartTest);
    document.getElementById('restart-results-btn').addEventListener('click', restartTest);
    document.getElementById('add-word-form').addEventListener('submit', addNewWord);
    document.getElementById('start-mc-quiz-btn').addEventListener('click', startMCQuiz);
    document.getElementById('mc-next-btn').addEventListener('click', () => {
        currentIndex++;
        displayMCQuestion();
    });
    document.getElementById('mc-exit-btn').addEventListener('click', exitToWelcomeScreen);
    document.getElementById('mc-retry-btn').addEventListener('click', displayMCQuestion);

    // The welcome screen should be visible by default, so we don't need to initialize the first card right away
    // displayCard();
});