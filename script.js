var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

///FirstPike
var firstPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  total: 0,
  salesArray: [],
  renderHTML: function() {
    this.totalSales();
    var newUl = document.createElement('ul');
    var newUl = document.createElement('ul');
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
    body.appendChild(newHeading);
    for (var i = 0; i < this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var TotalLi = document.createElement('li');
    TotalLi.innerText = 'Total' + ': ' + this.total + ' cookies';
    newUl.appendChild(TotalLi);
    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  hourlySales: function() {
    return Math.floor(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var hourlySales = this.hourlySales();
      this.salesArray.push(hourlySales);
      this.total += hourlySales;
    }
  }
};
firstPike.renderHTML();

///SeaTac Airport
var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  total: 0,
  salesArray: [],
  renderHTML: function() {
    this.totalSales();
    var newUl = document.createElement('ul');
    var newUl = document.createElement('ul');
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
    body.appendChild(newHeading);
    for (var i = 0; i < this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var TotalLi = document.createElement('li');
    TotalLi.innerText = 'Total' + ': ' + this.total + ' cookies';
    newUl.appendChild(TotalLi);
    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  hourlySales: function() {
    return Math.floor(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var hourlySales = this.hourlySales();
      this.salesArray.push(hourlySales);
      this.total += hourlySales;
    }
  }
};
seaTac.renderHTML();

///Seattle Center
var seaCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  total: 0,
  salesArray: [],
  renderHTML: function() {
    this.totalSales();
    // this.total = this.totalSales() * this.salesArray[i];
    var newUl = document.createElement('ul');
    var newUl = document.createElement('ul');
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
    body.appendChild(newHeading);
    for (var i = 0; i < this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var TotalLi = document.createElement('li');
    TotalLi.innerText = 'Total' + ': ' + this.total + ' cookies';
    newUl.appendChild(TotalLi);

    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  hourlySales: function() {
    return Math.floor(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var hourlySales = this.hourlySales();
      this.salesArray.push(hourlySales);
      this.total += hourlySales;
    }
  }
};
seaCenter.renderHTML();

///Capitol Hill
var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  total: 0,
  salesArray: [],
  renderHTML: function() {
    this.totalSales();
    // this.total = this.totalSales() * this.salesArray[i];
    var newUl = document.createElement('ul');
    var newUl = document.createElement('ul');
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
    body.appendChild(newHeading);
    for (var i = 0; i < this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var TotalLi = document.createElement('li');
    TotalLi.innerText = 'Total' + ': ' + this.total + ' cookies';
    newUl.appendChild(TotalLi);
    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  hourlySales: function() {
    return Math.floor(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var hourlySales = this.hourlySales();
      this.salesArray.push(hourlySales);
      this.total += hourlySales;
    }
  }
};
capHill.renderHTML();

///Alki
var Alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.,
  total: 0,
  salesArray: [],
  renderHTML: function() {
    this.totalSales();
    var newUl = document.createElement('ul');
    var newUl = document.createElement('ul');
    var newHeading = document.createElement('h2');
    newHeading.innerText = this.name;
    body.appendChild(newHeading);
    for (var i = 0; i < this.salesArray.length; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArray[i] + ' cookies';
      newUl.appendChild(newLi);
    }
    var TotalLi = document.createElement('li');
    TotalLi.innerText = 'Total' + ': ' + this.total + ' cookies';
    newUl.appendChild(TotalLi);
    body.appendChild(newUl);
  },
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  hourlySales: function() {
    return Math.floor(this.randomCust() * this.avgCookieSale);
  },
  totalSales: function() {
    for (var i = 0; i < storeHours.length; i++) {
      var hourlySales = this.hourlySales();
      this.salesArray.push(hourlySales);
      this.total += hourlySales;
    }
  }
};
Alki.renderHTML();
