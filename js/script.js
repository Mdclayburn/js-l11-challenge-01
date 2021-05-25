const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImages = async function (){
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(res);
    selectRandomImg(images);
};

const selectRandomImg = function(images){
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImg = images[randomIndex];
    displayImg(randomImg);
};

const displayImg = function(randomImg){
    const author = randomImg.author;
    const imgAddress = randomImg.download_url;
    authorSpan.innerText = author;
    img.src= imgAddress;
    imgDiv.classList.remove("hide");
};
button.addEventListener("click", function(){
    getImages();
});
