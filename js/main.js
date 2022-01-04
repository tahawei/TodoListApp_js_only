const container = document.querySelector(".container");
const iconUpload = document.querySelector(".icon-upload");
const input = document.querySelector("input");
const iconTrash = document.querySelector(".icon-trash");

iconUpload.addEventListener("click", (eo) => {
  const task = `<div class="task">
    <span class="icon-star icon"></span>
    <p>${input.value}</p>
    <div>
      <span class="icon-trash icon"></span>
      <span class="icon-angry2 icon"></span>
    </div>`;
  container.innerHTML += task;
  eo.preventDefault();
});
container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.toggle("dn");
    eo.target.parentElement.innerHTML += `<span class="icon-heart"></span>`;
  }
});
