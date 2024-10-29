const card = document.getElementById('cards');
const dropzone = document.getElementById('dropzone');

card.addEventListener('dragstart', (e) => {
    e.dataTransfer.effectAllowed = 'move';
});
card.addEventListener('click', () => {
    if (card.style.display === 'none' || card.style.display === '') {
        card.src = customImageUrl; // Set the custom image source
        card.style.display = 'block'; // Show the image
    } else {
        image.style.display = 'none'; // Hide the image
    }
})
dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.appendChild(draggable);
});
