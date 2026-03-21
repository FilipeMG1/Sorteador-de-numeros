
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
    const baseDelay = 3000
    const startTime = index * baseDelay

    setTimeout(() => {
      const span = document.createElement("span")
      span.classList.add("resHide", "lg-res")
      // span.classList.add("resNum")
      span.textContent = num
      
      resultsDiv.appendChild(span)
      
      setTimeout(() => {
        // span.classList.add("resNum")
        span.classList.remove("resHide")
        span.classList.add("resAppear")
      }, 500)

      setTimeout(() => {
        span.classList.remove("resAppear")
        span.classList.add("resNum")
      }, 800)

      setTimeout(() => {
        span.classList.add("res-bl-txt", "resRoll")
      }, 1200)

      setTimeout(() => {
        span.classList.add("active")
      }, 2500)

    }, startTime)
  })

  const hideSorter = document.getElementById("sorter")
  hideSorter.setAttribute("class", "hider")

  const removeHider = document.getElementById("result-sec")
  removeHider.removeAttribute("class", "hider")
})