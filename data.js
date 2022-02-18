/* exported data */

var data = {
  view: 'Monday',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousDataJSON = localStorage.getItem('weekly-planner-storage');

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', saveEntry);

function saveEntry(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('weekly-planner-storage', dataJSON);
}
