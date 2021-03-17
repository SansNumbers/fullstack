function createCircle() {
  let circle = document.createElement('div')
  circle.classList.add('elem')
  return circle
}


let cards = document.getElementsByTagName("li");
for (var i = 0; i < cards.length; i++){
  if (!(cards[i].classList.contains('good') || cards[i].classList.contains('evil') || cards[i].classList.contains('unknown'))) {
      cards[i].classList.add('unknown')
  }
  if (!cards[i].hasAttribute('data-element')) {
      cards[i].setAttribute('data-element', 'none')
  }

}

for (var i = 0; i < cards.length; i++) {

  let val = cards[i].getAttribute('data-element').valueOf().split(' ')
  cards[i].appendChild(document.createElement('br'))
  if (val.includes('air')) {
      let circle = createCircle()
      circle.classList.add('air')
      cards[i].appendChild(circle)
  }
  if (val.includes('water')) {
      let circle = createCircle()
      circle.classList.add('water')
      cards[i].appendChild(circle)
  }
  if (val.includes('earth')) {
      let circle = createCircle()
      circle.classList.add('earth')
      cards[i].appendChild(circle)
  }
  if (val.includes('fire')) {
      let circle = createCircle()
      circle.classList.add('fire')
      cards[i].appendChild(circle)
  }
  if (cards[i].getAttribute('data-element').valueOf()  == 'none') {
      let circle = createCircle()
      let line = document.createElement('div')
      circle.classList.add('none')
      line.classList.add('line')
      circle.appendChild(line)
      cards[i].appendChild(circle)
  }


}
