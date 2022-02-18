/* global data */
/* exported data */

var $addEntry = document.querySelector('#add-entry');
var $modal = document.querySelector('#modal');

function showModal(event) {
  $modal.className = 'black-bg';
}

var $submitButton = document.querySelector('#submit-button');

$submitButton.addEventListener('submit', closeModal);

$addEntry.addEventListener('click', showModal);

function closeModal(event) {
  $modal.className = 'black-bg hidden';
}

var $form = document.querySelector('form');

$form.addEventListener('submit', createEntry);

function createEntry(event) {
  event.preventDefault();

  var entryObj = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value,
    entryId: data.nextEntryId
  };

  data.entries.unshift(entryObj);
}
