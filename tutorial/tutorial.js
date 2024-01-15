import * as data from "../data.js";

window.onload = function() {

    let language = localStorage.getItem("language");
    if(language === null) language = "german";

    document.getElementById("previousImage").addEventListener('click', function () {
        previousImage();
    });
    document.getElementById("nextImage").addEventListener('click', function () {
        nextImage();
    });
    
    var images;

    // image array
    if (language === "german") {
        images = ["./images/ger/ger_dayview0.png", "./images/ger/ger_sorting.png", "./images/ger/ger_dayview1.png", "./images/ger/ger_filter.png", "./images/ger/ger_dayview2.png", "./images/ger/ger_differentday.png", "./images/ger/ger_weekview.png", "./images/ger/ger_dishview.png", ];
    } else {
        images = ["./images/en/en_dayview0.png", "./images/en/en_sorting.png", "./images/en/en_dayview1.png", "./images/en/en_filter.png", "./images/en/en_dayview2.png", "./images/en/en_differentday.png", "./images/en/en_weekview.png", "./images/en/en_dishview.png", ];
    }

    var currentImageIndex = 0;
    var shownImage = document.getElementById("shownImage");

    shownImage.src = images[currentImageIndex];

    // click to see previous pic
    function previousImage() {
        if(currentImageIndex != 0) {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        }
        shownImage.src = images[currentImageIndex];
    }

    // click to see next pic
    function nextImage() {
        if(currentImageIndex != images.length - 1) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }
        shownImage.src = images[currentImageIndex];
    }
}