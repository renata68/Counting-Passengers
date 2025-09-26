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
