'use strict';

//array to store the objects

var allImages = [];
var allProducts = []

//make a constructor function
function Product(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.view = 0; //starts count of views at zero
  allProducts.push(this);
}

//make new product instances
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

// Get the <img> element from the DOM
var productImgI = document.getElementById('product-pic-i');
var productImgJ = document.getElementById('product-pic-j');
var productImgK = document.getElementById('product-pic-k');

function randomProduct() {

  // We need to access the <img> element in the DOM
  // Select a random product from the array of products (1st/2nd/3rd items)
  var idx = Math.floor(Math.random() * allProducts.length);
  console.log(allProducts[idx]);

  var jdx = Math.floor(Math.random() * allProducts.length);
  console.log(allProducts[jdx]);

  var kdx = Math.floor(Math.random() * allProducts.length);
  console.log(allProducts[kdx]);
  //Assign the src, alt, and title attributes to the <img> element
  productImgI.src = allProducts[idx].filepath;
  productImgI.alt = allProducts[idx].name;
  productImgI.title = allProducts[idx].name;

  productImgJ.src = allProducts[jdx].filepath;
  productImgJ.alt = allProducts[jdx].name;
  productImgJ.title = allProducts[jdx].name;

  productImgK.src = allProducts[kdx].filepath;
  productImgK.alt = allProducts[kdx].name;
  productImgK.title = allProducts[kdx].name;

  //Console log which product is showing
  console.log(`${allProducts[idx].name} is showing`);
  console.log(`${allProducts[jdx].name} is showing`);
  console.log(`${allProducts[kdx].name} is showing`);

  //tally  views for each item (or it's supposed too Lol)
  allProducts[idx].views++;
  allProducts[jdx].views++;
  allProducts[kdx].views++;

}

randomProduct();

// Listen for clicks on the goat and then display a new goat

productImgI.addEventListener('click', randomProduct);
productImgJ.addEventListener('click', randomProduct);
productImgK.addEventListener('click', randomProduct);













// Array to store the objects
//var allGoats = [];

// Make a constructor function
//function Goat(name, filepath) {
//   this.name = name;
//   this.filepath = filepath;
//   this.view = 0;
//   allGoats.push(this);
// }

// make new Goat instances
// new Goat('Cruisin goat', 'img/cruisin-goat.jpg');
// new Goat('Kissing goats', 'img/kissing-goat.jpg');
// new Goat('Sassy goat', 'img/sassy-goat.jpg');
// new Goat('Smiling goat', 'img/smiling-goat.jpg');
// new Goat('Sweater goat', 'img/sweater-goat.jpg');
// new Goat('Flower goat', 'img/flower-goat.jpg');
// new Goat('Jumping goat', 'img/jumping-goat.jpg');
// new Goat('Toothy goat', 'img/toothy-goat.jpg');
// new Goat('Tongue goat', 'img/tongue-goat.jpg');
// new Goat('Pushy goat', 'img/pushy-goat.jpg');

// // Get the <img> element from the DOM
// var goatImg = document.getElementById('goat-pic');

// // Write a function to randomly display one of the pictures
// function randomGoat() {

//   // We need to access the <img> element in the DOM
//   // Select a random goat from the array of goats
//   var idx = Math.floor(Math.random() * allGoats.length);
//   console.log(allGoats[idx]);

//   // Assign the src, alt, and title attributes to the <img> element
//   goatImg.src = allGoats[idx].filepath;
//   goatImg.alt = allGoats[idx].name;
//   goatImg.title = allGoats[idx].name;

//   // Console log which goat is showing
//   console.log(`${allGoats[idx].name} is showing`)

//   //tally  views for each goat
//   allGoats[idx].views++;

// }

// randomGoat();

// // Listen for clicks on the goat and then display a new goat

// goatImg.addEventListener('click', randomGoat);