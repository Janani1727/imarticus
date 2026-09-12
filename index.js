// ================= NAVBAR ELEMENTS =================

let menuBtn = document.getElementById("menuBtn");

let navMenu = document.getElementById("navMenu");

let links = document.querySelectorAll(".nav-link");

let sections = document.querySelectorAll("section");


// ================= ACTIVE LINK ON CLICK =================

links.forEach(function(link) {

    link.addEventListener("click", function() {

        links.forEach(function(item) {

            item.classList.remove("active");

        });

        link.classList.add("active");

        // Close mobile menu

        navMenu.classList.remove("show");

        menuBtn.innerText = "☰";

    });

});


// ================= NAVBAR TOGGLE =================

menuBtn.addEventListener("click", function() {

    navMenu.classList.toggle("show");

    if (navMenu.classList.contains("show")) {

        menuBtn.innerText = "✕";

    } else {

        menuBtn.innerText = "☰";

    }

});


// ================= SCROLL SPY =================

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        let sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {

            currentSection = section.getAttribute("id");

        }

    });


    // Remove active from all links

    links.forEach(function(link) {

        link.classList.remove("active");

    });


    // Add active to current section link

    let activeLink = document.querySelector(
        `a[href="#${currentSection}"]`
    );


    if (activeLink) {

        activeLink.classList.add("active");

    }

});