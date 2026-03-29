
const numQuantity = document.getElementById("numQuantity")
const numFrom = document.getElementById("numFrom")
const numTo = document.getElementById("numTo")
const noRepeat = document.getElementById("noRepeat")
const pick = document.getElementById("pick")
const reroll = document.getElementById("reroll")

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
  const nqv = Number(numQuantity.value) || Number(numQuantity.placeholder)
  const nfv = Number(numFrom.value) || Number(numFrom.placeholder)
  const ntv = Number(numTo.value) || Number(numTo.placeholder)
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

  const baseDelay = 3000
  const totalItems = pickedNumbers.length

  pickedNumbers.forEach((num, index) => {
    const startTime = index * baseDelay

    setTimeout(() => {
      const span = document.createElement("span")
      span.classList.add("resHide", "lg-res")
      span.textContent = num

      resultsDiv.appendChild(span)

      setTimeout(() => {
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

  const totalDuration = (totalItems - 1) * baseDelay + 3200

  setTimeout(() => {
    const buttonRerrolAppear = document.getElementById("results-button")
    buttonRerrolAppear.classList.add("button-show")
  }, totalDuration)

  setTimeout(() => {
    const buttonRerrolAppear = document.getElementById("results-button")
    buttonRerrolAppear.classList.remove("button-container-up")

    const unlockScroll = document.getElementById("results")
    unlockScroll.classList.add("unlock-scroll")
  }, totalDuration + 50)

  const hideSorter = document.getElementById("sorter")
  hideSorter.setAttribute("class", "hider")

  const removeHider = document.getElementById("result-sec")
  removeHider.removeAttribute("class", "hider")
})

reroll.addEventListener("click", () => {
  const secSorter = document.getElementById("sorter")
  secSorter.classList.remove("hider")

  const secResult = document.getElementById("result-sec")
  secResult.classList.add("hider")

  const secButton = document.getElementById("results-button")
  secButton.classList.add("button-container-up")
  secButton.classList.remove("button-show")

  const unlockScroll = document.getElementById("results")
  unlockScroll.classList.remove("unlock-scroll")
})