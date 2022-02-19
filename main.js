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

var $select = document.querySelector('select');

function createEntry(event) {
  event.preventDefault();
  var entryObj = {
    time: $form.elements.time.value,
    description: $form.elements.description.value,
    entryId: data.nextEntryId
  };

  if ($select.value === 'Monday') {
    data.monday.push(entryObj);
    data.nextEntryId++;
  }

  // data.entries.unshift(entryObj);
  // data.nextEntryId++;
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
  if (data.monday.length !== 0) {
    return;
  }
  for (let i = 0; i < data.monday.length; i++) {
    var $entries = renderEntry(data.monday[i]);
    $entryList.appendChild($entries);
  }
}
/*
var $day = document.querySelectorAll('option');
console.log('the value of select is: ', $day);

var $select = document.querySelector('select');
$select.addEventListener('click', clickedFunction);

function clickedFunction(event) {
  console.log('hello');
}

var $days = document.querySelector('#days');
$days.addEventListener('click', days);

function days(event) {
  if (event.target.textContent === 'Monday') {
    for (var i = 0; i < data.monday.length; i++) {
      renderEntry(data.monday[i]);
    }
  }
}
*/
