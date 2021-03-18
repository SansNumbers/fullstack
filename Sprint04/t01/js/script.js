function circleFunc() {
  let circle = document.createElement('div');
  circle.classList.add('elem');
  return circle;
}

let widgets = document.getElementsByTagName("li");
for (var i = 0; i < widgets.length; i++){
  if (!(widgets[i].classList.contains('good') || widgets[i].classList.contains('evil') || widgets[i].classList.contains('unknown'))) {
    widgets[i].classList.add('unknown')
  }
  if (!widgets[i].hasAttribute('data-element')) {
    widgets[i].setAttribute('data-element', 'none')
  }
}

for (var i = 0; i < widgets.length; i++) {
  let value = widgets[i].getAttribute('data-element').valueOf().split(' ');
  widgets[i].appendChild(document.createElement('br'));
  if (value.includes('air')) {
      let circle = circleFunc();
      circle.classList.add('air');
      widgets[i].appendChild(circle);
  }
  if (value.includes('water')) {
      let circle = circleFunc();
      circle.classList.add('water');
      widgets[i].appendChild(circle);
  }
  if (value.includes('earth')) {
      let circle = circleFunc();
      circle.classList.add('earth');
      widgets[i].appendChild(circle);
  }
  if (value.includes('fire')) {
      let circle = circleFunc();
      circle.classList.add('fire');
      widgets[i].appendChild(circle);
  }
  if (widgets[i].getAttribute('data-element').valueOf()  == 'none') {
      let circle = circleFunc();
      let line = document.createElement('div');
      circle.classList.add('none');
      line.classList.add('line');
      circle.appendChild(line);
      widgets[i].appendChild(circle);
  }
}
