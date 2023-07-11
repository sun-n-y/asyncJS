//make soup
//boil water 10 min
//chop carrots
//add carrots to boil for 5 min
//chop onion
//add onion to boil for 5 min

boilWater();
console.log('chop carrots');

function boilWater() {
  console.log('boiling....');
  setTimeout(() => {
    console.log('boiling done');
    console.log('add carrots');
    setTimeout(() => {
      console.log('carrots are done');
      console.log('add onion');
      setTimeout(() => {
        console.log('onion done');
      }, 500);
    }, 500);
    console.log('chop onion');
  }, 1000);
}
