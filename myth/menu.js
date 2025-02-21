const menu = [
  { title: "Информация", url: "index.html" },
  { title: "Допущения и фотки", url: "photos.html" },
  { title: "Персонажи", url: "characters.html" },
  { title: "0. Затакт", url: "preface.html" },
  { title: "1. Шебека", url: "xebec.html" },
  { title: "2. На чужом берегу", url: "on-a-strange-shore.html" },
  { title: "3. Долгая дорога домой", url: "long-way-home.html" },
  { title: "┣ 1. В Алжире все спокойно", url: "all-is-calm-in-algeria.html" },
  { title: "┣ 2. Куда приводят следы", url: "where-the-tracks-lead.html" },
  { title: "┗ 3. Отплытие", url: "long-way-home1.html" },
  { title: "4. Уважение", url: "respect.html" },
  { title: "5. Предсказание", url: "prediction.html" },
];
const menuBox = document.getElementById("menu");
let ul = document.createElement("ul");
let page = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
menu.forEach((m) => {
  let li = document.createElement("li");
  if (m.url !== page) {
    let a = document.createElement("a");
    a.innerText = m.title;
    a.setAttribute("href", m.url);
    li.append(a);
  } else {
    let span = document.createElement("span");
    span.innerText = m.title;
    li.append(span);
  }
  ul.append(li);
});
menuBox.append(ul);
