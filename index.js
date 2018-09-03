// Write your solution here!

const drivers =["Milo", "Otis", "Garfield"];

 function destructivelyAppendDriver(name) {
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
  return [...drivers,name];
}


function prependDriver(name){
  let newdriver = [name,...drivers];
  
  return newdriver;
}

function removeLastDriver(){
 let newdriver = drivers.slice(0,drivers.length-1);
  
  return newdriver;
}

function removeFirstDriver(){
 let newdriver = drivers.slice(1);
  
  return newdriver;
}