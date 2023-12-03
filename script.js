// script.js

const imageFolder = 'images';
let selectedImages = [];
let images = [];

function generateRandomImage() {
    if (selectedImages.length === 0) {
        loadImages();
    }

    const latestImageContainer = document.getElementById('latestImageContainer');
    const randomImage = getRandomImage();

    latestImageContainer.innerHTML = `<img src="${randomImage}" alt="Latest Selected Image">`;

    const selectedImagesContainer = document.getElementById('selectedImages');
    selectedImagesContainer.innerHTML += `<img src="${randomImage}" alt="Selected Image">`;

    selectedImages.push(randomImage);
}

function getRandomImage() {
    const availableImages = getAvailableImages();
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    return availableImages[randomIndex];
}

function getAvailableImages() {
    return images.filter(image => !selectedImages.includes(image));
}

function loadImages() {
    fetch('images-list.json')
        .then(response => response.json())
        .then(data => {
            images = data.images.map(image => `${imageFolder}/${image}`);
        })
        .catch(error => console.error('Error loading images:', error));
}
