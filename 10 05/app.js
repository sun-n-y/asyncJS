//
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const container = document.querySelector('.img-container');
const url = 'https://source.unsplash.com/random';
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  loadImage(url)
    .then((data) => {
      container.appendChild(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error(`failed to load image from source: ${url}`));
    });
  });
  return promise;
}
