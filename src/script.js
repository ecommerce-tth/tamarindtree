document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    autoplay: {
      delay: 8000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5
      },
      1024: {
        slidesPerView: 1
      }
    }
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  const verticalScrollPx = window.scrollY || window.pageYOffset;
  const rect = navbar.getBoundingClientRect();

  if (rect.height < verticalScrollPx) {
    navbar.classList.add("shadow-md");
    navbar.classList.add("bg-black/95");
  } else {
    navbar.classList.remove("shadow-md");
    navbar.classList.remove("bg-black/95");
  }
});
