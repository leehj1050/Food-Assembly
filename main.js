const toggle__btn = () => {
  let bar__icon = document.querySelector(".bar__icon");
  let hidden__menu = document.querySelector(".hidden__menu");
  bar__icon.addEventListener("click", () => {
    hidden__menu.classList.toggle("active");
    bar__icon.classList.toggle("active");
  });
};
toggle__btn();
