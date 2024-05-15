let slider_items = document.querySelectorAll(".slider .item");
let next = document.querySelector("#next");
let previous = document.querySelector("#previous");

console.log(next);
console.log(previous);


let countItem = slider_items.length;
let itemActive = 0;

next.addEventListener("click", () => {
    itemActive +=1;
    if(itemActive >= countItem){
        itemActive = 0;
    }

    showSlider();
});

previous.addEventListener("click", () => {
    itemActive -=1;
    if(itemActive < 0){
        itemActive = countItem -1;
    }

    showSlider();
});

// next.onclick = function (){

// }

function showSlider(){
    let itemActiveOld = document.querySelector(".item.active");
    itemActiveOld.classList.remove("active");
    slider_items[itemActive].classList.add("active");

}