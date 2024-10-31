// Typed Animation
var typed = new Typed(".typed-animation", {
  strings: [
    "I'm a Simone Olivia",
    "I'm a Freelancer.",
    "I'm a Photographer.",
    "I'm a Designer.",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

// Fixed Scroll
const toTop = document.querySelector(".arrow-upward");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// OWL arousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
    992: {
      items: 2,
    },
  },
});

// Counter
var nums = document.querySelectorAll(".about-counter .num");
var section = document.querySelector(".about");
var started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }
  }
};

function startCount(el) {
  var goal = el.dataset.goal;
  var count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 20);
}

// Scroll Nav

// var nav = document.querySelector("nav");
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 50) {
//     nav.classList.add("new-nav");
//   } else {
//     nav.classList.remove("new-nav");
//   }
// });
