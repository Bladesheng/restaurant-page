import "./styles/style.scss";
import createHome from "./pages/home";
import createMenu from "./pages/menu";
import createAbout from "./pages/about";
import logo from "./assets/icons/logo.svg"


const main = document.querySelector("main");
const header = document.querySelector("header");

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");


homeBtn.addEventListener("click", () => {
  clearMain();
  main.appendChild(createHome()); 
})

menuBtn.addEventListener("click", () => {
  clearMain();
  main.appendChild(createMenu());
})

aboutBtn.addEventListener("click", () => {
  clearMain();
  main.appendChild(createAbout());
})


function clearMain() {
  main.textContent = "";
}

const logoImg = new Image();
logoImg.src = logo;
header.insertBefore(logoImg, header.firstChild);


// first setup

main.appendChild(createHome());
