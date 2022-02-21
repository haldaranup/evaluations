function storeSearchterm(term) {
  // return localStorage.getItem(term)
  term.addEventListener("keypress", (k) => {
    if (k.key == "Enter") {
      let value = document.getElementById("searchbar").value;
      localStorage.setItem("search_term", value);
      window.location.href = "search.html";
    }
  });
}

export default storeSearchterm;
