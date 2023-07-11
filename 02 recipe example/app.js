//synchronous
console.log(`I am first`);
console.log(`I am second`);
console.log(`I am third`);

console.log(`I am first`);
boilingWater();
console.log(`I am second`);
console.log(`I am third`);

function boilingWater() {
  console.log('boiling....');
  for (let i = 0; i < 1000; i++) {
    console.log('still not done...');
  }
  console.log('done.');
}
