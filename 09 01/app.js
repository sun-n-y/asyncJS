//

boilWater();
console.log('chop carrots');

function boilWater() {
  console.log('boiling...');
  setTimeout(() => {
    console.log('done.');
    console.log('add carrots');
    setTimeout(() => {
      console.log('carrots done');
      console.log('add onions');
      setTimeout(() => {
        console.log('onion done');
      }, 500);
    }, 500);
    console.log('chop onion');
  }, 10000);
}
