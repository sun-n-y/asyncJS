//make soup
//boil water 10 min
//chop carrots
//add carrots to boil for 5 min
//chop onion
//add onion to boil for 5 min

//synchronous
boilWater(10000);
console.log(`chop onion`);
boilWater(5000);
console.log(`chop carrot`);
boilWater(5000);

function boilWater(time) {
  console.log('boiling....');
  for (let i = 0; i < time; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}
