function Door (name, isPrice, isPicked, isOpen) { // door object constructor
  this.name = name;
  this.isPrice = isPrice;
  this.isPicked = isPicked;
  this.isOpen = isOpen;
}

// put three doors in an array
var doors = [];
for (i=0; i<3; i++) {
  var x =new Door(`Deur ${i+1}`, false, false, false);
  doors.push(x);
}

// get a random integer where int >= min && int =< max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// randomly assign price and pick
var price = getRandomInt(0,2);
var pick = getRandomInt(0,2);
doors[price].isPrice = true;
doors[pick].isPicked = true;

// remove a losing door
// dit hele stuk kan misschien efficiënter met array.find()?
var remaining = doors.filter(function(elem) {
  return elem.isPicked === false && elem.isPrice === false
}); // find the non-winning door that wasn't picked
if (remaining.length === 1) {
  var open = remaining[0].name;
} else {
  var x = getRandomInt(0,1);
  var open = remaining[x].name;
}
function getOpenDoor (e) {
  return e.name === open;
}
doors.find(getOpenDoor).isOpen = true; // and set the isOpen property to true

// now, reveal empty door and change pick
//door1: picked, not open
//door2: not picked, not open
var options = doors.filter(function(elem) {
  return elem.isOpen === false;
});

for (i in doors) {
  console.log(doors[i].name);
  console.log(`isPrice ${doors[i].isPrice}`);
  console.log(`isOpen ${doors[i].isOpen}`);
  console.log(`isPicked ${doors[i].isPicked}`);
  console.log('-----------------------------');
}

for (i in options) { // why doesnt this work?
  options[i].isPicked === false ? options[i].isPicked = true : options[i].isPicked = false;
}

for (i in doors) {
  console.log(doors[i].name);
  console.log(`isPrice ${doors[i].isPrice}`);
  console.log(`isOpen ${doors[i].isOpen}`);
  console.log(`isPicked ${doors[i].isPicked}`);
  console.log('-----------------------------');
}
