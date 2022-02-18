var $addEntry = document.querySelector('#add-entry');
var $modal = document.querySelector('#modal');

function showModal(event) {
  $modal.className = 'black-bg';
}

var $submitButton = document.querySelector('#submit-button');

$submitButton.addEventListener('click', closeModal);

$addEntry.addEventListener('click', showModal);

function closeModal(event) {
  $modal.className = 'black-bg hidden';
}
