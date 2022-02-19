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

function renderEntry(entryObj) {
  var $table = document.createElement('table');
  var $thead = document.createElement('thead');
  var $trow1 = document.createElement('tr');
  var $thTime = document.createElement('th');
  $thTime.textContent = 'Time';
  var $thDescription = document.createElement('th');
  $thDescription.textContent = 'Description';
  $table.appendChild($thead);
  $thead.appendChild($trow1);
  $trow1.appendChild($thTime);
  $trow1.appendChild($thDescription);

  var $tbody = document.createElement('tbody');

  for (var i = 0; i < 8; i++) {
    var row = document.createElement('tr');
    $tbody.appendChild(row);
    var td = document.createElement('td');
    var td2 = document.createElement('td');
    row.appendChild(td);
    row.appendChild(td2);
  }

  $table.appendChild($tbody);

  return $table;
}

var $entryList = document.querySelector('#planner-view');
window.addEventListener('DOMContentLoaded', displayEntries);

function displayEntries(event) {
  for (let i = 0; i < data.entries.length; i++) {
    var $entries = renderEntry(data.entries[i]);
    $entryList.appendChild($entries);
  }
}
