// export ? need {loadPageMenu}
export function loadPageMenu(content) {
  const title = document.createElement("div");
  title.textContent = "Menu!";

  content.appendChild(title);
}
