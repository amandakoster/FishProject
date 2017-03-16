

// var form = document.getElementById('the-form');
//
// function addNewStore(event) {
//   event.preventDefault();
//   var newName = event.target.storeName.value;
//   console.log(newName);
// }


// function(event){
//   var form = document.getElementById('the-form');
//   var formName = document.getElementById('submit');
//   var fMin = document.getElementById('minCust');
//   var fromMax = document.getElementById('maxCust');
//   var formButton = document.getElementById('submit'); btn.disabled = true;
//   event.preventDefault();
// };
var form = form.addEventListener('submit', function);
newTableRow(event) {
event.preventDefault();
var minCust = event.target.minCust.value;
var maxCust = event.target.maxCust.value;
var avgCookieSale = event.target.avgCookieSale.value;
var button = event.target.button.value;
}


'use strict';

alertTheUser = function(event){
  var form = document.getElementById('the-form');
  body.appendChild(form);
  var btn = document.getElementById('submit');
  body.appendChild(btn);
  var form = document.getElementById('minCust');
  body.appendChild(form);
  var btn = document.getElementById('maxCust');
  body.appendChild(form);
  var btn = document.getElementById('submit'); btn.disabled = true;
  body.appendChild(btn);
  event.preventDefault();
} // stops the form from submitting and leaving the page.
  // time for the harvest
  var theFormItself = event.target;
  // the "elements" attribute of the event.target object holds (for a form) all of the form fields by name
  console.log(theFormItself.elements['firstname'].value);
}


function capitalizeEverything(event){
  // var theText = this.value;
  this.value = "You've focused on me!";
  console.log(this);
  console.log(event.target);
}
firstname.addEventListener('focus', capitalizeEverything);

//Form

var theFormItself = event.target;
  the "elements" attribute of the event.target object holds (for a form) all of the form fields by name
  console.log(theFormItself.elements['name', 'minCust', 'maxCust', 'avgCookieSale'].value);
  };

form.addEventListener('submit', alertTheUser);

target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);

function alertTheUser(event){
  event.preventDefault(); // stops the form from submitting and leaving the page.
  // time for the harvest
  var theFormItself = event.target;
  // the "elements" attribute of the event.target object holds (for a form) all of the form fields by name
  console.log(theFormItself.elements['firstname'].value);
};
form.addEventListener('submit', alertTheUser);
