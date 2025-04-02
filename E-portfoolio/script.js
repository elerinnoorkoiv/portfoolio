// Navigation
// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector(".menuIcon");
let nav = document.querySelector(".overlay-menu");

menuIcon.addEventListener("click", () => {
  if (nav.style.transform != "translateX(0%)") {
    nav.style.transform = "translateX(0%)";
    nav.style.transition = "transform 0.2s ease-out";
  } else {
    nav.style.transform = "translateX(-100%)";
    nav.style.transition = "transform 0.2s ease-out";
  }
});

// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector(".menuIcon");

toggleIcon.addEventListener("click", () => {
  if (toggleIcon.className != "menuIcon toggle") {
    toggleIcon.className += " toggle";
  } else {
    toggleIcon.className = "menuIcon";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menuIcon");
  const overlayMenu = document.querySelector(".overlay-menu");
  const body = document.body;
  const hideLinks = document.querySelectorAll(".hide-on-overlay");

  menuIcon.addEventListener("click", function () {
    overlayMenu.classList.toggle("open");
    body.classList.toggle("overflow-hidden");
    body.classList.toggle("overlay-menu-open");

    if (overlayMenu.classList.contains("open")) {
      overlayMenu.style.transform = "translateX(0%)";
    } else {
      overlayMenu.style.transform = "translateX(-100%)";
    }
  });

  // Close the overlay menu when an anchor link is clicked
  const overlayLinks = document.querySelectorAll(".overlay-menu a");

  overlayLinks.forEach((link) => {
    link.addEventListener("click", () => {
      overlayMenu.style.transform = "translateX(-100%)";
      overlayMenu.classList.remove("open");
      body.classList.remove("overflow-hidden");
      body.classList.remove("overlay-menu-open");
      menuIcon.classList.remove("toggle");
    });
  });
});
function copyEmail() {
  const email = "elerin12@gmail.com";
  navigator.clipboard.writeText(email).then(
    function () {
      alert("Email address copied to clipboard: " + email);
    },
    function () {
      alert("Failed to copy email address to clipboard.");
    }
  );
}

window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

$(document).ready(function () {
  $("overlay-menu").hide();
});
