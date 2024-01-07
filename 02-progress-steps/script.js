// Accessing HTML elements by their IDs and classes
const progress = document.getElementById('progress'); // Accesses the progress bar element
const prev = document.getElementById('prev'); // Accesses the 'Previous' button element
const next = document.getElementById('next'); // Accesses the 'Next' button element
const circles = document.querySelectorAll('.circle'); // Accesses all circle elements (steps)

// Variable to track the current active step
let currentActive = 1;

// Event listener for 'Next' button click
next.addEventListener('click', () => {
    currentActive++; // Increment the current active step

    // Ensuring currentActive doesn't exceed the number of steps
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update(); // Call the update function to reflect the change
});

// Event listener for 'Previous' button click
prev.addEventListener('click', () => {
    currentActive--; // Decrement the current active step

    // Ensuring currentActive doesn't go below 1
    if (currentActive < 1) {
        currentActive = 1;
    }

    update(); // Call the update function to reflect the change
});

// Function to update the progress bar and step states
function update() {
    // Iterating over each circle (step)
    circles.forEach((circle, idx) => {
        // Adding 'active' class to circles less than currentActive
        if (idx < currentActive) {
            circle.classList.add('active');
        } else { // Removing 'active' class otherwise
            circle.classList.remove('active');
        }
    });

    // Getting all active circles
    const actives = document.querySelectorAll('.active');

    // Updating the progress bar's width based on active steps
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // Disabling or enabling buttons based on the current active step
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}