
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeArray = [];
var firstPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.3);
var seaCenter = new Store('Seattle Center', 11, 38, 2.3);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.total = 0;
  this.salesArray = [];
  var total = this.total;

  this.randomCust = function() {
    return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
  };

  this.randomHourlySale = function() {
    return Math.floor(this.randomCust() * avgCookieSale);
  };

  this.totalSales = function() {
    for (var i = 0; i < storeHours.length; i++) {
      var randomHourlySale = this.randomHourlySale();
      this.salesArray.push(randomHourlySale);
      this.total += randomHourlySale;
    }
  };

  this.totalSales();
  storeArray.push(this);
};
console.log(storeArray);

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

  var tFoot = document.createElement('tfoot');
  tFoot.id = 'bob';
  table.appendChild(tFoot);

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
///End Table
tabFunction();

//form
var form = document.getElementById('the-form');
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
    var tFoot = document.getElementById('bob');
    var totalsRow = document.getElementById('shirley');
    tFoot.removeChild(totalsRow);
    hourlyTotals();
    form.reset();
  }
}

//hourly totals
function hourlyTotals(){
  var tFoot = document.getElementsByTagName('tfoot')[0];
  var tabRow = document.createElement('tr');
  tabRow.id = 'shirley';
  tFoot.appendChild(tabRow);
  var rowName = document.createElement('th');
  tabRow.appendChild(rowName);
  rowName.innerText = 'Total Sales';

  for (h = 0; h < storeHours.length; h++) {
    var tData = document.createElement('td');
    var hourly = 0;
    for (j = 0; j < storeArray.length; j++){
      hourly += storeArray[j].salesArray[h];

    }
    console.log(tData);
    tData.innerText = hourly;
    tabRow.appendChild(tData);
  }
};

hourlyTotals();
form.addEventListener('submit', createNewStore);
