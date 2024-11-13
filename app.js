let scrollBtn = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollBtn.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollBtn.scrollLeft += evt.deltaY;
})

backBtn.addEventListener("click", () => {
    scrollBtn.scrollLeft -= 900;
})
nextBtn.addEventListener("click", () => {
    scrollBtn.scrollLeft += 900;
})



const scroll = new LocomotiveScroll({
    el: document.querySelector(".gallery"),
    smooth: true
});
