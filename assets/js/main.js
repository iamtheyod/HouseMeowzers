// Inject header and footer into pages
document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", "partials/header.html");
  loadPartial("footer", "partials/footer.html");
});

function loadPartial(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // highlight current page link
      let navLinks = document.querySelectorAll(`#${id} nav a`);
      navLinks.forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute("href"))) {
          link.classList.add("active");
        }
      });
    })
    .catch(err => console.error("Error loading partial:", url, err));
}

