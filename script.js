/*
const numQuantity = document.getElementById("numQuantity")
const numFrom = document.getElementById("numFrom")
const numTo = document.getElementById("numTo")
const noRepeat = document.getElementById("noRepeat")
const pick = document.getElementById("pick")

const allNumbers = [numQuantity, numFrom, numTo]

allNumbers.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (["e", "E", "-", ",", "."].includes(e.key)) {
      e.preventDefault()
    }
  })

  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "")
  })
})

pick.addEventListener("click", () => {
  const nqv = Number(numQuantity.value)
  const nfv = Number(numFrom.value)
  const ntv = Number(numTo.value)
  const noRepeatChecked = noRepeat.checked

  const pickedNumbers = []

  if (nfv > ntv) {
    alert("Número inicial maior que final, favor insira os valores corretamente")
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const totalDisponivel = ntv - nfv + 1

  if (noRepeatChecked && nqv > totalDisponivel) {
    alert("Não é possível gerar essa quantidade sem repetir")
    return
  }

  if (noRepeatChecked === false) {
    for (let a = 0; a < nqv; a++) {
      pickedNumbers.push(randomBetween(nfv, ntv))
    }
  } else {
    while (pickedNumbers.length < nqv) {
      const num = randomBetween(nfv, ntv)

      if (!pickedNumbers.includes(num)) {
        pickedNumbers.push(num)
      }
    }
  }

  const resultsDiv = document.getElementById("results")

  resultsDiv.innerHTML = ""

  pickedNumbers.forEach((num, index) => {
    setTimeout(() => {
      const span = document.createElement("span")
      span.classList.add("resNum")
      span.textContent = num

      resultsDiv.appendChild(span)

      setTimeout(() => {
        span.classList.add("active")
      }, 1000)

    }, index * 1000)
  })

  const hideSorter = document.getElementById("sorter")
  hideSorter.setAttribute("class", "hider")

  const removeHider = document.getElementById("result-sec")
  removeHider.removeAttribute("class", "hider")
})
*/

const numQuantity = document.getElementById("numQuantity")
const numFrom = document.getElementById("numFrom")
const numTo = document.getElementById("numTo")
const noRepeat = document.getElementById("noRepeat")
const pick = document.getElementById("pick")

const allNumbers = [numQuantity, numFrom, numTo]

allNumbers.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (["e", "E", "-", ",", "."].includes(e.key)) {
      e.preventDefault()
    }
  })

  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "")
  })
})

pick.addEventListener("click", () => {
  const nqv = Number(numQuantity.value)
  const nfv = Number(numFrom.value)
  const ntv = Number(numTo.value)
  const noRepeatChecked = noRepeat.checked

  const pickedNumbers = []

  if (nfv > ntv) {
    alert("Número inicial maior que final, favor insira os valores corretamente")
  }

  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const totalDisponivel = ntv - nfv + 1

  if (noRepeatChecked && nqv > totalDisponivel) {
    alert("Não é possível gerar essa quantidade sem repetir")
    return
  }

  if (noRepeatChecked === false) {
    for (let a = 0; a < nqv; a++) {
      pickedNumbers.push(randomBetween(nfv, ntv))
    }
  } else {
    while (pickedNumbers.length < nqv) {
      const num = randomBetween(nfv, ntv)

      if (!pickedNumbers.includes(num)) {
        pickedNumbers.push(num)
      }
    }
  }

  const resultsDiv = document.getElementById("results")

  resultsDiv.innerHTML = ""

  // ANIMAÇÃO SEQUENCIAL
  const baseDelay = 1500

  pickedNumbers.forEach((num, index) => {
    const startTime = index * baseDelay

    setTimeout(() => {
      const span = document.createElement("span")
      span.classList.add("resNum")
      span.textContent = num

      resultsDiv.appendChild(span)

      //  aparece
      setTimeout(() => {
        span.classList.add("enter")
      }, 50)

      //  começa girar
      setTimeout(() => {
        span.classList.add("spin")
      }, 200)

      //  número aparece
      setTimeout(() => {
        span.classList.add("show-number")
      }, 500)

      //  finaliza
      setTimeout(() => {
        span.classList.remove("spin")
        span.classList.add("done")
      }, 900)

    }, startTime)
  })

  const hideSorter = document.getElementById("sorter")
  hideSorter.setAttribute("class", "hider")

  const removeHider = document.getElementById("result-sec")
  removeHider.removeAttribute("class")
})