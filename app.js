'use strict';

//++++++++++++++++++++++++++++++
// SETTING UP GLOBAL DATA
//++++++++++++++++++++++++++++++

var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allProducts = []; // This is the main array of objects
var totalClicks = 0; // Tallies the 25 clicks

// DOM access
var container = document.getElementById('image_container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var productList = document.getElementById('productlist');
var justViewed = [];

//++++++++++++++++++++++++++++++
// CONSTRUCTOR
//++++++++++++++++++++++++++++++

function Product(name) {
  this.name = name; //this wiill be the alt/title value
  this.filepath = `img/${name}.jpg`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}

//++++++++++++++++++++++++++++++
// INSTANCES
//++++++++++++++++++++++++++++++

for (var i = 0; i < names.length; i++) {
  new Product(names[i]);
}

//++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
//++++++++++++++++++++++++++++++

function makeRandom() {
  return Math.floor(Math.random() * 20);
}


function makeThreeUnique() {
  console.log(justViewed, 'just viewed in line 50');
  var output = [];

  var firstNum = makeRandom(); //make first     //**need to do this for 2 & 3 */
  while (justViewed.includes(firstNum)) {
     firstNum = makeRandom(); //make first again
  }
  output.push(firstNum);

  output.push(makeRandom()); //make second
  while (output[0] === output[1]){
    console.log('duplicate detected');
    output[1] = makeRandom();
  }

  output.push(makeRandom()); //make third
  while (output[0] === output[2] || output[1] === output[2]){
    console.log('duplicate detected on third');
    output[2] = makeRandom();
  }
  justViewed = output;  //puts images viewed into array to start checking for duplicates
  return output;
}

function displayPics() {
  var idx = makeThreeUnique();
  //console.log(idx);
  allProducts[idx[0]].views++
  allProducts[idx[1]].views++
  allProducts[idx[2]].views++
  left.src = allProducts[idx[0]].filepath;
  center.src = allProducts[idx[1]].filepath;
  right.src = allProducts[idx[2]].filepath;
  left.alt = allProducts[idx[0]].name;
  center.alt = allProducts[idx[1]].name;
  right.alt = allProducts[idx[2]].name;
  left.title = allProducts[idx[0]].name;
  center.title = allProducts[idx[1]].name;
  right.title = allProducts[idx[2]].name;
}

function handleClick(event) {
  console.log(event.target.alt, 'was clicked');
  if (event.target.id === 'image_container') {
    return alert('Please click directly on an image')
  }
  totalClicks++;
  //console.log(totalClicks, 'total clicks');


}

  for(var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }

  if (totalClicks === 25 {
      container.removeEventListener('click', handleClick);  //to remove listener since 25 clicks have been recorded
      return showList();
  }
  displayPics();
}

function showList() {
    for (var i = 0; i < allProducts.length; i++) {
        var LiEl = cocument.creatElement('li');
        LiEl.textContent = `${allProducts[i].name} has ${allProducts[i].views} views and ${allProducts[i].votes} votes`;
        productList.appendChild(liEl);
    }
}

//++++++++++++++++++++++++++++++
// CODE THAT EXECUTES ON PAGE LOAD
//++++++++++++++++++++++++++++++

displayPics();
container.addEventListener('click', handleClick);





















//'use strict';

// //array to store the objects

// var allImages = [];
// var allProducts = []

// //make a constructor function
// function Product(name, filepath) {
//   this.name = name;
//   this.filepath = filepath;
//   this.view = 0; //starts count of views at zero
//   allProducts.push(this);
// }

// //make new product instances
// new Product('bag', 'img/bag.jpg');
// new Product('banana', 'img/banana.jpg');
// new Product('bathroom', 'img/bathroom.jpg');
// new Product('boots', 'img/boots.jpg');
// new Product('breakfast', 'img/breakfast.jpg');
// new Product('bubblegum', 'img/bubblegum.jpg');
// new Product('chair', 'img/chair.jpg');
// new Product('cthulhu', 'img/cthulhu.jpg');
// new Product('dog-duck', 'img/dog-duck.jpg');
// new Product('dragon', 'img/dragon.jpg');
// new Product('pen', 'img/pen.jpg');
// new Product('pet-sweep', 'img/pet-sweep.jpg');
// new Product('scissors', 'img/scissors.jpg');
// new Product('shark', 'img/shark.jpg');
// new Product('sweep', 'img/sweep.png');
// new Product('tauntaun', 'img/tauntaun.jpg');
// new Product('unicorn', 'img/unicorn.jpg');
// new Product('usb', 'img/usb.gif');
// new Product('water-can', 'img/water-can.jpg');
// new Product('wine-glass', 'img/wine-glass.jpg');

// // Get the <img> element from the DOM
// var productImgI = document.getElementById('product-pic-i');
// var productImgJ = document.getElementById('product-pic-j');
// var productImgK = document.getElementById('product-pic-k');

// function randomProduct() {

//   // We need to access the <img> element in the DOM
//   // Select a random product from the array of products (1st/2nd/3rd items)
//   var idx = Math.floor(Math.random() * allProducts.length);
//   console.log(allProducts[idx]);

//   //****get jdx image not same as idx and third iteration not same as i or j */
//   do {var jdx = Math.floor(Math.random() * allProducts.length);
//   console.log(allProducts[jdx]);
//   }

//   var kdx = Math.floor(Math.random() * allProducts.length);
//   console.log(allProducts[kdx]);
//   //Assign the src, alt, and title attributes to the <img> element
//   productImgI.src = allProducts[idx].filepath;
//   productImgI.alt = allProducts[idx].name;
//   productImgI.title = allProducts[idx].name;

//   productImgJ.src = allProducts[jdx].filepath;
//   productImgJ.alt = allProducts[jdx].name;
//   productImgJ.title = allProducts[jdx].name;

//   productImgK.src = allProducts[kdx].filepath;
//   productImgK.alt = allProducts[kdx].name;
//   productImgK.title = allProducts[kdx].name;

//   //Console log which product is showing
//   console.log(`${allProducts[idx].name} is showing`);
//   console.log(`${allProducts[jdx].name} is showing`);
//   console.log(`${allProducts[kdx].name} is showing`);

//   //tally  views for each item (or it's supposed too Lol)
//   allProducts[idx].views++;
//   allProducts[jdx].views++;
//   allProducts[kdx].views++;

// }

// randomProduct();


// // Listen for clicks on the goat and then display a new goat

// productImgI.addEventListener('click', randomProduct);
// productImgJ.addEventListener('click', randomProduct);
// productImgK.addEventListener('click', randomProduct);













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
