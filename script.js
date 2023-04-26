/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInputEl = document.getElementById("user-input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthCardResultsEl = document.getElementById("length-card-results")
const volumeCardResultsEl = document.getElementById("volume-card-results")
const massCardResults = document.getElementById("mass-card-results")

convertBtn.addEventListener("click", function () {
  let mainNum = Number(userInputEl.value) 
  renderResults(mainNum)
})


function getLength(num) {
  return {
    feet: num * 3.2808,
    meters: num / 3.2808
  }
}

function getVolume(num) {
  return {
    liter: num * 3.785,
    gallon: num / 3.785
  }
}

function getMass(num) {
  return {
    pounds: num * 2.20462,
    kilos: num / 2.20462
  }
}

function renderLengthResults(num) {
  const length = getLength(num)
  lengthCardResultsEl.innerHTML = `${num} meters = ${length.feet.toFixed(3)} feet | ${num} feet = ${length.meters.toFixed(3)} meters`
}

function renderVolumeResults(num) {
  const volume = getVolume(num)
  volumeCardResultsEl.innerHTML = `${num} liters = ${volume.gallon.toFixed(3)} gallons | ${num} gallons = ${volume.liter.toFixed(3)} liters`
}

function renderMassResults(num) {
  const mass = getMass(num)
  massCardResults.innerHTML = `${num} kilos = ${mass.pounds.toFixed(3)} pounds | ${num} pounds = ${mass.kilos.toFixed(3)} kilos`
}

function renderResults(num) {
  renderLengthResults(num)
  renderVolumeResults(num)
  renderMassResults(num)
}

renderResults(userInputEl.value)

// console.log(mass.kilos.toFixed(3))