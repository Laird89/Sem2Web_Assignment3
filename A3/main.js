//main.js

const webpage = document.querySelector("body");

const p = document.createElement("p");
const image = document.createElement("img");

p.setAttribute("id","showImage");
image.setAttribute("id","randomImage");

const pText = document.createTextNode("Load random image");

p.addEventListener("click", setRandomImage);

const imageArray = [
        "image1.jpg", 
        "image2.jpg", 
        "image3.jpg", 
        "image4.jpg"
        ];

function setRandomImage(event){
    const randomIndex = imageArray[Math.floor(Math.random() * imageArray.length)];
    image.setAttribute("src", randomIndex);
    image.setAttribute("width", 633); 
    image.setAttribute("height", 356);   
}

p.appendChild(pText);
webpage.appendChild(p);
webpage.appendChild(image);