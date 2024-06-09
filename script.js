document.body.innerHTML = `<h2>Hello from JS</h2>`
console.log(`test 2`)

function test(a, b) {
  this.textContent = a * b
}

let div = document.createElement('div')
console.log(div);
div.style.cssText = `width: 100px; height: 100px; background: red; text-align: center;`
document.body.appendChild(div)

test.call(div, 3, 7)

function arrCheck(arr) {
  arr.forEach( elem => console.log(elem))
}