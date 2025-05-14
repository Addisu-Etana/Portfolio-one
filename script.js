let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer",
    "React Developer",
    "Javascript Developer",
    "Web Designer",
    "Technology Enthusiast",
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1500,
  loop: true,
});
// const typed2 = new Typed('.Animation-text', {
//   strings: [
//     "Ethiopia",
//     "Addis Ababa",

//   ],
//   typeSpeed: 80,
//   backSpeed: 80,
//   backDelay: 1500,
//   loop: true,
// });
