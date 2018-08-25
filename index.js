// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name){
  let newDriversPro = [name, ...drivers];
  return newDriversPro;
}

function removeLastDriver(){
  let newDrivers = [...drivers.slice(0,-1)];
  return newDrivers;
}

function removeFirstDriver(){
  let newDrivers = [...drivers.slice(1)];
  return newDrivers;
}


