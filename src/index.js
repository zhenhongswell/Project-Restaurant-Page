import loadPageHome from "./Home.js";
import { loadPageMenu } from "./Menu.js";
import { loadPageAbout } from "./About.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#Home");
const menuButton = document.querySelector("#Menu");
const aboutButton = document.querySelector("#About");

function clearContent(content) {
  content.childNodes.forEach((childNode) => {
    content.removeChild(childNode);
  });
}

homeButton.addEventListener("click", () => {
  clearContent(content);
  loadPageHome(content);
});

menuButton.addEventListener("click", () => {
  clearContent(content);
  loadPageMenu(content);
});

aboutButton.addEventListener("click", () => {
  clearContent(content);
  loadPageAbout(content);
});
