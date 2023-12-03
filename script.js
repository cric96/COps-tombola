// script.js

const imageFolder = 'images'; // Folder where your images are stored
const imagesPerRow = 10; // Number of images to display per row
let selectedImages = [];
let images = [];

function generateRandomImage() {
    if (selectedImages.length === 0) {
        // Load images on the first click
        loadImages();
    }

    const latestImageContainer = document.getElementById('latestImageContainer');
    const randomImage = getRandomImage();

    // Display the latest selected image
    latestImageContainer.innerHTML = `<img src="${randomImage}" alt="Latest Selected Image">`;

    // Display the selected images above the button
    const selectedImagesContainer = document.getElementById('selectedImages');
    selectedImagesContainer.innerHTML += `<img src="${randomImage}" alt="Selected Image">`;

    // Add the selected image to the array to avoid duplicates
    selectedImages.push(randomImage);
}

function getRandomImage() {
    const availableImages = getAvailableImages();
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const randomImage = availableImages.splice(randomIndex, 1)[0];
    return randomImage;
}

function getAvailableImages() {
    return images.filter(image => !selectedImages.includes(image));
}

function loadImages() {
    // Fetch the list of images from the folder
    fetchImagesList()
        .then(imagesList => {
            images = imagesList;
        })
        .catch(error => {
            console.error('Error loading images:', error);
        });
}

function fetchImagesList() {
    return new Promise((resolve, reject) => {
        fetch(`images-list.json`) // Assuming you have a file listing your images
            .then(response => response.json())
            .then(data => resolve(data.images.map(image => `${imageFolder}/${image}`)))
            .catch(error => reject(error));
    });
}
