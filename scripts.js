// Selecionamos os seletores.
const switchActive = document.querySelector(".switch")
const sortNumberTitle = document.querySelector(".sort-number h2")
const sortNumberInfo = document.querySelector(".sort-number p")
const toggleSortNumber = document.querySelector(".toggle-sort-number")
const sortNumber = document.querySelector(".sort-number div")

// Adiciona a class active no button switch quando ativo.
// O .toggle alterna entre adicionar e remover essa classe.
switchActive.addEventListener("click", (e) => (
  switchActive.classList.toggle("active")
))

// Atualizando o valor de H2 e p quando sorteado.
toggleSortNumber.addEventListener("click", (e) => (
  sortNumberTitle.textContent = "RESULTADO DO SORTEIO"
))

toggleSortNumber.addEventListener("click", (e) => (
  sortNumberInfo.textContent = "1 RESULTADO"
))

toggleSortNumber.addEventListener("click", (e) => (
  sortNumber.classList.add(".flex-sort")
))
