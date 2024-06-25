
window.addEventListener('load', function() {
    function adjustAnchor() {
        const fixedOffset = 110;  // Adjust this value based on the actual height of your fixed header
        const hash = window.location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                // Calculate target position
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - fixedOffset;

                // Scroll to the target position using smooth behavior
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }

    window.addEventListener('hashchange', adjustAnchor);
    window.setTimeout(adjustAnchor, 300);  // Adjust this delay if needed

    // Bind click event to all anchor tags for smoother handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const hash = this.getAttribute('href');
            if (hash !== window.location.hash) {  // Only process if it's a new hash
                window.location.hash = hash;
            } else {
                adjustAnchor();  // Manually trigger the adjustment if the hash hasn't changed
            }
        });
    });
});

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

function openMenu(){
    document.body.classList +=" menu--open";
}

function closeMenu(){
    document.body.classList.remove('menu--open');
}

// Change images every 5 seconds
setInterval(showNextImages, 2500);
