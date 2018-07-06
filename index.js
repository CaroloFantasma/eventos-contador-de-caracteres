const inputTexto = document.querySelector("input")
const btnClick = document.querySelector("button");
const counter = document.querySelector("span")

btnClick.disabled = true;
inputTexto.addEventListener("input", () => {
  if (inputTexto.value.length > 0) {
    btnClick.disabled = false;
  } else {
    btnClick.disabled = true;
  }
})

inputTexto.addEventListener("keydown", () => {
  inputTexto.value
  counter.innerHTML = 249 - inputTexto.value.length;

})