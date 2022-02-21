async function apiCall(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;

  //add api call logic here
}

function appendArticles(articles, main) {
  articles.forEach((p) => {
    let div = document.createElement("div");

    let title = document.createElement("p");
    title.textContent = p.title;
    let image = document.createElement("img");
    image.src = p.urlToImage;
    let content = document.createElement("p");
    content.textContent = p.description;

    let article = [];
    div.addEventListener("click", () => {
      article.push(p);
      localStorage.setItem("article", JSON.stringify(article));
      window.location.href = "news.html";
    });

    div.append(title, image, content);
    main.append(div);
  });

  //add append logic here
}

export { apiCall, appendArticles };
