/* =================================
   FIRSTSWIFT DEALS EXPRESS
   MAIN JAVASCRIPT
================================= */


/* ================================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================================
   NAVBAR SCROLL EFFECT
================================ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background =
            "rgba(2,2,2,0.96)";

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.35)";

    } else {

        navbar.style.background =
            "rgba(5,5,5,0.82)";

        navbar.style.boxShadow =
            "none";

    }

});


/* ================================
   PARALLAX HERO
================================ */

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    if (!hero || !heroContent) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroContent.style.transform =
            `translateY(${scrollPosition * 0.25}px)`;

    }

});


/* ================================
   MOUSE MOVEMENT EFFECT
================================ */

document.addEventListener("mousemove", (event) => {

    const boxes =
        document.querySelectorAll(".floating-box");

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);

    boxes.forEach((box, index) => {

        const strength = (index + 1) * 8;

        box.style.marginLeft =
            `${x * strength}px`;

        box.style.marginTop =
            `${y * strength}px`;

    });

});


/* ================================
   SHIPPING CARD TILT
================================ */

const cards =
    document.querySelectorAll(".shipping-card, .property-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================================
   CONTACT FORM
================================ */

const quoteForm =
    document.getElementById("quoteForm");

const formMessage =
    document.getElementById("formMessage");


if (quoteForm) {

    quoteForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        if (
            !name ||
            !phone ||
            !email ||
            !service ||
            !message
        ) {

            formMessage.textContent =
                "Please fill in all fields.";

            return;

        }


        /*
            For now this creates a WhatsApp enquiry.

            Later we can connect this form
            to a real backend/email system.
        */

        const whatsappNumber =
            "254768780473";


        const whatsappMessage =
            `Hello FirstSwift Deals Express,

Name: ${name}

Phone: ${phone}

Email: ${email}

Service: ${service}

Message:
${message}`;


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


        formMessage.textContent =
            "Opening WhatsApp...";


        window.open(
            whatsappURL,
            "_blank"
        );


        quoteForm.reset();

    });

}


/* ================================
   ACTIVE NAVIGATION
================================ */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* ================================
   NUMBER COUNTER
================================ */

function animateNumber(element, target) {

    let current = 0;

    const duration = 1500;

    const startTime = performance.now();


    function update(currentTime) {

        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(elapsed / duration, 1);

        current =
            Math.floor(progress * target);

        element.textContent =
            current.toLocaleString();

        if (progress < 1) {

            requestAnimationFrame(update);

        }

    }


    requestAnimationFrame(update);

}


/* ================================
   PAGE LOADED
================================ */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "FirstSwift Deals Express website loaded successfully."
    );

});