var $addEntry = document.querySelector('#add-entry');
var $modal = document.querySelector('#modal');

$addEntry.addEventListener('click', showModal);

function showModal(event) {
  $modal.className = 'black-bg';
}

var $submitButton = document.querySelector('#submit-button');

$submitButton.addEventListener('click', closeModal);

function closeModal(event) {
  $modal.className = 'black-bg hidden';
}
