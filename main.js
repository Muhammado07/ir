const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".navbar .logo img")
const req = document.querySelector('.navbar .req')
const fixy = document.querySelector('.fixed-req')
const togg = document.querySelectorAll('.navbar .toggle span')


window.onscroll = function () {
    // pageYOffset or scrollY

    if (window.pageYOffset > 80) {
        navbar.classList.add("scrolled");
        logo.setAttribute("src", "img/logo.png")
        req.style.color = "#fff"
        req.style.background = "#152EA9"
        function myFunction(x) {
            if (x.matches) {
                fixy.style.display = "block"
            }
        }

        var x = window.matchMedia("(max-width: 767px)")
        myFunction(x)

        togg.forEach(function (toggy) {
            toggy.style.background = "#151515"
        })



    } else {
        navbar.classList.remove("scrolled");
        logo.setAttribute("src", "img/logo-white.png")
        req.style.color = "#151515"
        req.style.background = "#fff"
        fixy.style.display = "none"
        togg.forEach(function (toggy) {
            toggy.style.background = "#fff"
        })
    }
};

const toggy = document.querySelector('.toggle');
const more = document.querySelector('.info-more')

toggy.addEventListener('click', function () {
    more.classList.toggle('show')
})

// Show Contact pop - up
const pops = document.querySelectorAll(".req");
const pop = document.querySelector(".pop-form");
const cancel = document.querySelector(".cancel");

pops.forEach(function (popss) {
    popss.addEventListener("click", function () {
        pop.classList.add("view");
    });
    cancel.addEventListener("click", function () {
        pop.classList.remove("view");
    });
});

// Date Year

const year = document.querySelector(".year")

year.innerHTML = new Date().getFullYear()
