'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var firstPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.3);
var seaCenter = new Store('Seattle Center', 11, 38, 2.3);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//store object:
function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.total = 0;
  this.salesArray = [];
  var salesArray = this.salesArray;
  var total = this.total;

  this.randomCust = function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  };

  this.randomHourlySale = function() {
    return Math.floor(this.randomCust() * avgCookieSale);
  };

  this.cookiesPuchPerHour = function() {
    for (var i = 0; i < storeHours.length; i++) {
      var randomHourlySale = this.randomHourlySale();
      salesArray.push(randomHourlySale);
      this.total += randomHourlySale;
    }
  };

  this.cookiesPuchPerHour();
  this.renderHTML = function() {

    var newUl = document.createElement('ul');
    var newHeading = document.createElement('h2');
    newHeading.innerText = name;
    body.appendChild(newHeading);

    for (var i = 0; i < salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }

    var TotalLi = document.createElement('li');
    TotalLi.innerText = 'Total' + ': ' + this.total + ' cookies';
    newUl.appendChild(TotalLi);
    body.appendChild(newUl);
  };
};

function createNewStore(event) {
  event.preventDefault();
  var name = event.target.elements.storeName;
  var minCust = event.target.elements.minCust;
  var maxCust = event.target.elements.maxCust;
  var avgCookieSale = event.target.elements.aveCookies;

  if (maxCust < minCust) {
    alert('The max number of customers should not be larger than the min number of customers');
  } else {
    var newStore = new Store(name.value, Math.floor(minCust.value), Math.floor(maxCust.value), avgCookieSale.value);
    newTableRow(newStore);

    form.reset();
  }
}

//Table
//table function
var tabFunction = function() {
  var table = document.createElement('table');
  body.appendChild(table);

// table head
  var tHead = document.createElement('thead');
  table.appendChild(tHead);
  var headRow = document.createElement('tr');
  tHead.appendChild(headRow);

  var spacer = document.createElement('th');
  headRow.appendChild(spacer);

  for (var i = 0; i < storeHours.length; i++) {
    var tData = document.createElement('th');
    tData.innerText = storeHours[i];
    headRow.appendChild(tData);
  };

  //table body
  var tBody = document.createElement('tbody');
  table.appendChild(tBody);

  var tabRow = document.createElement('tr');
  tBody.appendChild(tabRow);

  newTableRow(firstPike);
  newTableRow(seaTac);
  newTableRow(seaCenter);
  newTableRow(capHill);
  newTableRow(alki);
};

function newTableRow(store) {
  var tBody = document.getElementsByTagName('tbody')[0];
  var tabRow = document.createElement('tr');
  tBody.appendChild(tabRow);
  var rowName = document.createElement('th');
  tabRow.appendChild(rowName);
  rowName.innerText = store.name;

  for (var i = 0; i < storeHours.length; i++) {
    var tData = document.createElement('td');
    tData.innerText = store.salesArray[i];
    tabRow.appendChild(tData);
  };
}
tabFunction();

// form start
var form = document.getElementById('the-form');

// form End

function hourlyStoresTotal() {
  var table = document.getElementById('bodyTable');
  var tfoot = document.getElementById('tableFoot');
  table.appendChild(tfoot);
  var tr = document.createElement('tr');
  tfoot.appendChild(tr);
  tr.id = 'totalsRow';
  var th = document.createElement('th');
  th.innerText = 'Total';
  tr.appendChild(th);
  for (var i = 0; i < hours.length - 2; i++) {
    var hrlyTotal = 0;
    for (var x = 0; x < allStores.length; x++) {
      hrlyTotal += allStores[x].salesArray[i];
    }
    var footTD = document.createElement('td');
    footTD.innerText = hrlyTotal;
    footTD.style.backgroundColor = '#40B27C';
    tr.appendChild(footTD);
  }
  // For adding that last cell of the total of totals
  var totalTotal = 0;
  for (var i = 0; i < allStores.length; i++) {
    totalTotal += allStores[i].total;
  }
  var totalTd = document.createElement('td');
  totalTd.innerText = totalTotal;
  totalTd.style.backgroundColor = '#40B27C';
  tr.appendChild(totalTd);
};
// hourlyStoresTotal(); // this was in the wrong place

for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateTableRow();
}
hourlyStoresTotal(); // moved it down here, so that it executes AFTER sales are generated above.

var elStoreForm = document.getElementById('newStoreForm');

function submitButton(event) {
  event.preventDefault();
  var newStoreForm = event.target;
  var strLoc = event.target.storeLocation;
  var minCst = event.target.minimumCustomers;
  var maxCst = event.target.maximumCustomers;
  var avgCook = event.target.averageCookies;
  if (minCst > maxCst) {
    alert('Please double check the number values for accuracy and re-submit the form. Thank you.');
  } else {
    var formVariables = new CreateStore(strLoc.value, minCst.value, maxCst.value, avgCook.value);
    formVariables.generateTableRow();
    // making sure we add appropriate totals
    var tfoot = document.getElementById('tableFoot');
    var totalsRow = document.getElementById('totalsRow');
    tfoot.removeChild(totalsRow); // first remove the existing totals row
    hourlyStoresTotal(); // then append a new, updated totals row
  }
  elStoreForm.reset();
}

elStoreForm.addEventListener('submit',submitButton);
