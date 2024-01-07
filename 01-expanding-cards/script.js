// Select all elements with class 'panel'
const panels = document.querySelectorAll('.panel');

// Add click event listener to each panel. For each panel, it adds an event listener that triggers on click. When a panel is clicked, it first calls removeActiveClasses() to ensure only one panel is active at a time, then adds the 'active' class to the clicked panel.
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(); // First, remove 'active' class from all panels
        panel.classList.add('active'); // Then, add 'active' class to clicked panel
    })
});

// Function to remove 'active' class from all panels. Defines removeActiveClasses(), which removes the 'active' class from all panels. This ensures that when a new panel is activated, the previously active one is deactivated.
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}