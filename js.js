let cols = document.getElementsByClassName("collapse");
for (let i = 0; i < cols.length; i++) {
  let block = cols[i].nextElementSibling;
  cols[i].addEventListener("click", (event) => {
    if (block.style.display === "none" || block.style.display === "") {
      block.style.display = "block";
      if (cols[i].innerText === "Показать содержимое") {
        cols[i].innerText = "Спрятать содержимое";
      }
    } else {
      block.style.display = "none";
      if (cols[i].innerText === "Спрятать содержимое") {
        cols[i].innerText = "Показать содержимое";
      }
    }
  });
}
