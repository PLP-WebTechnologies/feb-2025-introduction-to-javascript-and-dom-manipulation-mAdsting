// --- JavaScript for Little Explorers Academy Webpage ---

// Task: Change text content dynamically.
// Get the button and the paragraph element for the philosophy section
const changePhilosophyBtn = document.getElementById('change-philosophy-btn');
const philosophyTextPara = document.getElementById('philosophy-text');

// Add an event listener to the "Read Our Motto" button
changePhilosophyBtn.addEventListener('click', function() {
    // Change the text content of the paragraph to the school motto
    philosophyTextPara.textContent = 'Our motto is: Play, Learn, Grow Together!';
});

// Task: Modify CSS styles via JavaScript.
// Get the buttons and the activity box element
const highlightActivityBtn = document.getElementById('highlight-activity-btn');
const resetActivityBtn = document.getElementById('reset-activity-btn');
const activityBox = document.getElementById('activity-highlight');

// Add event listener to the "Highlight Activities" button
highlightActivityBtn.addEventListener('click', function() {
    // Add the 'highlight' CSS class to change the style
    activityBox.classList.add('highlight');
});

// Add event listener to the "Reset Style" button
resetActivityBtn.addEventListener('click', function() {
    // Remove the 'highlight' CSS class to reset the style
    activityBox.classList.remove('highlight');
});


// Task: Adds or removes an element when a button is clicked.
// Get the buttons and the gallery container
const addPictureBtn = document.getElementById('add-picture-btn');
const removePictureBtn = document.getElementById('remove-picture-btn');
const galleryContainer = document.getElementById('gallery-container');

// Array of fun emojis to use as gallery items
const funEmojis = ['🍎', '🎨', '🧸', '🎈', '⚽', '🦋', '🌟'];
let emojiIndex = 0; // To cycle through the emojis

// Add event listener to the "Add Fun Picture" button
addPictureBtn.addEventListener('click', function() {
    // Create a new div element for the gallery item
    const newGalleryItem = document.createElement('div');

    // Add a class for styling
    newGalleryItem.classList.add('gallery-item');

    // Set the text content to a fun emoji from our array
    newGalleryItem.textContent = funEmojis[emojiIndex];

    // Cycle to the next emoji for the next click
    emojiIndex = (emojiIndex + 1) % funEmojis.length; // Use modulo to loop back

    // Append the new element to the gallery container
    galleryContainer.appendChild(newGalleryItem);
});

// Add event listener to the "Remove Last Picture" button
removePictureBtn.addEventListener('click', function() {
    // Get the last child element inside the gallery container
    const lastGalleryItem = galleryContainer.lastElementChild;

    // Check if there is a last element to remove
    if (lastGalleryItem && lastGalleryItem.classList.contains('gallery-item')) {
        // Remove the last gallery item from the container
        galleryContainer.removeChild(lastGalleryItem);
        // Note: We don't decrement emojiIndex here because removing doesn't
        // change the sequence for *adding* the next emoji.
    } else {
        // Optionally, provide feedback if there are no specific elements to remove
        console.log("No gallery items to remove!");
    }
});

