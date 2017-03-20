// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {

  one()
  two()
  three()
}

function one () {
  var one = document.getElementById('boxone')
  one.addEventListener('mouseenter', makeBlue)
  one.addEventListener('mouseleave', makeWhite)
}

function two () {
  var two = document.getElementById('boxtwo')
  two.addEventListener('mouseenter', makeGreen)
  two.addEventListener('mouseleave', makeWhite)
}
function three () {
  var three = document.getElementById('boxthree')
  three.addEventListener('mouseenter', makeOrange)
  three.addEventListener('mouseleave', makeWhite)
}


function makeBlue (evt) {
  evt.target.style.backgroundColor = 'blue'
}

function makeWhite (evt) {
  evt.target.style.backgroundColor = 'white'
}
function makeGreen (evt) {
  evt.target.style.backgroundColor = 'green'
}
function makeOrange (evt) {
  evt.target.style.backgroundColor = 'orange'
}
