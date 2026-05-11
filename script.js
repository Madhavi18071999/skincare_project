const themeToggle =
document.getElementById("themeToggle");

themeToggle.onclick = () => {

  document.body.classList.toggle("dark");

};

const rtlToggle =
document.getElementById("rtlToggle");

rtlToggle.onclick = () => {

  const html =
  document.documentElement;

  if(html.dir === "ltr"){

    html.dir = "rtl";

  }else{

    html.dir = "ltr";

  }

};