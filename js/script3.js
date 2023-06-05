const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let istDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const  showHideicons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth  ? "none" : "block";
}

arrowIcons.forEach(icon =>{
    icon.addEventListener("click", () =>{
         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
         setTimeout(() => showHideicons(), 60);
    });
});

const dragStart = (e) => {
    let istDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;

}

const dragging = (e) => {
    if(!isdragStart) return;
    carousel.classList.add("dragging");
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideicons();
}

const dragStop = () => {
    istDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousemove", dragStop);