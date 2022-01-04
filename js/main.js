const container = document.querySelector(".container");
const iconUpload = document.querySelector(".icon-upload");
const input = document.querySelector("input");
const finish = document.querySelector(".finish");

iconUpload.addEventListener("click", (eo) => {
  const task = `      <div class="task">
  <span class="icon-star icon"></span>
  <p class="task-text">${input.value}</p>
  <span class="finish"></span>
  <span
    ><span class="icon-trash icon"></span>
    <span>
      <span class="icon-angry2 icon"></span>
    </span>
  </span>
</div>`;
  container.innerHTML += task;
  eo.preventDefault();
});
container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.style.display = "none";
    eo.target.parentElement.innerHTML = `<span class="icon-heart icon"></span>`;
    // finish.style.display = "block";
  } else if (eo.target.className == "icon-heart icon") {
    eo.target.style.display = "none";
    eo.target.parentElement.innerHTML = `<span class="icon-angry2 icon"></span>`;
    // finish.style.display = "none";
  } else if (eo.target.className == "icon-star icon") {
    eo.target.classList.toggle("orange");
    container.prepend(eo.target.parentElement);
  } else if (eo.target.className == "icon-star icon orange") {
    eo.target.classList.toggle("orange");
    container.append(eo.target.parentElement);
  }
});
