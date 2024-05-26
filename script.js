const q = console.log;

//use 100vh for mobile responsive
//COP!!!
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
///////////////////////////////////////////

let now = "home";

const home = () => {
  document.getElementById("main").style = `background-image: url("home.webp");`;
  document.getElementById("home").classList.add("active");
  document.getElementById(now).classList.remove("active");
  now = "home";
};

const blog = () => {
  document.getElementById("main").style = `background-image: url("blog.jpg");`;
  document.getElementById("blog").classList.add("active");
  document.getElementById(now).classList.remove("active");
  now = "blog";
};
const work = () => {
  document.getElementById("main").style = `background-image: url("work.webp");`;
  document.getElementById("work").classList.add("active");
  document.getElementById(now).classList.remove("active");
  now = "work";
};
const aboutUs = () => {
  document.getElementById(
    "main"
  ).style = `background-image: url("About-Us.jpg");`;
  document.getElementById("aboutUs").classList.add("active");
  document.getElementById(now).classList.remove("active");
  now = "aboutUs";
};
