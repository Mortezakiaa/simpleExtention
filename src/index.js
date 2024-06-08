document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  searchButton.addEventListener("click", function () {
    const query = searchInput.value;
    if (query) {
      chrome.tabs.create({
        url: "https://www.google.com/search?q=" + encodeURIComponent(query),
      });
    }
  });

  // Optional: Allow pressing Enter to perform the search
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });
});
