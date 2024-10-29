const card = document.getElementById('cards');
const dropzone = document.getElementById('dropzone');

card.addEventListener('dragstart', (e) => {
    e.dataTransfer.effectAllowed = 'move';
});

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.appendChild(draggable);
});
