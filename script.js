
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

var storeHours = ['6a', '7a', '8a', '9a', '10a', '11a', '12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a'];

///FirstPike
var firstPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  renderHTML: function() {
    this.totalSales();
    var newUl = document.createElement('ul');
    for (var i = 0; i <= this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var body = document.getElementById('body');
    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  hourlySales: function() {
    return Math.ceil(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    var salesArray = [];
    for (var i = 0; i < storeHours.length; i++) {
      salesArray.push(this.hourlySales());
    }
    this.salesArray = salesArray;
    return salesArray;
  }
};
firstPike.renderHTML();

/////SeaTac Airport
var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  renderHTML: function() {
    this.totalSales();
    var newUl = document.createElement('ul');
    for (var i = 0; i < this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var body = document.getElementById('body');
    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  hourlySales: function() {
    return Math.ceil(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    var salesArray = [];
    for (var i = 0; i < storeHours.length; i++) {
      salesArray.push(this.hourlySales());
    }
    this.salesArray = salesArray;
    return salesArray;
  }
};
firstPike.renderHTML();

///Seattle Center
var seaCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  renderHTML: function() {
    this.totalSales();
    var newUl = document.createElement('ul');
    for (var i = 0; i < this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var body = document.getElementById('body');
    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  hourlySales: function() {
    return Math.ceil(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    var salesArray = [];
    for (var i = 0; i < storeHours.length; i++) {
      salesArray.push(this.hourlySales());
    }
    this.salesArray = salesArray;
    return salesArray;
  }
};
firstPike.renderHTML();

///Capitol Hill
var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  renderHTML: function() {
    this.totalSales();
    var newUl = document.createElement('ul');
    for (var i = 0; i < this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var body = document.getElementById('body');
    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  hourlySales: function() {
    return Math.ceil(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    var salesArray = [];
    for (var i = 0; i < storeHours.length; i++) {
      salesArray.push(this.hourlySales());
    }
    this.salesArray = salesArray;
    return salesArray;
  }
};
firstPike.renderHTML();

///Alki
var Alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  renderHTML: function() {
    this.totalSales();
    var newUl = document.createElement('ul');
    for (var i = 0; i < this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var body = document.getElementById('body');
    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust));
  },
  hourlySales: function() {
    return Math.ceil(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    var salesArray = [];
    for (var i = 0; i < storeHours.length; i++) {
      salesArray.push(this.hourlySales());
    }
    this.salesArray = salesArray;
    return salesArray;
  }
};
firstPike.renderHTML();
