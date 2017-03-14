
// Store the results for each location in a separate array... perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

var storeHours = ['6a', '7a', '8a', '9a', '10a', '11a', '12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a'];

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

// /var firstItem = document.getElementById('body');
// var navList = document.getElementsByTagName('ul')[0];
// var newListItem = document.createElement('li');
// newListItem.appendChild(newLink);
// newListItem.setAttribute('class', 'some-list-class');
// navList.appendChild(newListItem);
