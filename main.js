document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});
