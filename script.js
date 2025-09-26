// // camelCase
// let countEL = document.getElementById("count-el")

// console.log(countEl) // it is a model of HTML element

// let count = 0 //we have to start with 0 increment the count variable when the button is clicked


// function increment() {
//   // console.log("clicked!")
//   count = count + 5
//   countEl.innerText = count
//   // console.log(count)
// }

let countEL = document.getElementById("count-el")
let count = 0

function increment() {
  // console.log("clicked!")
  count = count + 5
  countEl.innerText = count
}

// create a function save() which logs the count when it's called
function save() {
  console.log(count)
}

save()
