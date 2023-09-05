//

boilWater(10000);
console.log('chop carrots');

function boilWater(time) {
  console.log('boiling...');
  setTimeout(() => {
    console.log('done.');
  }, time);
}
