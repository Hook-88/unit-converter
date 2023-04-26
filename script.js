/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInputEl = document.getElementById("user-input-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function () {
  let mainNum = Number(userInputEl.value) 
  console.log(typeof mainNum)
})

function getLength(num) {
  return {
    feet: num * 3.281,
    meter: num / 3.281
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



// console.log(mass.kilos.toFixed(3))