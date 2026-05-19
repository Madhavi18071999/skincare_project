 const themeToggle = document.getElementById("themeToggle");
 
 themeToggle.addEventListener("click", () => {
 
 document.body.classList.toggle("light-mode");
 
 const icon = themeToggle.querySelector("i");
 
 if(document.body.classList.contains("light-mode")){
 
 icon.classList.remove("fa-moon");
 icon.classList.add("fa-sun");
 
 }else{
 
 icon.classList.remove("fa-sun");
 icon.classList.add("fa-moon");
 
 }
 
 });
 

 
 const rtlToggle = document.getElementById("rtlToggle");
 
 rtlToggle.addEventListener("click", () => {
 
 document.body.classList.toggle("rtl");
 
 });
 