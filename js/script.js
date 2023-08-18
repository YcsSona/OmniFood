// const myName = "OmniFood";

// const h1 = document.querySelector(".heading-primary");



// h1.addEventListener("click", function(){
//   h1.textContent = myName;
//   h1.style.backgroundColor="teal";
//   h1.style.padding = "5rem";
// });

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent=currentYear;
