document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

document.querySelectorAll("a, button").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const text = this.textContent.trim().toLowerCase();

    if (
      text.includes("learn") ||
      text.includes("read") ||
      text.includes("buy") ||
      text.includes("shop")
    ) {
      e.preventDefault();
      alert("Thanks for showing interest in Organic Skin Care & Soap Crafters 🌿");
    }
  });
});

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");

  if (header) {
    header.classList.toggle("sticky", window.scrollY > 50);
  }
});

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});