// Selecionamos os seletores.
const switchActive = document.querySelector(".switch")
const sortNumberTitle = document.querySelector(".sort-number h2")
const sortNumberInfo = document.querySelector(".sort-number p")
const toggleSortNumber = document.querySelector(".toggle-sort-number")
const textToggleSortNumber = document.querySelector(".toggle-sort-number span")
const imgToggleSortNumber = document.querySelector(".toggle-sort-number img")
const sortNumber = document.querySelector(".sort-number div")
const reloadPage = document.querySelector("header")

// Selecionando os valores dos inputs
const quantityNumber = document.getElementById("quantity-numbers")
const inNumber = document.getElementById("in-number")
const outNumber = document.getElementById("out-number")

const resultNumber = document.querySelector(".fields-numbers")

// Add class active format option repeat number.
switchActive.addEventListener("click", () => {
  switchActive.classList.toggle("active")
})

// Atualizando o valor de H2 e p quando sorteado.
toggleSortNumber.addEventListener("click", () => {
  const qtd = Number(quantityNumber.value)
  const min = Number(inNumber.value)
  const max = Number(outNumber.value)

  // Validações
  if (qtd === 0 || min === 0 || max === 0) {
    alert("Por favor, preencha todos os campos")
    return
  }

  if (min > max) {
    alert("O valor 'DE' não pode ser maior que o 'ATÉ'")
    return
  }

  if (qtd > (max - min + 1)) {
    alert("A quantidade de números é maior que o intervalo disponível!")
    return
  }

  const results = []
  const isNoRepeat = switchActive.classList.contains("active")

  if (isNoRepeat) {
    const uniqueNumbers = new Set ()
    while (uniqueNumbers.size < qtd) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
      uniqueNumbers.add(randomNumber)
    }
    results.push(...uniqueNumbers)
  } else {
    console.log("com repetição");

    for (let i = 0; i < qtd; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
      results.push(randomNumber)
    }
  }

  sortNumberTitle.textContent = "RESULTADO"
  sortNumberInfo.textContent = ""
  sortNumber.classList.add("flex-sort")

  resultNumber.innerHTML = `<p id="numbers-sorted">${results.join(" ")}</p>`
  resultNumber.classList.add("flex-sort")

  textToggleSortNumber.textContent = "SORTEAR NOVAMENTE"
  imgToggleSortNumber.setAttribute("src", `assets/reload.svg`)
})

// Formatando inputs para receber apenas valores numéricos.
resultNumber.oninput = () => {
  const regex = /\D+/g

  quantityNumber.value = quantityNumber.value.replace(regex, "")
  inNumber.value = inNumber.value.replace(regex, "")
  outNumber.value = outNumber.value.replace(regex, "")
}

reloadPage.addEventListener("click", () => {
  location.reload()
})
