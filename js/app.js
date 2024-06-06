let currentIndex = 0;

function showNextImages() {
    const imageContainer = document.querySelector('.image-container');
    const totalImages = imageContainer.children.length;
    const imagesPerSet = 3;

    // Calculate the total number of sets
    const totalSets = Math.ceil(totalImages / imagesPerSet);

    // Update the current index
    currentIndex = (currentIndex + 1) % totalSets;

    // Calculate the new transform value
    const newTransformValue = `translateX(-${currentIndex * 100}%)`;

    // Apply the transform to the image container
    imageContainer.style.transform = newTransformValue;
}

// Change images every 5 seconds
setInterval(showNextImages, 5000);
