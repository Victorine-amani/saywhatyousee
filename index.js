function openNew() {
    var newWindow = open('game.html', 'game')
}

// var currentSlide = 0;
// const slides = document.querySelectorAll(".slide")

// const init = (n) => {
//     slides.forEach(slide) => {
//         slide.style.display = "none"
//     }
// }
function slideshow() {
    let slides = document.getElementById("slide1")
    let slides1 = document.getElementById("slide2")
    let slides2 = document.getElementById("slide3")
    let slides3 = document.getElementById("slide4")
    let slides4 = document.getElementById("slide5")
    let slides5 = document.getElementById("slide6")

    let allslides = [slides, slides1, slides2, slides3, slides4, slides5]

    for (i in allslides) {
        if (i = 0, i <= allslides, i++) {
            btnnext = document.getElementsByClassName("prev")
            btnnext.onclick(slides[i])

        }
    }


}