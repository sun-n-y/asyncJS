//make soup
//boil water 10 min
//chop carrots
//add carrots to boil for 5 min
//chop onion
//add onion to boil for 5 min

boilWater(0);
console.log('chop carrots');
console.log('chop carrots');
console.log('chop carrots');
console.log('chop carrots');
console.log('chop carrots');
console.log('chop carrots');
console.log('chop carrots');

function boilWater(time) {
  console.log('boiling....');
  //browser takes the callack and runs it for the time,then comes back with it
  setTimeout(() => {
    console.log('done.');
  }, time);
}
