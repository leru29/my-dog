var pics = [
    "babyboxer.jpg",
    "boxer.jpg",
    "Boxer-Dog.jpg",
    "download.jpg",
    "download2.jpg",
    "images.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 6){
        counter = 0
    };
    img.src = pics[counter];
    counter = counter + 1;
});

