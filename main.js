// LUCIDE ICONS

lucide.createIcons();


// ======================
// DARK MODE
// ======================

const darkModeBtn = document.querySelector(".dark-mode-btn");

darkModeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});


// ======================
// RTL MODE
// ======================

const rtlBtn = document.querySelector(".rtl-btn");

rtlBtn.addEventListener("click", () => {

  document.body.classList.toggle("rtl-mode");

});

