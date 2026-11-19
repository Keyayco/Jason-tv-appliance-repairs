// Jason TV & Appliance Repairs — main.js
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "27637159234";

  /* ----- Mobile navigation ----- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  function closeNav() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        closeNav();
        toggle.focus();
      }
    });
  }

  /* ----- Header shadow on scroll ----- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Enquiry form -> prefilled WhatsApp ----- */
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = form.elements.name.value.trim();
      var device = form.elements.device.value.trim();
      var message = form.elements.message.value.trim();
      var valid = true;

      [form.elements.name, form.elements.device, form.elements.message].forEach(function (field) {
        var empty = !field.value.trim();
        field.classList.toggle("invalid", empty);
        if (empty) valid = false;
      });
      if (!valid) return;

      var text =
        "Hi Jason, my name is " + name + ". " +
        "I'd like to enquire about a repair for my " + device + ". " +
        "Problem: " + message;

      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener");
    });

    form.addEventListener("input", function (event) {
      if (event.target.classList) event.target.classList.remove("invalid");
    });
  }

  /* ----- Scroll reveal ----- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ----- Current year ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
