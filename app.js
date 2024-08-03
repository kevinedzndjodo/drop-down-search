const searchIcon = document.querySelector("#search-icon");

searchIcon.addEventListener("click", () => {
  const searchContainer = document.querySelector("#search-container");
  searchContainer.classList.toggle("hidden");
});
