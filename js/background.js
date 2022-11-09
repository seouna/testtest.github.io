

const images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];


const chosenImage = images[Math.floor(Math.random()*images.length)];


const bgImage=`url("./images/${chosenImage}")`;

console.log(bgImage);

document.body.style.backgroundImage = bgImage;
