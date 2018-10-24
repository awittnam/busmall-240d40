'use strict';

//++++++++++++++++++++++++++++++
// SETTING UP GLOBAL DATA
//++++++++++++++++++++++++++++++

// if (LS existe){
//     retrieve/parse 
//     -assign to allProducts
//   } else {
//     create instances
//   }

 
  //this should happen at the very beginning


var names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allProducts = []; // This is the main array of objects
var totalClicks = 0; // Tallies the 25 clicks
var voteTally = [];


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
  this.name = name; //this will be the alt/title value
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
  //console.log(justViewed, 'just viewed in line 50');
  var output = [];

  var firstNum = makeRandom(); //make first     //**need to do this for 2 & 3 */
  while (justViewed.includes(firstNum)) {
    firstNum = makeRandom(); //make first again
  }
  output.push(firstNum);


  var secondNum = makeRandom();
  while (output[0] === secondNum || justViewed.includes(secondNum)) {
    console.log('duplicate detected');
    secondNum = makeRandom();
  }
  output.push(secondNum);

  var thirdNum = makeRandom();
  while (output[0] === thirdNum || output[1] === thirdNum || justViewed.includes(thirdNum)) {
    console.log('duplicate detected on third');
    thirdNum = makeRandom();
  }
  output.push(thirdNum);
  justViewed = output; //puts images viewed into array to start checking for duplicates
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
  //console.log(event.target.alt, 'was clicked');
  if (event.target.id === 'image_container') {
    return alert('Please click directly on an image')
  }
  totalClicks++;

  //console.log(totalClicks, 'total clicks');

  for(var i = 0; i < allProducts.length; i++) {
    if (event.target.alt === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }

  if (totalClicks === 25) {
    container.removeEventListener('click', handleClick); //to remove listener since 25 clicks have been recorded
    renderChart();
    saveProductStats();
    return;
  }
  displayPics();
}

function saveProductStats() {
    var jsonStr = JSON.stringify(allProducts);
    localStorage.setItem('allProducts', jsonStr);
}

function showList() {
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${allProducts[i].name} has ${allProducts[i].views} views and ${allProducts[i].votes} votes`;
    productList.appendChild(liEl);
  }
}

function getVotes() {
  for (var i = 0; i < allProducts.length; i++) {
    voteTally.push(allProducts[i].votes);
  }
}

//chart
var ctx = document.getElementById('myChart').getContext('2d');
function renderChart() {
  getVotes();
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: 'Votes per Product',
        data: voteTally,
      }]
    },
    options: {}
  })
}
 

//++++++++++++++++++++++++++++++
// CODE THAT EXECUTES ON PAGE LOAD
//++++++++++++++++++++++++++++++

displayPics();
container.addEventListener('click', handleClick);





















