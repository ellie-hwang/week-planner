/* global data */
/* exported data */

var $addEntry = document.querySelector('#add-entry');
var $modal = document.querySelector('#modal');

function showModal(event) {
  $modal.className = 'black-bg';
}

var $submitButton = document.querySelector('#submit-button');

$submitButton.addEventListener('click', closeModal); // changed to click

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
  data.nextEntryId++;
  $form.reset();
}

// function renderEntry(entryObj) {
//   var $table = document.createElement('table');
//   var $thead = document.createElement('thead');
//   var $trow1 = document.createElement('tr');
//   var $thTime = document.createElement('th');
//   $thTime.textContent = 'Time';
//   var $thDescription = document.createElement('th');
//   $thDescription.textContent = 'Description';
//   $table.appendChild($thead);
//   $thead.appendChild($trow1);
//   $trow1.appendChild($thTime);
//   $trow1.appendChild($thDescription);

//   return $table;

// }
