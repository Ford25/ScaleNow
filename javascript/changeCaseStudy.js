// Select the buttons and image

const cs1 = document.querySelector("#case-study1");
const cs2 = document.querySelector("#case-study2");
const cs3 = document.querySelector("#case-study3");

const content1 = document.querySelector("#content1");
const content2 = document.querySelector("#content2");
const content3 = document.querySelector("#content3");



// Add click event listeners to the buttons
cs2.addEventListener("click", function() {

    content2.style.display = "flex";
    cs2.style.background = "linear-gradient(92.31deg, #FD6585 0%, #0D25B9 125.17%)";

    content1.style.display = "none";
    cs1.style.background= "#121212";

    content3.style.display = "none";
    cs3.style.background= "#121212";
   
});


cs1.addEventListener("click", function() {

    content2.style.display = "none";
    cs2.style.background = "#121212";

    content1.style.display = "flex";
    cs1.style.background= "linear-gradient(92.31deg, #FD6585 0%, #0D25B9 125.17%)";

    content3.style.display = "none";
    cs3.style.background= "#121212";
   
});

cs3.addEventListener("click", function() {

    content2.style.display = "none";
    cs2.style.background = "#121212";

    content1.style.display = "none";
    cs1.style.background= "#121212";

    content3.style.display = "flex";
    cs3.style.background= "linear-gradient(92.31deg, #FD6585 0%, #0D25B9 125.17%)";
   
});