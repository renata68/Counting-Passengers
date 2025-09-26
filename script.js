let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let count = 0

incrementBtn.addEventListener("click", function(){
  console.log("clicked!")
  count = count + 1
  countEl.innerText = count
  })

// create a function save() which logs the count when it's called
function save() {
  console.log(count)
}
