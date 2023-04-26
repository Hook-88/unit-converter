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
  procesConversion()
})

// userInputEl.addEventListener("keydown", function (event) {
//   //console.log(event.code)
//   if (event.code === 'Enter') {
//     procesConversion()
//   }
// })

userInputEl.addEventListener("focus", function () {
  const tip = document.createElement("p")
  tip.textContent = `Click the convert button or hit Enter to start the conversion`
  console.log(convertBtn.parentElement) 
})

function procesConversion() {
  //check if input fiels has no value and set it to null else set it to input value
  const userInput = userInputEl.value === "" ? null : userInputEl.value
  if (userInput === null) {
    userInputEl.value = 0
  }
  
  const mainNum = Number(userInput)
  
  renderResults(mainNum)
  userInputEl.value = mainNum
}




function getLength(num) {
  return {
    feet: num * 3.2808,
    meters: num / 3.2808
  }
}

function getVolume(num) {
  return {
    gallon: num / 3.785,
    liter: num * 3.785   
  }
}

function getMass(num) {
  return {
    pounds: num * 2.20462,
    kilos: num / 2.20462
  }
}

// function renderLengthResults(num) {
//   const length = getLength(num)
//   lengthCardResultsEl.innerHTML = `${num} meters = ${length.feet.toFixed(3)} feet | ${num} feet = ${length.meters.toFixed(3)} meters`
// }

// function renderVolumeResults(num) {
//   const volume = getVolume(num)
//   volumeCardResultsEl.innerHTML = `${num} liters = ${volume.gallon.toFixed(3)} gallons | ${num} gallons = ${volume.liter.toFixed(3)} liters`
// }

// function renderMassResults(num) {
//   const mass = getMass(num)
//   massCardResults.innerHTML = `${num} kilos = ${mass.pounds.toFixed(3)} pounds | ${num} pounds = ${mass.kilos.toFixed(3)} kilos`
// }

function renderUnitResults(num, getUnitFunc, htmlEl) {
  const unit = getUnitFunc(num)
  const unit1Str = Object.keys(unit)[1]
  const unit2Str = Object.keys(unit)[0]

  htmlEl.innerHTML = `${num} ${unit1Str} = ${unit[unit1Str].toFixed(3)} ${unit2Str} | ${num} ${unit2Str} = ${unit[unit2Str].toFixed(3)} ${unit1Str}`
}



function renderResults(num) {
  renderUnitResults(num, getLength, lengthCardResultsEl)
  renderUnitResults(num, getVolume, volumeCardResultsEl)
  renderUnitResults(num, getMass, massCardResults)
}

renderResults(userInputEl.value)

