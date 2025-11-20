const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

if (localStorage.getItem("darkmode") === "true") {
  html.classList.add("dark");
  btn.textContent = "Light";
} else {
  btn.textContent = "Dark";
}

function toggleTheme() {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    btn.textContent = "Light";
    localStorage.setItem("darkmode", "true");
  } else {
    btn.textContent = "Dark";
    localStorage.setItem("darkmode", "false");
  }
}

btn.addEventListener("click", toggleTheme);
