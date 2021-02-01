function showFilter() {
    let filters = document.getElementById("filters");
    let filterButton = document.getElementById("filterBtn");
    if (filters.style.display === "none") {
      filters.style.display = "block";
      filterButton.innerHTML = "Hide filters";
    } else {
      filters.style.display = "none";
      filterButton.innerHTML = "Show filters";
    }
  }