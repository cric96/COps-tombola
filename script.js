// script.js

function generateRandomEmoji() {
    const emojiDisplay = document.getElementById('emojiDisplay');
    const randomEmoji = getRandomEmoji();
    emojiDisplay.innerHTML = `<p class="emoji">${randomEmoji}</p>`;
}

function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    return emojiList[randomIndex];
}
