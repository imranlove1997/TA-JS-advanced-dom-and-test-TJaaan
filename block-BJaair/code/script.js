let form = document.querySelector("form");
let display = document.querySelector(".art");
let count = 0;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let category = document.querySelector("#category").value;
  createUI(title, category);
});

function createUI(title, category) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  let h2 = document.createElement("h2");
  h2.contentEditable = true;
  localStorage.setItem(title, category);
  h2.innerText = title;
  h2.setAttribute("class", "heading");
  let p = document.createElement("p");
  p.contentEditable = true;
  p.innerText = localStorage.getItem(title);
  p.setAttribute("class", "para");
  box.append(p, h2);
  display.append(box);
}
