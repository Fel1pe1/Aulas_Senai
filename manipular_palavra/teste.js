// Palavra secreta
const secretWord = 'javascript';
let displayedWord = Array(secretWord.length).fill('_');
let incorrectLetters = [];

// Atualiza a exibição da palavra
function updateWordDisplay() {
    document.getElementById('word-display').textContent = displayedWord.join(' ');
}

// Atualiza a exibição das letras incorretas
function updateIncorrectLetters() {
    const incorrectDisplay = document.getElementById('incorrect-letters');
    incorrectDisplay.innerHTML = '';
    incorrectLetters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('incorrect-letter');
        incorrectDisplay.appendChild(span);
    });
}

// Função para processar a tentativa
function guessLetter() {
    const input = document.getElementById('letter-input');
    const letter = input.value.toLowerCase();
    input.value = '';

    if (letter && !incorrectLetters.includes(letter) && !displayedWord.includes(letter)) {
        if (secretWord.includes(letter)) {
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === letter) {
                    displayedWord[i] = letter;
                }
            }
            updateWordDisplay();
        } else {
            incorrectLetters.push(letter);
            updateIncorrectLetters();
        }
    }
    
    if (!displayedWord.includes('_')) {
        alert('Parabéns! Você adivinhou a palavra!');
        resetGame();
    }
}

// Função para reiniciar o jogo
function resetGame() {
    displayedWord = Array(secretWord.length).fill('_');
    incorrectLetters = [];
    updateWordDisplay();
    updateIncorrectLetters();
}

// Inicializa o jogo
updateWordDisplay();

// Configura o botão de adivinhar
document.getElementById('guess-button').addEventListener('click', guessLetter);
